package com.example.App.service.serviceImpl;

import com.example.App.dto.WordDto;
import com.example.App.entity.Word;
import com.example.App.repository.WordRepository;
import com.example.App.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class WordServiceImpl implements WordService {

    private final WordRepository wordRepository;

    @Autowired
    public WordServiceImpl(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    @Override
    public ResponseEntity<String> addWord(Map<String, Object> wordData) {
        try {
            WordDto wordDto = convertToWordDto(wordData);

            Word word = new Word();
            word.setId(wordDto.getId());
            word.setWord(wordDto.getWord());
            word.setTranslation(wordDto.getTranslation());
            word.setLanguageId(wordDto.getLanguageId());
            word.setLevel(wordDto.getLevel());

            wordRepository.save(word);
            return ResponseEntity.ok("Word added successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error adding word");
        }
    }

    @Override
    public ResponseEntity<String> deleteWord(Integer wordId) {
        try {
            wordRepository.deleteById(wordId);
            return ResponseEntity.ok("Word deleted successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error deleting word");
        }
    }

    @Override
    public ResponseEntity<String> updateWord(Integer wordId, Map<String, Object> wordData) {
        try {
            Optional<Word> optionalWord = wordRepository.findById(wordId);
            if (optionalWord.isPresent()) {
                WordDto wordDto = convertToWordDto(wordData);
                Word word = optionalWord.get();
                word.setWord(wordDto.getWord());
                word.setTranslation(wordDto.getTranslation());
                word.setLanguageId(wordDto.getLanguageId());
                word.setLevel(wordDto.getLevel());
                wordRepository.save(word);
                return ResponseEntity.ok("Word updated successfully");
            } else {
                return ResponseEntity.status(404).body("Word not found");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error updating word");
        }
    }

    @Override
    public ResponseEntity<WordDto> getWordById(Integer wordId) {
        try {
            Optional<Word> optionalWord = wordRepository.findById(wordId);
            if (optionalWord.isPresent()) {
                Word word = optionalWord.get();
                WordDto wordDto = new WordDto(
                        word.getId(),
                        word.getWord(),
                        word.getTranslation(),
                        word.getLanguageId(),
                        word.getLevel()
                );
                return ResponseEntity.ok(wordDto);
            } else {
                return ResponseEntity.status(404).build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }

    @Override
    public ResponseEntity<List<WordDto>> getAllWords() {
        try {
            List<Word> words = wordRepository.findAll();
            List<WordDto> wordDtos = new ArrayList<>();
            for (Word word : words) {
                WordDto wordDto = new WordDto(
                        word.getId(),
                        word.getWord(),
                        word.getTranslation(),
                        word.getLanguageId(),
                        word.getLevel()
                );
                wordDtos.add(wordDto);
            }
            return ResponseEntity.ok(wordDtos);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }

    // Metoda pomocnicza do konwersji danych Map<String, Object> na obiekt WordDto
    private WordDto convertToWordDto(Map<String, Object> wordData) {
        // Implementacja konwersji z Map<String, Object> na WordDto
        // Przykładowa implementacja
        Integer id = (Integer) wordData.get("id");
        String word = (String) wordData.get("word");
        String translation = (String) wordData.get("translation");
        String languageId = (String) wordData.get("languageId");
        String level = (String) wordData.get("level");

        return new WordDto(id, word, translation, languageId, level);
    }
}
