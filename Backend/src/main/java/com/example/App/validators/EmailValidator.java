package com.example.App.validators;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailValidator {

    private static final String EMAIL_REGEX =
            "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";

    private final Pattern pattern;

    public EmailValidator() {
        pattern = Pattern.compile(EMAIL_REGEX);
    }

    public boolean isValid(String email) {
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }
}
