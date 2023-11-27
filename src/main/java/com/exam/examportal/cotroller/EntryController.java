package com.exam.examportal.cotroller;

import com.exam.examportal.exceptions.UserAlreadyExists;
import com.exam.examportal.exceptions.UserNotFound;
import com.exam.examportal.models.Role;
import com.exam.examportal.models.User;
import com.exam.examportal.models.User_role;
import com.exam.examportal.service.EmailService;
import com.exam.examportal.service.UserService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/exam")
@CrossOrigin("*")
public class EntryController {
    @Autowired
    UserService userService;
    @Autowired
    EmailService emailService;


    @PostMapping("/create")
    public User createUser(@RequestBody User user) throws UserAlreadyExists {

        Role role=new Role();
        role.setRid(124);
        role.setRole("NORMAL");
        User_role userRole=new User_role();
        userRole.setUser(user);
        userRole.setRole(role);
        Set<User_role> user_roles=new HashSet<>();
        user_roles.add(userRole);
        return userService.createUser(user,user_roles);
    }

    @GetMapping("/sendMail")
    public String sendMail(@RequestParam String TO,@RequestParam String msg) throws MessagingException {
            emailService.sendMail(TO,msg);

        return "Mail sent successfully";
    }
    @GetMapping("/sendOTP")
    public String sendOTP(@RequestParam String to)throws MessagingException{
        emailService.sendOTP(to);
        return "OTP sent successfully";
    }
    @GetMapping("/forgetPassword")
    public String forgetPassword(@RequestParam String email,@RequestParam String password) throws UserNotFound {
        return userService.updatePassword(email,password);
    }
}
