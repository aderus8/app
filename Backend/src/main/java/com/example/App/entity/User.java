package com.example.App.entity;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.*;
import java.io.Serializable;

@NamedQuery(name = "User.findByEmailId", query = "select u from User u where u.email=:email")
@NamedQuery(name = "User.getAllUser", query = "select new com.example.App.dto.UserDto(u.id,u.name,u.email,u.contactNumber,u.status) from User u where u.role='user'")
@NamedQuery(name = "User.updateStatus", query = "update User u set u.status=:status where u.id=:id")
@NamedQuery(name = "User.getAllAdmin", query = "select u.email from User u where u.role='admin'")

@Data
//: Adnotacja ta wskazuje, że klasa jest encją JPA, co oznacza, że ​​może być zapisana w relacyjnej bazie danych.
@Entity
@NoArgsConstructor
// Adnotacja ta mówi Hibernate, implementacja JPA użyta tutaj, aby generować tylko aktualizacje SQL dla pól, które uległy zmianie.
@DynamicUpdate
// Adnotacja ta mówi Hibernate, aby generował tylko wstawienia SQL dla pól, które nie są puste.
@DynamicInsert
@Table(name = "user")
//Ta linia deklaruje, że ​​klasa User może być serializowana, co oznacza, że ​​może być przekształcona w strumień bajtów i przesłana przez sieć lub przechowywana w pliku.
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

//  adnotacje @Id i @GeneratedValue wskazują, że pole id jest kluczem głównym tabeli user, a jego wartości będą automatycznie generowane przez bazę danych z wykorzystaniem strategii IDENTITY.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "contactNumber")
    private String contactNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "status")
    private String status;

    @Column(name = "role")
    private String role;

    public User(Builder builder) {
        id = builder.id;
        name = builder.name;
        password = builder.password;
        email = builder.email;
        status = builder.status;
        role = builder.role;
        contactNumber = builder.contactNumber;
    }


    public static final class Builder {
        private Integer id;
        private String name;
        private String contactNumber;
        private String email;
        private String password;
        private String status;
        private String role;


    public Builder(){}

    public Builder id(Integer id){
        this.id = id;
        return this;
    }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder contactNumber(String contactNumber) {
            this.contactNumber = contactNumber;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder status(String status) {
            this.status = status;
            return this;
        }

        public Builder role(String role) {
            this.role = role;
            return this;
        }

        public User build(){
        return new User(this);
        }


}}
