package com.RegistrationForm.UserRegister.controller;

import com.RegistrationForm.UserRegister.Register.User;
import com.RegistrationForm.UserRegister.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New User ";
    }

    @GetMapping("/getAll")
    public List<User> list(){
        return userService.getAllUsers();
    }
}
