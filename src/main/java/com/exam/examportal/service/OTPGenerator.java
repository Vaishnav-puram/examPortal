package com.exam.examportal.service;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class OTPGenerator {

    private static final String OTP_CHARS = "0123456789";
    private static final int OTP_LENGTH = 6;

    public String generateOTP() {
        Random random = new Random();
        StringBuilder otp = new StringBuilder(OTP_LENGTH);

        for (int i = 0; i < OTP_LENGTH; i++) {
            otp.append(OTP_CHARS.charAt(random.nextInt(OTP_CHARS.length())));
        }

        return otp.toString();
    }
}

