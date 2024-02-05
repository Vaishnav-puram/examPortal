package com.exam.examportal.repo;

import com.exam.examportal.models.UserOTP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserOtpRepo extends JpaRepository<UserOTP,String> {
    UserOTP findByRollno(String rollno);
}
