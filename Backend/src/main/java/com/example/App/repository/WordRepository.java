package com.example.App.repository;

import com.example.App.entity.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordRepository extends JpaRepository<Word, Integer> {

    Word save(Word word);

    void deleteById(Integer id);


}
