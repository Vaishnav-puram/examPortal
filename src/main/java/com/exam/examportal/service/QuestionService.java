package com.exam.examportal.service;

import com.exam.examportal.models.QuizModel.Question;
import com.exam.examportal.models.QuizModel.Quiz;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface QuestionService {
    Question addQuestion(Question question);
    Question updateQuestion(Question question);
    Set<Question> getQuestions();
    Set<Question> getQuestionsOfQuiz(Quiz quiz);
    Question getByQueId(Long queId);
    void deleteQuestion(Long queId);
}
