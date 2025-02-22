package com.loginForm.login.form.Service;

import com.loginForm.login.form.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.loginForm.login.form.UserModel.User;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return (User) userRepository.save(user);
    }

    public User findByUsername(String username) {
        return (User) userRepository.findByUsername(username);
    }
}
