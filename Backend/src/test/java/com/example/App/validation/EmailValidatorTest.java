package com.example.App.validation;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.example.App.validators.EmailValidator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import java.util.stream.Stream;

public class EmailValidatorTest {

    private EmailValidator emailValidator;

    @BeforeEach
    public void setUp() {
        emailValidator = new EmailValidator();
    }

    @ParameterizedTest
    @MethodSource("validatorParameters")
    public void shouldValidateEmail(String email, boolean expectedValidation) {
        boolean result = emailValidator.isValid(email);
        assertEquals(result, expectedValidation);
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
}
//    Test sprawdza funkcjonalność walidacji adresów e-mail w klasie EmailValidator. Wykorzystuje zestaw różnych adresów e-mail, sprawdzając ich poprawność zgodnie z założonymi kryteriami walidacji. Oczekiwane rezultaty to true dla poprawnych adresów e-mail i false dla niepoprawnych. Test pokrywa przypadki standardowych adresów e-mail oraz różnych odstępstw od formatu poprawnego adresu e-mail.
//@BeforeEach public void setUp(): Jest to metoda oznaczona adnotacją @BeforeEach, która jest wywoływana przed każdym testem. Inicjuje obiekt EmailValidator, który jest testowany w każdej z metod testowych.
//
//@ParameterizedTest @MethodSource("validatorParameters") public void shouldValidateEmail(String email, boolean expectedValidation): Jest to test parametryzowany, który używa zestawu różnych adresów e-mail oraz oczekiwanych wartości, czy dany adres e-mail jest poprawny czy nie. Metoda shouldValidateEmail jest uruchamiana dla każdego zestawu parametrów przekazanego z metody validatorParameters.
//
//private static Stream<Arguments> validatorParameters(): Jest to metoda, która dostarcza zestaw danych testowych. Każdy zestaw danych jest reprezentowany przez obiekt Arguments, który zawiera adres e-mail oraz oczekiwany wynik walidacji dla tego adresu. Wszystkie te zestawy danych są przekazywane do testu shouldValidateEmail.
//
//public void shouldValidateEmail(String email, boolean expectedValidation): Jest to metoda testowa, która rzeczywiście wykonuje walidację adresu e-mail za pomocą EmailValidator.isValid(email). Porównuje wynik walidacji z oczekiwaną wartością, czyli expectedValidation, przy użyciu assertEquals. Jeśli wynik walidacji jest zgodny z oczekiwanym rezultatem, test przechodzi pomyślnie.
//
//        Podsumowując, klasa EmailValidatorTest sprawdza poprawność działania klasy EmailValidator, w szczególności metody isValid(email), przy użyciu różnych przypadków testowych dostarczanych za pomocą validatorParameters. Oczekiwane wyniki to true dla poprawnych adresów e-mail i false dla niepoprawnych.