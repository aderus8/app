package com.example.App.repository;

import com.example.App.entity.User;
import com.example.App.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmailId(@Param("email") String email);

    @Override
    List<User> findAll();
    List<UserDto> getAllUser();
    List<String> getAllAdmin();

    @Transactional
    @Modifying
    Integer updateStatus(@Param("status") String status,@Param("id") Integer id);

    User findByEmail(String email);
    User findUserById(Integer id);

    UserDto getUserById(@Param("id") Integer id);

}
