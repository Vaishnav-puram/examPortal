package com.exam.examportal.service;

import com.exam.examportal.dto.QuestionResponseDTO;
import com.exam.examportal.models.QuizModel.Question;
import com.exam.examportal.models.QuizModel.Quiz;
import com.exam.examportal.repo.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalculateResultServiceImpl implements CalculateResultService {
    @Autowired
    QuestionRepo questionRepo;
    @Override
    public Integer calcResult(List<QuestionResponseDTO> questionResponseDTO) {
        Question question=questionRepo.findByQueId(questionResponseDTO.get(0).getQueId());
        Quiz quiz=question.getQuiz();
        int maxMarks=quiz.getMaxMarks();
        int correctAnswers=0;
        for(int i=0;i<questionResponseDTO.size();i++){
            question=questionRepo.findByQueId(questionResponseDTO.get(i).getQueId());
            if(question.getAnswer().equals(questionResponseDTO.get(i).getGivenAnswer())){
                correctAnswers++;
            }
        }
        return correctAnswers;
    }
}
