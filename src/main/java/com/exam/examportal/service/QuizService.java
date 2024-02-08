package com.exam.examportal.service;

import com.exam.examportal.models.QuizModel.Quiz;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface QuizService {
    Quiz addQuiz(Quiz q);
    Quiz updateQuiz(Quiz q);
    Set<Quiz> getQuizzes();
    Quiz getQuizById(Long qid);
    void deleteQuiz(Long qid);
}
