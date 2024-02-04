## Testowanie i jakość oprogramowania - projekt

### Temat projektu

Aplikacja do nauki języków obcych

### Opis projektu

Aplikacja do nauki języków obcych została stworzona z myślą o skutecznej nauce nowych słówek oraz umiejętności komunikacyjnych w różnych językach. Aplikacja oferuje użytkownikom interaktywne ćwiczenia, testy oraz możliwość śledzenia postępów.

Główne Funkcje:

Rejestracja i Logowanie:

Użytkownicy mogą założyć nowe konto, dostarczając podstawowe informacje. Istnieje opcja logowania dla zarejestrowanych użytkowników.

Ćwiczenia i Testy:

Aplikacja oferuje różnorodne ćwiczenia i testy z zakresu słownictwa, gramatyki i umiejętności komunikacyjnych.
Testy obejmują różne poziomy trudności, umożliwiając dostosowanie do indywidualnych potrzeb użytkowników.

Progres i Wyniki:

Użytkownicy mają dostęp do panelu śledzenia postępów, gdzie mogą sprawdzić jakie wyniki uzyskali w testach.

Zarządzanie Słownictwem:

Administratorzy mają możliwość dodawania nowych słówek do bazy danych, które są następnie dostępne dla wszystkich użytkowników.

Interaktywne Elementy:

Aplikacja zawiera interaktywne elementy, takie jak nagrania dźwiękowe, aby ułatwić przyswajanie nowego słownictwa.


### Dokumentacja API

### Word

#### Add word 
- Address:: `/word/add`
- Type: **POST**
- Accepts: JSON with word data:
   ``` 
  json {
  "id": 1,
  "word": "example",
  "translation": "przykład",
  "languageId": "1",
  "level": "A1"
   }
  ```
- Returns: Confirmation of word addition or an error message

####  Delete word
- Address: `/word/delete/{wordID}`
- Type: **DELETE**
- Path Parameters: wordId - ID of the word
- Returns: Confirmation of word deletion or an error message

#### Update word
- Address: `/word/update/{wordId}`
- Type: **PUT**
- Path Parameters: wordId - ID of the word
- Accepts: JSON with updated word data
   ``` 
  json {
    "word": "updatedExample",
    "translation": "zaktualizowanyPrzykład",
    "languageId": "1",
    "level": "B1"
   }
  ```
- Returns: Confirmation of word update or an error message


#### Get Word by ID
- Asdress: `/word/{wordId}`
- Type: **GET**
- Path Parameters: wordId - ID of the word
-  Returns: Word details or a 404 error if the word is not found


#### Get All Words
- Address: `/word/all`
- Type: GET
- Returns: List of all words or an error message




### User

#### User registration
- Address: `/user/signup`
- Type: **POST**
- Request Body Parameters: 
   ``` 
  json {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "contactNumber": "123456789",
    "password": "password123"
   }
  ```
- Responses:
    - 200: User registered successfully
    - 400: Invalid input data
    - 500: Something went wrong during registration

#### User login
- Address: `/user/login`
- Type: **POST**
- Request Body Parameters:
   ``` 
  json {
    "email": "john.doe@example.com",
    "password": "password123"
   }
  ```
- Responses:
  - 200: User logged in successfully (returns JWT token)
  - 400: Invalid login credentials
  - 401: Waiting for account approval by the administrator
  - 500: Something went wrong during login

#### Get all users
- Address: `/user/all`
- Type: **GET**
- Responses:
  - 200: List of all users (accessible only for administrators)
  - 401: Unauthorized (only for administrators)
  - 500: Something went wrong during data retrieval

#### Update user data
- Address: `/user/update`
- Type: **PUT**
- Request Body Parameters:
   ``` 
  json {
    "id": "1",
     "status": "APPROVED"
   }
  ```
- Responses:
  - 200: User status updated successfully (accessible only for administrators)
  - 401: Unauthorized (only for administrators)
  - 500: Something went wrong during status update

#### Check token validity
- Address: `/user/checkToken`
- Type: **GET**
- Responses:
    - 200: Token is valid
    - 500: Something went wrong during token verification

#### Change user password
- Address: `/user/changePassword`
- Type: **PUT**
- Request Body Parameters:
   ``` 
  json {
    "oldPassword": "oldPassword123",
    "newPassword": "newPassword123"
   }
  ```
