package com.example.App.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class UserDto implements Serializable {

    private Integer id;
    private String name;
    private String contactNumber;
    private String email;
    private String password;
    private String status;
    private String role;
}
