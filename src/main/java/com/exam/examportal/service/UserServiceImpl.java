package com.exam.examportal.service;

import com.exam.examportal.exceptions.UserAlreadyExists;
import com.exam.examportal.exceptions.UserNotFound;
import com.exam.examportal.models.User;
import com.exam.examportal.models.User_role;
import com.exam.examportal.repo.RoleRepo;
import com.exam.examportal.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepo userRepo;
    @Autowired
    RoleRepo roleRepo;
    @Override
    public User createUser(User user, Set<User_role> userRoles) throws UserAlreadyExists {
        User u=userRepo.findByUsername(user.getUsername());
        User uemail=userRepo.findByEmail(user.getEmail());
        User u1;
        if (u!=null||uemail!=null){
            System.out.println("User is already present !");
            throw new UserAlreadyExists("User is already present !");
        }
        else {
            for (User_role roles : userRoles) {
                roleRepo.save(roles.getRole());
            }
            user.getUserRoles().addAll(userRoles);
            u1 = userRepo.save(user);
        }
       return u1;
    }
    public String updatePassword(String email,String password) throws UserNotFound {
        User u=userRepo.findByEmail(email);
        String str="";
        if (u==null){
            throw new UserNotFound("User not found !");
        }
        else{
            u.setPassword(password);
            userRepo.save(u);
        }
        return "Password updated successfully.";
    }
}
