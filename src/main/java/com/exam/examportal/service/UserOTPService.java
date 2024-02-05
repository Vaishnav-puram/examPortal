package com.exam.examportal.service;

import com.exam.examportal.models.UserOTP;
import org.springframework.stereotype.Service;

@Service
public interface UserOTPService {
    String verifyOTP(UserOTP userOTP);
}
