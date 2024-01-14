package com.example.App.service.serviceImpl;

import com.example.App.dto.QuizDto;
import com.example.App.entity.Quiz;
import com.example.App.repository.QuizRepository;
import com.example.App.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuizServiceImpl implements QuizService {

    private final QuizRepository quizRepository;

    @Autowired
    public QuizServiceImpl(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    @Override
    public ResponseEntity<String> addQuiz(Map<String, Object> quizData) {
        try {
            Quiz quiz = createQuizFromMap(quizData);

            quizRepository.save(quiz);

            return new ResponseEntity<>("Quiz added successfully", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Failed to add quiz", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private Quiz createQuizFromMap(Map<String, Object> quizData) {
        Quiz quiz = new Quiz();

        if (quizData.containsKey("question")) {
            quiz.setQuestion((String) quizData.get("question"));
        }

//        if (quizData.containsKey("answers")) {
//            quiz.setAnswers((List<String>) quizData.get("answers"));
//        }

        if (quizData.containsKey("correct_answer")) {
            quiz.setCorrectAnswer((String) quizData.get("correct_answer"));
        }

        if (quizData.containsKey("level")) {
            quiz.setLevel((String) quizData.get("level"));
        }

        if (quizData.containsKey("category")) {
            quiz.setCategory((String) quizData.get("category"));
        }

        if (quizData.containsKey("incorrect_answer1")) {
            quiz.setIncorrectAnswer1((String) quizData.get("incorrect_answer1"));
        }

        if (quizData.containsKey("incorrect_answer2")) {
            quiz.setIncorrectAnswer1((String) quizData.get("incorrect_answer2"));
        }

        if (quizData.containsKey("incorrect_answer3")) {
            quiz.setIncorrectAnswer1((String) quizData.get("incorrect_answer3"));
        }

        return quiz;
    }


    @Override
    public ResponseEntity<String> deleteQuiz(Integer quizId) {
        try {
            Optional<Quiz> quizOptional = quizRepository.findById(quizId);
            if (quizOptional.isPresent()) {
                quizRepository.deleteById(quizId);
                return new ResponseEntity<>("Quiz deleted successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Quiz not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Failed to delete quiz", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<String> updateQuiz(Integer quizId, Map<String, Object> quizData) {
        try {
            Optional<Quiz> quizOptional = quizRepository.findById(quizId);
            if (quizOptional.isPresent()) {
                Quiz existingQuiz = quizOptional.get();
                updateQuizFromMap(existingQuiz, quizData);

                quizRepository.save(existingQuiz);
                return new ResponseEntity<>("Quiz updated successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Quiz not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Failed to update quiz", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private void updateQuizFromMap(Quiz quiz, Map<String, Object> quizData) {
    }

    @Override
    public ResponseEntity<QuizDto> getQuizById(Integer quizId) {
        try {
            Optional<Quiz> quizOptional = quizRepository.findById(quizId);
            if (quizOptional.isPresent()) {
                QuizDto quizDto = mapQuizToDto(quizOptional.get());
                return new ResponseEntity<>(quizDto, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private QuizDto mapQuizToDto(Quiz quiz) {
        QuizDto quizDto = new QuizDto();
        quizDto.setId(quiz.getId());
        quizDto.setQuestion(quiz.getQuestion());
        quizDto.setCorrectAnswer(quiz.getCorrectAnswer());
        quizDto.setLevel(quiz.getLevel());
        quizDto.setCategory(quiz.getCategory());
        quizDto.setIncorrectAnswer1(quiz.getIncorrectAnswer1());
        quizDto.setIncorrectAnswer2(quiz.getIncorrectAnswer2());
        quizDto.setIncorrectAnswer3(quiz.getIncorrectAnswer3());
        return quizDto;
    }

    @Override
    public ResponseEntity<List<QuizDto>> getAllQuizzes() {
        try {
            List<Quiz> quizzes = quizRepository.findAll();

            List<QuizDto> quizDtos = quizzes.stream()
                    .map(this::mapQuizToDto)
                    .collect(Collectors.toList());

            return new ResponseEntity<>(quizDtos, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
