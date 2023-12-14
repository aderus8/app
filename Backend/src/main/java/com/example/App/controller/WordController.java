package com.example.App.controller;


import com.example.App.dto.WordDto;
import com.example.App.service.WordService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping(path = "/word")
public class WordController {
    private final WordService wordService;

    public WordController(WordService wordService) {
        this.wordService = wordService;
    }

    @PostMapping(path = "/add")
    public ResponseEntity<String> addWord(@RequestBody Map<String, Object> wordData) {
        try {
            return wordService.addWord(wordData);
        } catch (Exception exception) {
            log.error("Error occurred while adding word: {}", exception.getMessage());
            return new ResponseEntity<>("Something went wrong (addWord)", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin
    @DeleteMapping(path = "/delete/{wordId}")
    public ResponseEntity<String> deleteWord(@PathVariable Integer wordId) {
        try {
            return wordService.deleteWord(wordId);
        } catch (Exception exception) {
            log.error("Error occurred while deleting word: {}", exception.getMessage());
            return new ResponseEntity<>("Something went wrong (deleteWord)", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(path = "/update/{wordId}")
    public ResponseEntity<String> updateWord(@PathVariable Integer wordId, @RequestBody Map<String, Object> wordData) {
        try {
            return wordService.updateWord(wordId, wordData);
        } catch (Exception exception) {
            log.error("Error occurred while updating word: {}", exception.getMessage());
            return new ResponseEntity<>("Something went wrong (updateWord)", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(path = "/{wordId}")
    public ResponseEntity<WordDto> getWordById(@PathVariable Integer wordId) {
        try {
            return wordService.getWordById(wordId);
        } catch (Exception exception) {
            log.error("Error occurred while fetching word by ID: {}", exception.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(path = "/all")
    public ResponseEntity<List<WordDto>> getAllWords() {
        try {
            return wordService.getAllWords();
        } catch (Exception exception) {
            log.error("Error occurred while fetching all words: {}", exception.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
