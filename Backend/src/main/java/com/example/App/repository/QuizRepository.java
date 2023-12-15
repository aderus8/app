package com.example.App.repository;

import com.example.App.entity.Quiz;
import com.example.App.dto.QuizDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Integer> {

    @Query("SELECT q FROM Quiz q WHERE q.id = :id")
    Quiz findQuizById(@Param("id") Integer id);

    List<Quiz> findAll();


}
