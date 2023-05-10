package com.example.App.mapper;

import com.example.App.entity.Language;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Map;

@Slf4j
@Component
public class LanguageMapper {

    public Language mapToLanguage(Map<String, String> requestMap){
        log.info("inside builder");

        return new Language.Builder()
                .languageName(requestMap.get("languageName"))
                .languageCode(requestMap.get("languageCode"))
                .build();
    }
}
