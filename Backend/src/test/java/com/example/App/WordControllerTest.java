package com.example.App;

import com.example.App.controller.WordController;
import com.example.App.dto.WordDto;
import com.example.App.service.WordService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WordControllerTest {

    @Mock
    private WordService wordService;

    @InjectMocks
    private WordController wordController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testAddWord() {
        Map<String, Object> wordData = new HashMap<>();
        when(wordService.addWord(wordData)).thenReturn(ResponseEntity.ok("Word added successfully"));

        ResponseEntity<String> response = wordController.addWord(wordData);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Word added successfully", response.getBody());
    }

    @Test
    void testAddWordError() {
        Map<String, Object> wordData = new HashMap<>();
        when(wordService.addWord(wordData)).thenThrow(new RuntimeException("Simulated error"));

        ResponseEntity<String> response = wordController.addWord(wordData);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals("Something went wrong (addWord)", response.getBody());
    }

    @Test
    void testDeleteWord() {
        Integer wordId = 1;
        when(wordService.deleteWord(wordId)).thenReturn(ResponseEntity.ok("Word deleted successfully"));

        ResponseEntity<String> response = wordController.deleteWord(wordId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Word deleted successfully", response.getBody());
    }

    @Test
    void testDeleteWordError() {
        Integer wordId = 1;
        when(wordService.deleteWord(wordId)).thenThrow(new RuntimeException("Simulated error"));

        ResponseEntity<String> response = wordController.deleteWord(wordId);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals("Something went wrong (deleteWord)", response.getBody());
    }

    @Test
    void testUpdateWord() {
        Integer wordId = 1;
        Map<String, Object> wordData = new HashMap<>();
        when(wordService.updateWord(wordId, wordData)).thenReturn(ResponseEntity.ok("Word updated successfully"));

        ResponseEntity<String> response = wordController.updateWord(wordId, wordData);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Word updated successfully", response.getBody());
    }

    @Test
    void testUpdateWordError() {
        Integer wordId = 1;
        Map<String, Object> wordData = new HashMap<>();
        when(wordService.updateWord(wordId, wordData)).thenThrow(new RuntimeException("Simulated error"));

        ResponseEntity<String> response = wordController.updateWord(wordId, wordData);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals("Something went wrong (updateWord)", response.getBody());
    }

    @Test
    void testGetWordById() {
        Integer wordId = 1;
        WordDto wordDto = new WordDto(wordId, "TestWord", "TestTranslation", "en", "easy");
        when(wordService.getWordById(wordId)).thenReturn(ResponseEntity.ok(wordDto));

        ResponseEntity<WordDto> response = wordController.getWordById(wordId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(wordDto, response.getBody());
    }

    @Test
    void testGetWordByIdError() {
        Integer wordId = 1;
        when(wordService.getWordById(wordId)).thenThrow(new RuntimeException("Simulated error"));

        ResponseEntity<WordDto> response = wordController.getWordById(wordId);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertNull(response.getBody());
    }

    @Test
    void testGetAllWords() {
        List<WordDto> wordDtos = Collections.singletonList(new WordDto(1, "TestWord", "TestTranslation", "en", "easy"));
        when(wordService.getAllWords()).thenReturn(ResponseEntity.ok(wordDtos));

        ResponseEntity<List<WordDto>> response = wordController.getAllWords();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(wordDtos, response.getBody());
    }

    @Test
    void testGetAllWordsError() {
        when(wordService.getAllWords()).thenThrow(new RuntimeException("Simulated error"));

        ResponseEntity<List<WordDto>> response = wordController.getAllWords();

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertNull(response.getBody());
    }
}
