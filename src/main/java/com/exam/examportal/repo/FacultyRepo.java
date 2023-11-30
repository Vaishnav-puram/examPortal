package com.exam.examportal.repo;

import com.exam.examportal.models.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacultyRepo extends JpaRepository<Faculty,Integer> {
    Faculty findByEmail(String email);
}
