package com.example.App;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    private String loginAdminAndGetToken() throws Exception {
        Map<String, String> adminCredentials = new HashMap<>();
        adminCredentials.put("email", "agnieszka.derus@interia.pl");
        adminCredentials.put("password", "haslo");

        String response = mockMvc.perform(post("/user/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(adminCredentials)))
                .andReturn().getResponse().getContentAsString();

        JsonNode jsonResponse = objectMapper.readTree(response);
        return jsonResponse.path("token").asText();
    }



    @Test
    void signUp_ValidData_Success() throws Exception {
        Map<String, String> validData = new HashMap<>();
        validData.put("name", "John Doe");
        validData.put("email", "john12345@example.com");
        validData.put("contactNumber", "1234567890");
        validData.put("password", "strongPassword");

        mockMvc.perform(post("/user/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(validData)))
                .andExpect(status().isOk())
                .andExpect(content().string("User successfully registered"));
    }

    @Test
    void signUp_InvalidData_BadRequest() throws Exception {
        mockMvc.perform(post("/user/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"\",\"email\":\"invalid-email\",\"contactNumber\":\"1234567890\",\"password\":\"\"}"))
                .andExpect(status().isBadRequest())
                .andExpect(content().string("Invalid data"));
    }

    @Test
    void signUp_EmptyData_BadRequest() throws Exception {
        mockMvc.perform(post("/user/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{}")) // Puste ciało
                .andExpect(status().isBadRequest())
                .andExpect(content().string("Invalid data"));
    }

    @Test
    void login_ValidCredentials_Success() throws Exception {
        mockMvc.perform(post("/user/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"email\":\"agnieszka.derus@interia.pl\",\"password\":\"haslo\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").isString());
    }

    @Test
    void login_InvalidCredentials_BadRequest() throws Exception {
        mockMvc.perform(post("/user/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"email\":\"invalid-email\",\"password\":\"weakPassword\"}"))
                .andExpect(status().isBadRequest())
                .andExpect(content().string("Bad credentials"));
    }

    @Test
    void checkToken_Admin_Success() throws Exception {
        String adminToken = loginAdminAndGetToken();

        mockMvc.perform(get("/user/checkToken")
                        .header("Authorization", "Bearer " + adminToken))
                .andExpect(status().isOk())
                .andExpect(content().string("true"));
    }


    @Test
    void getAllUser_Admin_Success() throws Exception {
        String adminToken = loginAdminAndGetToken();

        mockMvc.perform(get("/user/all")
                        .header("Authorization", "Bearer " + adminToken))
                .andExpect(status().isOk());
    }


    @Test
    void checkToken_NoToken_Forbidden() throws Exception {
        mockMvc.perform(get("/user/checkToken"))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$").doesNotExist()); // Oczekujemy, że nie ma treści ciała
    }

    @Test
    void getAllUser_NoToken_Forbidden() throws Exception {
        mockMvc.perform(get("/user/all"))
                .andExpect(status().isForbidden());
    }


    @Test
    void countUsers_Success() throws Exception {
        mockMvc.perform(get("/user/counter"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.counter").isNumber());
    }





}
