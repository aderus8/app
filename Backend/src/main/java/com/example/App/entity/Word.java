package com.example.App.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "words")
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "language_id")
    private Language language;

    @Column(name = "original_word")
    private String originalWord;

    @Column(name = "translated_word")
    private String translatedWord;

    @Column(name = "example_sentence")
    private String exampleSentence;

    @Column(name = "level")
    private String level;

}