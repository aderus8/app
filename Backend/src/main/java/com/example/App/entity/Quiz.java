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

    @ElementCollection
    @CollectionTable(name = "quiz_answers", joinColumns = @JoinColumn(name = "quiz_id"))
    @Column(name = "answer")
    private List<String> answers;

    @Column(name = "correct_answer")
    private String correctAnswer;

    @Column(name = "level")
    private String level;

    public Quiz(String question, List<String> answers, String correctAnswer, String level) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.level = level;
    }
}
