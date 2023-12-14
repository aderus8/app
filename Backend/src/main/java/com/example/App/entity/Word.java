package com.example.App.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "word")
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "word")
    private String word;

    @Column(name = "translation")
    private String translation;

    @Column(name = "language_id")
    private String languageId;

    @Column(name = "level")
    private String level;

    public Word(Integer id, String word, String translation, String languageId, String level) {
        this.id = id;
        this.word = word;
        this.translation = translation;
        this.languageId = languageId;
        this.level = level;
    }
}
