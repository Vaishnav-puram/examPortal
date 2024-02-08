package com.exam.examportal.service;

import com.exam.examportal.exceptions.FacultyAlreadyExists;
import com.exam.examportal.exceptions.FacultyNotFound;
import com.exam.examportal.exceptions.UserAlreadyExists;
import com.exam.examportal.exceptions.UserNotFound;
import com.exam.examportal.models.Faculty;
import com.exam.examportal.models.Role;
import com.exam.examportal.models.User;
import com.exam.examportal.models.User_role;
import com.exam.examportal.repo.FacultyRepo;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface UserService {
    public User createUser(User user, Set<User_role> userRoles) throws UserAlreadyExists;
    public String updatePassword(String rollno,String password)throws UserNotFound;

    User getUser(String rollno);
    Role getRole(int rid);

    String authenticateCred(String rollno, String password);

}
