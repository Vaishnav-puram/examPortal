package com.exam.examportal.service;

import com.exam.examportal.models.UserOTP;
import com.exam.examportal.repo.UserOtpRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserOTPServiceImpl implements UserOTPService{
    @Autowired
    UserOtpRepo userOtpRepo;
    @Override
    public String verifyOTP(UserOTP userOTP) {
        UserOTP userOTP1=userOtpRepo.findByRollno(userOTP.getRollno());
        if(userOTP1.getOtp().equals(userOTP.getOtp())){
            return "Verified";
        }
        return "Failed";
    }
}
