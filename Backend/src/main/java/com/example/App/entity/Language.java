package com.example.App.entity;


import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@NamedQuery(name = "Language.getAllLanguages", query = "select new com.example.App.wrapper.LanguageWrapper(u.id,u.languageName,u.languageCode) from Language u ")

//@Builder
@Data
@Entity
@Table(name = "languages")
public class Language implements Serializable {

    private static final long serialVersionUID = 1L;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "language_name")
    private String languageName;

    @Column(name = "language_code")
    private String languageCode;

    public Language(Builder builder) {
        this.id = builder.id;
        this.languageCode = builder.languageCode;
        this.languageName = builder.languageName;
    }

    public Language() {
    }

    public static final class Builder {
        private Long id;
        private String languageName;
        private String languageCode;


        public Builder id(Long id) {
            this.id = id;
            return this;
        }
        public Builder languageCode(String languageCode) {
            this.languageCode = languageCode;
            return this;
        }
        public Builder languageName(String languageName) {
            this.languageName = languageName;
            return this;
        }

        public Language build(){
            return new Language(this);
        }
    }
}
