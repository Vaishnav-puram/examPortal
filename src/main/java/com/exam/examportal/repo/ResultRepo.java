package com.exam.examportal.repo;

import com.exam.examportal.dto.ResultResponseDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResultRepo extends JpaRepository<ResultResponseDTO,Long> {
    List<ResultResponseDTO> findByRollno(String rollno);
}
