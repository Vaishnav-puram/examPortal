package com.exam.examportal.repo;

import com.exam.examportal.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends JpaRepository<Role,Integer> {
    Role findById(int rid);
}
