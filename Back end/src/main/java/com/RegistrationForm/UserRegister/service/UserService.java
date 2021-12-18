package com.RegistrationForm.UserRegister.service;

import com.RegistrationForm.UserRegister.Register.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
