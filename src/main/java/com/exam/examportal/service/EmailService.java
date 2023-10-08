package com.exam.examportal.service;

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

    @Value("${spring.mail.username}")
    private String from;

    @Value("${spring.mail.sub}")
    private String sub;
    MimeMessage mimeMessage;
    MimeMessageHelper mimeMessageHelper;

    public void sendMail(String to, String msg) throws MessagingException {

        mimeMessage = mailHelper.mailSender(from, to, sub, "Message from IACSD");
        javaMailSender.send(mimeMessage);
    }

    public void sendOTP(String to) throws MessagingException {
        String otp = otpGenerator.generateOTP();
        String content = "Your OTP for password recovery is : " + otp;
        mimeMessage = mailHelper.mailSender(from, to, sub, content);
        javaMailSender.send(mimeMessage);

    }
}
