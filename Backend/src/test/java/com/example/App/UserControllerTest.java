package com.example.App;

import com.example.App.controller.UserController;
import com.example.App.dto.UserCounterDto;
import com.example.App.dto.UserDto;
import com.example.App.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UserControllerTest {

    private UserService userService;
    private UserController userController;

    @BeforeEach
    void setUp() {
        userService = mock(UserService.class);
        userController = new UserController(userService, null);
    }

    // Testy dla metody signUp

    @Test
    void signUp_ValidData_Success() {
        // given
        Map<String, String> validData = new HashMap<>();
        validData.put("name", "John Doe");
        validData.put("email", "john@example.com");
        validData.put("contactNumber", "1234567890");
        validData.put("password", "strongPassword");

        when(userService.signUp(validData)).thenReturn(ResponseEntity.ok("User successfully registered"));

        // when
        ResponseEntity<String> response = userController.signUp(validData);

        // then
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void signUp_InvalidData_BadRequest() {
        // given
        Map<String, String> invalidData = new HashMap<>();
        // Test scenario with incomplete/invalid data for signUp method
        // ... (fill in with invalid data)

        when(userService.signUp(invalidData)).thenReturn(new ResponseEntity<>("Invalid data", HttpStatus.BAD_REQUEST));

        // when
        ResponseEntity<String> response = userController.signUp(invalidData);

        // then
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
    }

    // Testy dla metody login

    @Test
    void login_ValidCredentials_Success() {
        // given
        Map<String, String> validCredentials = new HashMap<>();
        validCredentials.put("email", "john@example.com");
        validCredentials.put("password", "strongPassword");

        // Implementacja testu dla poprawnych danych logowania
        // ...

        when(userService.login(validCredentials)).thenReturn(ResponseEntity.ok("Token"));

        // when
        ResponseEntity<String> response = userController.login(validCredentials);

        // then
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    // Analogicznie dla pozostałych metod...

    // Testy dla pozostałych metod UserController
    // ...

}
