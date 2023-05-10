package com.example.App.repository;

import com.example.App.entity.Language;
import com.example.App.wrapper.LanguageWrapper;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LanguageRepository extends JpaRepository<Language, Long> {
    List<LanguageWrapper> getAllLanguages();
}
