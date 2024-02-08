package com.exam.examportal.service;

import com.exam.examportal.exceptions.UserNotFound;
import com.exam.examportal.models.User;
import com.exam.examportal.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("userDetailsServiceImpl")
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepo userRepo;
    @Override
    public UserDetails loadUserByUsername(String rollno) throws UsernameNotFoundException {
        User user=userRepo.findByRollno(rollno);
        if(user==null){
            throw new UsernameNotFoundException("No user found!");
        }
        return user;
    }
}
