package com.exam.examportal.repo;

import com.exam.examportal.models.QuizModel.Question;
import com.exam.examportal.models.QuizModel.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Set;

public interface QuestionRepo extends JpaRepository<Question,Long> {
    Question findByQueId(Long queId);
    Question findByContent(String content);
    Set<Question> findByQuiz(Quiz quiz);

}
