package com.example.App;

import com.example.App.repository.WordRepository;
import com.example.App.service.serviceImpl.WordServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WordServiceImplTest {

    @Mock
    private WordRepository wordRepository;

    @InjectMocks
    private WordServiceImpl wordService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testAddWord() {
        Map<String, Object> wordData = new HashMap<>();
        wordData.put("id", 1);
        wordData.put("word", "ubiquitaire");
        wordData.put("translation", "wszechobecny");
        wordData.put("languageId", "1");
        wordData.put("level", "C2");

        ResponseEntity<String> response = wordService.addWord(wordData);

        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Word added successfully", response.getBody());
        verify(wordRepository, times(1)).save(any());
    }

    @Test
    void testDeleteWord() {
        Integer wordId = 1;

        ResponseEntity<String> response = wordService.deleteWord(wordId);

        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Word deleted successfully", response.getBody());
        verify(wordRepository, times(1)).deleteById(wordId);
    }


}
