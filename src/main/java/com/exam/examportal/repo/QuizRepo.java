package com.exam.examportal.repo;

import com.exam.examportal.models.QuizModel.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Set;

public interface QuizRepo extends JpaRepository<Quiz,Long> {
    Quiz findByQid(Long qid);
    Quiz findByTitle(String title);
    @Query("select q from Quiz q where q.category is not null")
    Set<Quiz> findAllNonNullValues();
    @Query("SELECT q FROM Quiz q JOIN q.category c WHERE c.title = :subject")
    Set<Quiz> findBySubject(@Param("subject") String subject);
}
