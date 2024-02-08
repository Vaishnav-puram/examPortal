package com.exam.examportal.service;

import com.exam.examportal.models.QuizModel.Quiz;
import com.exam.examportal.repo.QuizRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class QuizServiceImpl implements QuizService{
    @Autowired
    private QuizRepo quizRepo;
    @Override
    public Quiz addQuiz(Quiz q) {
        return quizRepo.save(q);
    }

    @Override
    public Quiz updateQuiz(Quiz q) {
        return quizRepo.save(q);
    }

    @Override
    public Set<Quiz> getQuizzes() {
        return new LinkedHashSet<>(quizRepo.findAllNonNullValues());
    }

    @Override
    public Quiz getQuizById(Long qid) {
        return quizRepo.findByQid(qid);
    }

    @Override
    public void deleteQuiz(Long qid) {
        Quiz quiz=new Quiz();
        quiz.setQid(qid);
        quizRepo.delete(quiz);
    }

    @Override
    public Set<Quiz> findQuizBySubject(String subject) {
        return quizRepo.findBySubject(subject);
    }
}
