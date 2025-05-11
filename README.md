# Aplikacja do nauki języków obcych

Projekt inżynierski | Agnieszka Derus | 2024

## 📚 Opis

Aplikacja webowa wspomagająca naukę języków obcych, zbudowana w technologii **React.js** (frontend) oraz **Spring Boot** (backend). Umożliwia użytkownikom naukę słówek, gramatyki, wymowy, a także rozwiązywanie quizów i testów, dostosowanych do poziomu językowego od A1 do C2.

## 🎯 Funkcjonalności

- Rejestracja i logowanie (z użyciem JWT)
- Role użytkowników: Gość, Użytkownik, Administrator
- Nauka poprzez ćwiczenia: czytanie, gra językowa, wymowa, gramatyka, słownictwo
- System quizów i testów z zapisami wyników
- Panel użytkownika z historią postępów
- Panel administratora z zarządzaniem słówkami i użytkownikami
- Eksport wyników do PDF

## 🛠️ Technologie

### Frontend:
- **React.js** + JSX
- HTML/CSS
- Obsługa JWT (localStorage)
- Responsywny UI

### Backend:
- **Java 17**
- **Spring Boot** + Spring Security + Spring Data JPA
- REST API
- JWT Authorization
- MySQL

## 💾 Baza danych

System zarządza danymi użytkowników, wynikami testów i quizów, oraz słownictwem w relacyjnej bazie danych MySQL. Dane są chronione poprzez bezpieczne szyfrowanie haseł (BCrypt).

## 🔐 Bezpieczeństwo

- Uwierzytelnianie i autoryzacja JWT
- Rola użytkownika zapisywana w tokenie
- Spring Security
- Ochrona endpointów
- Haszowanie haseł z BCryptPasswordEncoder

## ✅ Testowanie

- Testy jednostkowe (np. walidacja adresu e-mail)
- Testy integracyjne (np. dodawanie/usuwanie słówek)
- Framework testowy: JUnit

## 🖼️ Zrzuty ekranu

## 🖼️ Zrzuty ekranu

![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
## 🚀 Możliwości rozwoju

- Rozbudowa treści edukacyjnych
- Funkcje społecznościowe (fora, czaty)
- Mobilna wersja aplikacji
- System personalizacji nauki na podstawie AI
- Integracja z kontami nauczycieli

