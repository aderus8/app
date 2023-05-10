package com.example.App.service.serviceImpl;

import com.example.App.entity.Language;
import com.example.App.mapper.LanguageMapper;
import com.example.App.repository.LanguageRepository;
import com.example.App.service.LanguageService;
import com.example.App.wrapper.LanguageWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class LanguageServiceImpl implements LanguageService {

    @Autowired
    LanguageRepository languageRepository;

    @Autowired
    LanguageMapper languageMapper;

    @Override
    public ResponseEntity<String> add(Map<String, String> requestMap) {
        log.info("inside add service impl");
       languageRepository.save(languageMapper.mapToLanguage(requestMap));
       return ResponseEntity.ok("Language added successfully.");
    }

    @Override
    public ResponseEntity<List<LanguageWrapper>> getAllLanguages() {
        log.info("get all servcie impl");
        try{
            return new ResponseEntity<>(languageRepository.getAllLanguages(), HttpStatus.OK);
        } catch (Exception exception){
            exception.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
