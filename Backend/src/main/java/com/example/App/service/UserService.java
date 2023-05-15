package com.example.App.service;

import com.example.App.dto.UserDto;
import com.example.App.entity.User;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;


public interface UserService {

    ResponseEntity<String> signUp(Map<String, String> requestMap);

    ResponseEntity<List<UserDto>> getAllUser();    ResponseEntity<String> login(Map<String, String> requestMap);

    ResponseEntity<String> update(Map<String, String> requestMap);

    ResponseEntity<String> checkToken();

    ResponseEntity<String> changePassword(Map<String, String> requestMap);

    ResponseEntity<String> forgotPassword(Map<String, String> requestMap);

}
