package com.example.App.controller;


import com.example.App.dto.QuizDto;
import com.example.App.service.QuizService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping(path = "/quiz")
public class QuizController {
    private final QuizService quizService;

    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @PostMapping(path = "/add")
    public ResponseEntity<String> addQuiz(@RequestBody(required = true) Map<String, Object> quizData) {
        try {
            return quizService.addQuiz(quizData);
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong (addQuiz)", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping(path = "/delete/{quizId}")
    public ResponseEntity<String> deleteQuiz(@PathVariable Integer quizId) {
        try {
            return quizService.deleteQuiz(quizId);
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong (deleteQuiz)", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PutMapping(path = "/update/{quizId}")
    public ResponseEntity<String> updateQuiz(@PathVariable Integer quizId, @RequestBody(required = true) Map<String, Object> quizData) {
        try {
            return quizService.updateQuiz(quizId, quizData);
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong (updateQuiz)", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(path = "/{quizId}")
    public ResponseEntity<QuizDto> getQuizById(@PathVariable Integer quizId) {
        try {
            return quizService.getQuizById(quizId);
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @CrossOrigin 
    @GetMapping(path = "/all")
    public ResponseEntity<List<QuizDto>> getAllQuizzes() {
        try {
            return quizService.getAllQuizzes();
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
