package com.exam.examportal.cotroller;

import com.exam.examportal.exceptions.FacultyAlreadyExists;
import com.exam.examportal.exceptions.FacultyNotFound;
import com.exam.examportal.exceptions.UserAlreadyExists;
import com.exam.examportal.exceptions.UserNotFound;
import com.exam.examportal.models.*;
import com.exam.examportal.service.EmailService;
import com.exam.examportal.service.UserOTPService;
import com.exam.examportal.service.UserService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
    @Autowired
    UserOTPService userOTPService;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @GetMapping("/user/{rollno}")
    public User getUser(@PathVariable String rollno)throws UserNotFound{
        return userService.getUser(rollno);
    }

    @GetMapping("/login/{rollno}")
    public String getUserById(@PathVariable String rollno, @RequestParam String password) {
        return userService.authenticateCred(rollno,password);
    }
    @GetMapping("/login/faculty/{email}")
    public boolean getFacultyByEmail(@PathVariable String email,@RequestParam String password){
        return userService.authenticateCredFaculty(email,password);
    }
    @GetMapping("/userRole/{rid}")
    public Role getRole(@PathVariable int rid)throws UserNotFound{
        return userService.getRole(rid);
    }

    @PostMapping("/create")
    public User createUser(@RequestBody User user) throws UserAlreadyExists {

        user.setPassword(this.passwordEncoder.encode(user.getPassword()));
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

    @PostMapping("/create/faculty")
    public Faculty createFaculty(@RequestBody Faculty faculty)throws FacultyAlreadyExists {
        return userService.createFaculty(faculty);
    }
    @GetMapping("/faculty/{email}")
    public Faculty getFaculty(@PathVariable String email)throws FacultyNotFound{
        return userService.getFaculty(email);
    }

    @GetMapping("/sendMail")
    public String sendMail(@RequestParam String TO,@RequestParam String msg) throws MessagingException {
            emailService.sendMail(TO,msg);

        return "Mail sent successfully";
    }
    @GetMapping("/sendOTP/{rollno}")
    public String sendOTP(@PathVariable String rollno)throws MessagingException{
        emailService.sendOTP(rollno);
        return "OTP sent successfully";
    }
    @PostMapping("/verifyOtp")
    public String verifyOTP(@RequestBody UserOTP userOTP){
        return userOTPService.verifyOTP(userOTP);
    }
    @PostMapping("/forgetPassword")
    public String forgetPassword(@RequestBody UserRollPass userRollPass) throws UserNotFound {
        return userService.updatePassword(userRollPass.getRollno(),userRollPass.getNewPass());
    }
}
