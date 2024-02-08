package com.exam.examportal.service;

import com.exam.examportal.models.QuizModel.Question;
import com.exam.examportal.models.QuizModel.Quiz;
import com.exam.examportal.repo.QuestionRepo;
import com.exam.examportal.repo.QuizRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class QuestionServiceImpl implements QuestionService{
    @Autowired
    private QuestionRepo questionRepo;
    @Override
    public Question addQuestion(Question question) {
        return questionRepo.save(question);
    }

    @Override
    public Question updateQuestion(Question question) {
        return questionRepo.save(question);
    }

    @Override
    public Set<Question> getQuestions() {
        return new LinkedHashSet<>(questionRepo.findAll());
    }

    @Override
    public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
       return questionRepo.findByQuiz(quiz);
    }

    @Override
    public Question getByQueId(Long queId) {
        return questionRepo.findByQueId(queId);
    }

    @Override
    public void deleteQuestion(Long queId) {
        Question question=new Question();
        question.setQueId(queId);
        questionRepo.delete(question);
    }
}
