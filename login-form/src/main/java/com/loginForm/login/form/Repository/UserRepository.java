package com.loginForm.login.form.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.loginForm.login.form.UserModel.User;
public interface UserRepository extends MongoRepository<User, String > {


    User findByUsername(String username);
}
