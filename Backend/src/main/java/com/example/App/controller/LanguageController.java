package com.example.App.controller;

import com.example.App.entity.Language;
import com.example.App.service.LanguageService;
import com.example.App.wrapper.LanguageWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping(path = "/language")
public class LanguageController {

    final LanguageService languageService;

    public LanguageController(LanguageService languageService) {
        this.languageService = languageService;
    }


    @PostMapping(path="/add")
    public ResponseEntity<String> add(@RequestBody(required = true) Map<String, String> requestMap) {
        log.info("inside add");
        try{
            return languageService.add(requestMap);
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong(add language controller)", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(path = "/all")
    public ResponseEntity<List<LanguageWrapper>> getAllLanguages(){
        log.info("inside controller getAll {}");
        try{
            return languageService.getAllLanguages();
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return new ResponseEntity<List<LanguageWrapper>>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

