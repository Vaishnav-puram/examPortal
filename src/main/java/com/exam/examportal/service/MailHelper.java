package com.exam.examportal.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MailHelper {
    @Autowired
    JavaMailSender javaMailSender;
    MimeMessage mimeMessage;
    MimeMessageHelper mimeMessageHelper;
    public MimeMessage mailSender(String from,String to,String sub,String content) throws MessagingException {
        mimeMessage=javaMailSender.createMimeMessage();
        mimeMessage.setContent(content,"text/html; charset=utf-8");
        mimeMessageHelper=new MimeMessageHelper(mimeMessage);
        mimeMessageHelper.setFrom(from);
        mimeMessageHelper.setSubject(sub);
        mimeMessageHelper.setTo(to);
       // mimeMessageHelper.setText(content);
        return mimeMessage;

    }
}
