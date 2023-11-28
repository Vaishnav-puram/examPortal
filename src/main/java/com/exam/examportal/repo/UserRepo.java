package com.exam.examportal.repo;

import com.exam.examportal.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    User findByRollno(String rollno);
    User findByEmail(String email);
}
