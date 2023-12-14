package com.example.App.service;

import com.example.App.dto.WordDto;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface WordService {

    ResponseEntity<String> addWord(Map<String, Object> wordData);

    ResponseEntity<String> deleteWord(Integer wordId);

    ResponseEntity<String> updateWord(Integer wordId, Map<String, Object> wordData);

    ResponseEntity<WordDto> getWordById(Integer wordId);

    ResponseEntity<List<WordDto>> getAllWords();
}
