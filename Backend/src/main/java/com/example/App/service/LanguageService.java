package com.example.App.service;

import com.example.App.entity.Language;
import com.example.App.wrapper.LanguageWrapper;
import com.example.App.wrapper.UserWrapper;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface LanguageService {
    ResponseEntity<String> add(Map<String, String> requestMap);

    ResponseEntity<List<LanguageWrapper>> getAllLanguages();

}
