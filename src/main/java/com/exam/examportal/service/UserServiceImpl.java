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
import com.exam.examportal.repo.RoleRepo;
import com.exam.examportal.repo.UserRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Set;

@Service
@Slf4j
public class UserServiceImpl implements UserService{
    private static final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);
    @Autowired
    UserRepo userRepo;
    @Autowired
    RoleRepo roleRepo;
    @Autowired
    FacultyRepo facultyRepo;
    @Override
    public User createUser(User user, Set<User_role> userRoles) throws UserAlreadyExists {
        User u=userRepo.findByRollno(user.getRollno());
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
    public String updatePassword(String rollno,String password) throws UserNotFound {
        User u=userRepo.findByRollno(rollno);
        String str="";
        if (u==null){
            throw new UserNotFound("User not found !");
        }
        else{
            log.info("old password"+u.getPassword());
            u.setPassword(password);
            log.info("new password"+u.getPassword());
            userRepo.save(u);
        }
        return "Password updated successfully.";
    }

    @Override
    public User getUser(String rollno) {
        return userRepo.findByRollno(rollno);
    }

    @Override
    public Role getRole(int rid) {
        return roleRepo.findById(rid);
    }

    @Override
    public String authenticateCred(String rollno, String password) {
        User u=userRepo.findByRollno(rollno);
        if (u!=null&&u.getPassword().equals(password)){
            String role =roleRepo.findById(u.getId()).getRole();
            System.out.println("----------> logged in as --------->: "+role);
            return role;
        }
        return "";
    }
}
