package com.exam.examportal.service;

import com.exam.examportal.models.User;
import com.exam.examportal.models.UserOTP;
import com.exam.examportal.repo.UserOtpRepo;
import com.exam.examportal.repo.UserRepo;
import jakarta.mail.*;

import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    JavaMailSender javaMailSender;
    @Autowired
    MailHelper mailHelper;
    @Autowired
    OTPGenerator otpGenerator;

    @Autowired
    UserRepo userRepo;
    @Autowired
    UserOtpRepo userOtpRepo;

    @Value("${spring.mail.username}")
    private String from;

    @Value("${spring.mail.sub}")
    private String sub;
    MimeMessage mimeMessage;
    MimeMessageHelper mimeMessageHelper;

    public void sendMail(String to, String msg) throws MessagingException {

        mimeMessage = mailHelper.mailSender(from, to, sub, msg);
        javaMailSender.send(mimeMessage);
    }

    public void sendOTP(String to) throws MessagingException {
        String otp = otpGenerator.generateOTP();
        String content = "Your OTP for password recovery is : " + otp;
        User u=userRepo.findByRollno(to);
        System.out.println(u.getEmail());
        UserOTP userOTP=userOtpRepo.findByRollno(to);
        if(userOTP==null) {
            UserOTP userOTP1=new UserOTP();
            userOTP1.setRollno(u.getRollno());
            userOTP1.setOtp(otp);
            userOtpRepo.save(userOTP1);
        }else {
            userOTP.setOtp(otp);
            userOtpRepo.save(userOTP);
        }
        mimeMessage = mailHelper.mailSender(from, u.getEmail(), sub, content);
        javaMailSender.send(mimeMessage);

    }
}
