package com.exam.examportal.repo;

import com.exam.examportal.dto.ResultMaxDTO;
import com.exam.examportal.dto.ResultResponseDTO;
import jakarta.persistence.Tuple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResultRepo extends JpaRepository<ResultResponseDTO,Long> {
    List<ResultResponseDTO> findByRollno(String rollno);

    @Query(value = "SELECT r.quiz,MAX(r.result) AS result FROM results r where r.rollno=:rollno GROUP BY r.quiz",nativeQuery = true)
    List<Tuple> getData(String rollno);
}
