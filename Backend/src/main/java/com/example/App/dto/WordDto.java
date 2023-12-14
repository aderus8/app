package com.example.App.dto;

public class WordDto {
    private Integer id;
    private String word;
    private String translation;
    private String languageId;
    private String level;

    // Konstruktory, gettery i settery

    public WordDto() {
    }

    public WordDto(Integer id, String word, String translation, String languageId, String level) {
        this.id = id;
        this.word = word;
        this.translation = translation;
        this.languageId = languageId;
        this.level = level;
    }

    // Gettery i settery dla pól

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String getTranslation() {
        return translation;
    }

    public void setTranslation(String translation) {
        this.translation = translation;
    }

    public String getLanguageId() {
        return languageId;
    }

    public void setLanguageId(String languageId) {
        this.languageId = languageId;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
