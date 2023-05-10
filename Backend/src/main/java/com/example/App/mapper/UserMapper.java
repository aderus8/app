package com.example.App.mapper;

import com.example.App.entity.User;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class UserMapper {

    public User mapToUser(Map<String, String> requestMap) {
        return new User.Builder()
                .name(requestMap.get("name"))
                .contactNumber(requestMap.get("contactNumber"))
                .email(requestMap.get("email"))
                .password(requestMap.get("password"))
                .status("false")
                .role("user")
                .build();
    }

}
