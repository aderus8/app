package com.example.App.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class QuizDto {
    private Integer id;
    private String question;
    private List<String> answers;
    private String correctAnswer;
    private String level;

    public QuizDto(Integer id, String question, List<String> answers, String correctAnswer, String level) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.level = level;
    }

}
