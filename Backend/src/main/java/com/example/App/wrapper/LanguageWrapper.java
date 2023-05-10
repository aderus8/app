package com.example.App.wrapper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@NoArgsConstructor
public class LanguageWrapper {


    private Long id;

    private String languageName;

    private String languageCode;

    public LanguageWrapper(Long id, String languageName, String languageCode) {
        this.id = id;
        this.languageName = languageName;
        this.languageCode = languageCode;
    }
}
