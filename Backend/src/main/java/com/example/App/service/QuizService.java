package com.example.App.service;


import com.example.App.dto.QuizDto;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface QuizService {

    ResponseEntity<String> addQuiz(Map<String, Object> quizData);

    ResponseEntity<String> deleteQuiz(Integer quizId);

    ResponseEntity<String> updateQuiz(Integer quizId, Map<String, Object> quizData);

    ResponseEntity<QuizDto> getQuizById(Integer quizId);

    ResponseEntity<List<QuizDto>> getAllQuizzes();
}