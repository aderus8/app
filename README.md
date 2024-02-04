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
