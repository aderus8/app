package com.example.App.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Table(name = "quiz")
public class Quiz implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "question")
    private String question;

//    @ElementCollection
//    @CollectionTable(name = "quiz_answers", joinColumns = @JoinColumn(name = "quiz_id"))
//    @Column(name = "answer")
//    private List<String> answers;

    @Column(name = "correct_answer")
    private String correctAnswer;

    @Column(name = "incorrect_answer1")
    private String incorrectAnswer1;

    @Column(name = "incorrect_answer2")
    private String incorrectAnswer2;

    @Column(name = "incorrect_answer3")
    private String incorrectAnswer3;

    @Column(name = "level")
    private String level;

    @Column(name = "category")
    private String category;

    public Quiz(String question, String correctAnswer, String level, String category, String incorrectAnswer1, String incorrectAnswer2, String incorrectAnswer3) {
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.level = level;
        this.category = category;
        this.incorrectAnswer1 = incorrectAnswer1;
        this.incorrectAnswer2 = incorrectAnswer2;
        this.incorrectAnswer3 = incorrectAnswer3;
    }
}
