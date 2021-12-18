package com.RegistrationForm.UserRegister.repository;

import com.RegistrationForm.UserRegister.Register.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
}
