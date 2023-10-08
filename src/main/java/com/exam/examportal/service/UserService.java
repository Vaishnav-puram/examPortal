package com.exam.examportal.service;

import com.exam.examportal.exceptions.UserAlreadyExists;
import com.exam.examportal.exceptions.UserNotFound;
import com.exam.examportal.models.User;
import com.exam.examportal.models.User_role;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface UserService {
    public User createUser(User user, Set<User_role> userRoles) throws UserAlreadyExists;
    public String updatePassword(String email,String password)throws UserNotFound;
}
