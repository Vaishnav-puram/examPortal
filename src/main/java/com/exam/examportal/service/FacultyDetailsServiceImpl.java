package com.exam.examportal.service;

import com.exam.examportal.models.Faculty;
import com.exam.examportal.models.User;
import com.exam.examportal.repo.FacultyRepo;
import com.exam.examportal.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("facultyDetailsServiceImpl")
public class FacultyDetailsServiceImpl implements UserDetailsService {
    @Autowired
    FacultyRepo facultyRepo;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Faculty faculty=facultyRepo.findByEmail(email);
        if(faculty==null){
            throw new UsernameNotFoundException("No user found!");
        }
        return faculty;
    }
}
