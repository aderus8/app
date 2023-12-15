package com.example.App.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class QuizDto {
    private Integer id;
    private String question;
    private String correctAnswer;
    private String level;
    private String category;
    private String incorrectAnswer1;
    private String incorrectAnswer2;
    private String incorrectAnswer3;

    public QuizDto(Integer id, String question, String correctAnswer, String level, String category,  String incorrectAnswer1, String incorrectAnswer2, String incorrectAnswer3) {
        this.id = id;
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.level = level;
        this.category = category;
        this.incorrectAnswer1 = incorrectAnswer1;
        this.incorrectAnswer2 = incorrectAnswer2;
        this.incorrectAnswer3 = incorrectAnswer3;
    }

}
