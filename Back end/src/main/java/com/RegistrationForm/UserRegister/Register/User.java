package com.RegistrationForm.UserRegister.Register;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String Firstname;
    private String Lastname;
    private String email;
    private String password;

    public User() {
    }
//Getters
    public int getId() {
        return id;
    }

    public String getFirstname() {
        return Firstname;
    }

    public String getLastname() {
        return Lastname;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    //Setters

    public void setId(int id) {
        this.id = id;
    }

    public void setFirstname(String firstname) {
        Firstname = firstname;
    }

    public void setLastname(String lastname) {
        Lastname = lastname;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