- Responses:
  - 200: User password changed successfully
  - 401: Invalid old password
  - 500: Something went wrong during password change

|  | Opis | Kroki testowe | Oczekiwany wynik |
|:-------------|:----:|:-------------:|:-----------------:|
| 01 | Rejestracja nowego konta | 1. Otwórz stronę rejestracji. 2. Wprowadź poprawne dane rejestracyjne (unikalny email, hasło, itp.). 3. Sprawdź, czy konto zostało utworzone poprawnie. 4. Zaloguj się na nowo utworzone konto i sprawdź, czy dostęp do funkcji jest możliwy. | Konto zostaje pomyślnie utworzone, a użytkownik ma dostęp do funkcji po zalogowaniu. |
| 02 | Logowanie istniejącym kontem | 1. Otwórz stronę logowania. 2. Wprowadź poprawne dane logowania (email, hasło). 3. Sprawdź, czy użytkownik jest pomyślnie zalogowany. | Pomyślne zalogowanie istniejącym kontem użytkownika. |
| 03 | Przegląd dostępnych ćwiczeń | 1. Po zalogowaniu, przejdź do sekcji dostępnych ćwiczeń. 2. Sprawdź, czy lista ćwiczeń jest widoczna. 3. Otwórz jedno z ćwiczeń i sprawdź, czy interfejs jest czytelny. | Lista ćwiczeń jest widoczna, a interfejs ćwiczeń jest czytelny. |
| 04 | Dodawanie nowego słówka przez administratora | 1. Zaloguj się jako administrator. 2. Przejdź do sekcji zarządzania słówkami. 3. Dodaj nowe słówko wraz z tłumaczeniem. 4. Sprawdź, czy słówko zostało pomyślnie dodane i jest widoczne dla użytkowników. | Słówko zostaje pomyślnie dodane i jest widoczne dla użytkowników. |
| 05 | Usunięcie słówka przez administratora | 1. Zaloguj się na konto administratora. 2. Przejdź do sekcji zarządzania słówkami. 3. Znajdź konkretne słówko do usunięcia. 4. Wybierz opcję usuń słówko. 5. Potwierdź usunięcie słówka. 6. Sprawdź, czy słówko zostało pomyślnie usunięte i nie jest już widoczne w aplikacji dla użytkowników. | Słówko zostaje pomyślnie usunięte i nie jest już widoczne dla użytkowników. |
| 06 | Przegląd listy użytkowników przez administratora | 1. Zaloguj się jako administrator. 2. Przejdź do sekcji zarządzania użytkownikami. 3. Sprawdź, czy lista użytkowników jest widoczna i zawiera wszystkie istniejące konta. | Lista użytkowników jest widoczna i zawiera wszystkie istniejące konta. |
| 07 | Rozwiązanie testu przez użytkownika | 1. Zaloguj się na konto użytkownika. 2. Wybierz test do rozwiązania. 3. Odpowiedz na pytania testowe. 4. Zapisz test na koncie użytkownika. | Test zostaje pomyślnie rozwiązany i zapisany na koncie użytkownika. |
| 08 | Przegląd wyników testu przez użytkownika | 1. Zaloguj się na konto użytkownika. 2. Przejdź do sekcji wyników testów. 3. Sprawdź, czy wyniki wcześniej rozwiązanych testów są widoczne. | Wyniki wcześniej rozwiązanych testów są widoczne na koncie użytkownika. |
| 09 | Logowanie z błędnymi danymi | 1. Otwórz stronę logowania. 2. Wprowadź nieprawidłowe dane logowania (np. błędne hasło). 3. Sprawdź, czy użytkownik otrzymuje odpowiedni komunikat o błędzie. | Użytkownik otrzymuje odpowiedni komunikat o błędzie przy logowaniu z błędnymi danymi. |
| 10 | Rejestracja z istniejącym adresem e-mail | 1. Otwórz stronę rejestracji. 2. Wprowadź dane rejestracyjne z już istniejącym adresem e-mail. 3. Sprawdź, czy użytkownik otrzymuje odpowiedni komunikat o błędzie dotyczący unikalności adresu e-mail. | Użytkownik otrzymuje odpowiedni komunikat o błędzie dotyczący unikalności adresu e-mail przy rejestracji z istniejącym adresem. |

