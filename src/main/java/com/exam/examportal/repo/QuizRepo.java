package com.exam.examportal.repo;

import com.exam.examportal.models.QuizModel.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Set;

public interface QuizRepo extends JpaRepository<Quiz,Long> {
    Quiz findByQid(Long qid);

    @Query("select q from Quiz q where q.category is not null")
    Set<Quiz> findAllNonNullValues();
}
