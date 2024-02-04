package com.example.App.validation;

import com.example.App.validators.EmailValidator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.provider.Arguments;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

public class EmailValidatorTest {

    private EmailValidator emailValidator;

    @BeforeEach
    public void setUp() {
        emailValidator = new EmailValidator();
    }

    private static Stream<Arguments> validatorParameters() {
        return Stream.of(
                Arguments.of("jankowalski@gmail.com", true),
                Arguments.of("jan.kowalski@gmail.com", true),
                Arguments.of("jankowalski.gmail.com", false),
                Arguments.of("jan.kowalski@gmail@", false),
                Arguments.of("000", false),
                Arguments.of("", false),
                Arguments.of("mark.smith@example.com", true),
                Arguments.of("anna.johnson@subdomain.example.com", true)
        );
    }


    @Test
    void testValidEmail() {
        EmailValidator validator = new EmailValidator();
        assertTrue(validator.isValid("test@example.com"));
    }


    @Test
    void testEmptyEmail() {
        EmailValidator validator = new EmailValidator();
        assertFalse(validator.isValid(""));
    }

    @Test
    void testEmailWithSpecialCharacters() {
        EmailValidator validator = new EmailValidator();
        assertFalse(validator.isValid("test!@example.com"));
    }


    @Test
    void testEmailWithMultipleAtSymbols() {
        EmailValidator validator = new EmailValidator();
        assertFalse(validator.isValid("test@@example.com"));
    }

    @Test
    void testEmailWithOnlyDomain() {
        EmailValidator validator = new EmailValidator();
        assertFalse(validator.isValid("@example.com"));
    }

    @Test
    void testEmailWithOnlyUsername() {
        EmailValidator validator = new EmailValidator();
        assertFalse(validator.isValid("test@"));
    }
}
