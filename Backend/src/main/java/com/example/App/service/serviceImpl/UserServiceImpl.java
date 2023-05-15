package com.example.App.service.serviceImpl;

import com.example.App.EmailNAZWA;
import com.example.App.JWT.JAKASNAZWAUserDetailsService;
import com.example.App.JWT.JwtAuthFilter;
import com.example.App.JWT.JwtService;
import com.example.App.entity.User;
import com.example.App.mapper.UserMapper;
import com.example.App.repository.UserRepository;
import com.example.App.service.UserService;
import com.example.App.dto.UserDto;
import com.google.common.base.Strings;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.*;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    UserMapper userMapper;

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtService jwtService;
    @Autowired
    JwtAuthFilter jwtFilter;
    @Autowired
    JAKASNAZWAUserDetailsService JAKASNAZWAUserDetailsService;
    @Autowired
    EmailNAZWA email;

    @Override
    public ResponseEntity<String> signUp(Map<String, String> requestMap) {
        log.info("Sign up {}", requestMap);
        try {
            if (validateSignUpMap(requestMap)) {
                return saveUser(requestMap);
            } else {
                return new ResponseEntity<>("Invalid data", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
   }

    //SPRAWDZIĆ CZY TO NA PEWNO DOBRZE DZIAŁA !!!!!!!!!!
    // TO NIE DZIAŁA
    private boolean validateSignUpMap(Map<String, String> requestMap){
//        if (requestMap.containsKey("name") && requestMap.containsKey("contactNumber")
//                && requestMap.containsKey("email") && requestMap.containsKey("password")) {
//            return true;
//        }
//        return false;
        String name = requestMap.get("name");
        String email = requestMap.get("email");
        String contactNumber = requestMap.get("contactNumber");
        String password = requestMap.get("password");

        if (name == null || name.isEmpty()
                || email == null || email.isEmpty()
                || contactNumber == null || contactNumber.isEmpty()
                || password == null || password.isEmpty()) {
            return false;
        }

        if (!isValidEmail(email)) {
            return false;
        }

        return true;
    }

    private boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
        return email.matches(emailRegex);
    }

    private ResponseEntity<String> saveUser(Map<String, String> requestMap){
        User user = userRepository.findByEmailId(requestMap.get("email"));
        if(Objects.isNull(user)){
            userRepository.save(userMapper.convertMapToUser(requestMap));
            return ResponseEntity.ok("User successfully registered");
        }
        return new ResponseEntity<>("Email already exists", HttpStatus.BAD_REQUEST);
    }

//  CZY TO RETURN PO JWTFILTER ADMIN JEST OK?
    @Override
    public ResponseEntity<List<UserDto>> getAllUser() {
        log.info("get all ");
        try{
            if(jwtFilter.isAdmin()){
                return new ResponseEntity<>(userRepository.getAllUser(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(new ArrayList<>(),HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception exception){
            exception.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> login(Map<String, String> requestMap) {
        log.info("login");
        try{
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(requestMap.get("email"), requestMap.get("password")));

            if(auth.isAuthenticated()){
                if(JAKASNAZWAUserDetailsService.getUserDetail().getStatus().equalsIgnoreCase("true")){
                    log.info("login chyba ok?");
                    return new ResponseEntity<String>("{\"token\":\"" +
                            jwtService.generateToken(JAKASNAZWAUserDetailsService.getUserDetail().getEmail(), JAKASNAZWAUserDetailsService.getUserDetail().getRole()) + "\"}",
                            HttpStatus.OK);
                } else {
                    return new ResponseEntity<String>("{\"message\":\"" + "Wait for admin approval." + "\"}",
                            HttpStatus.BAD_REQUEST);
                }
            }

        } catch(Exception exception) {
            log.error("{}", exception);
        } return new ResponseEntity<String>("Bad credentials", HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<String> update(Map<String, String> requestMap) {
        try{
            if(jwtFilter.isAdmin()){
                Optional<User> optional = userRepository.findById(Integer.parseInt(requestMap.get("id")));
                if(optional.isPresent()){
                    userRepository.updateStatus(requestMap.get("status"), Integer.parseInt(requestMap.get("id")));
//                    sendMailTo?
                    return new ResponseEntity<>("User status update successfully", HttpStatus.OK);
                } else {
                    return new ResponseEntity<>("User doesnt exist.", HttpStatus.UNAUTHORIZED);
                }
            }
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> checkToken() {
        return new ResponseEntity<>("true", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> changePassword(Map<String, String> requestMap) {
        try{
            User user = userRepository.findByEmail(jwtFilter.getCurrentUser());
            if(user != null){
                log.info(user.getPassword());
                log.info(requestMap.get("oldPassword"));

                if(user.getPassword().equals(requestMap.get("oldPassword"))){
                    user.setPassword(requestMap.get("newPassword"));
                    userRepository.save(user);
                    return new ResponseEntity<>("Password updated ok", HttpStatus.OK);
                }
                return new ResponseEntity<>("Bad old password", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception exception){
            exception.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    //TO NIE DZIAŁA, POPRAWIĆ
    // NIE WYSYŁA MAILA, BŁĄD JAKIŚ
    @Override
    public ResponseEntity<String> forgotPassword(Map<String, String> requestMap) {
        try{
            User user = userRepository.findByEmail(requestMap.get("email"));
            if(!Objects.isNull(user) && !Strings.isNullOrEmpty(user.getEmail())) {
                email.forgotMail(user.getEmail(), "App", user.getPassword());
                return new ResponseEntity<>("Check your mail", HttpStatus.OK);
            }
        } catch (Exception exception){
            exception.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong(userServiceImpl forgotPassword)", HttpStatus.INTERNAL_SERVER_ERROR);
    }




}
