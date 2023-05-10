package com.example.App.dto;

import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;

@Data
@Builder
public class LanguageDto {
    private Long id;
    private String languageName;
    private String languageCode;
}

