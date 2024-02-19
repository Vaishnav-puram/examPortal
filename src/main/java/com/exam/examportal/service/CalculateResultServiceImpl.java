package com.exam.examportal.service;

import com.exam.examportal.dto.QuestionResponseDTO;
import com.exam.examportal.dto.ResultResponseDTO;
import com.exam.examportal.models.QuizModel.Question;
import com.exam.examportal.models.QuizModel.Quiz;
import com.exam.examportal.models.User;
import com.exam.examportal.repo.QuestionRepo;
import com.exam.examportal.repo.ResultRepo;
import com.exam.examportal.repo.UserRepo;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.util.ArrayList;
import java.util.List;

@Service
public class CalculateResultServiceImpl implements CalculateResultService {
    @Autowired
    QuestionRepo questionRepo;
    @Autowired
    UserRepo userRepo;

    @Autowired
    EmailService emailService;
    @Autowired
    ResultRepo resultRepo;
    @Override
    public List<ResultResponseDTO> calcResult(List<QuestionResponseDTO> questionResponseDTO,String rollno) throws MessagingException {
        List<ResultResponseDTO> resultResponseDTOList=new ArrayList<>();
        Question question=questionRepo.findByQueId(questionResponseDTO.get(0).getQueId());
        Quiz quiz=question.getQuiz();
        int maxMarks=quiz.getMaxMarks();
        int correctAnswers=0;
        for(int i=0;i<questionResponseDTO.size();i++){
            ResultResponseDTO resultResponseDTO=new ResultResponseDTO();
            question=questionRepo.findByQueId(questionResponseDTO.get(i).getQueId());
            resultResponseDTO.setQueId(question.getQueId());
            resultResponseDTO.setContent(question.getContent());
            resultResponseDTO.setActualAnswer(question.getAnswer());
            resultResponseDTO.setGivenAnswer(questionResponseDTO.get(i).getGivenAnswer());
            resultResponseDTO.setOption_1(question.getOption_1());
            resultResponseDTO.setOption_2(question.getOption_2());
            resultResponseDTO.setOption_3(question.getOption_3());
            resultResponseDTO.setOption_4(question.getOption_4());
            resultResponseDTO.setRollno(rollno);

            resultResponseDTOList.add(resultResponseDTO);
            if(question.getAnswer().equals(questionResponseDTO.get(i).getGivenAnswer())){
                correctAnswers++;
            }
        }
        int finalCorrectAnswers = correctAnswers;
        resultResponseDTOList.forEach((result)-> {
            result.setResult(finalCorrectAnswers);
            resultRepo.save(result);
        });
        User user=userRepo.findByRollno(rollno);
        StringBuilder sb = new StringBuilder();
        for (ResultResponseDTO dto : resultResponseDTOList) {
            sb.append(dto.toString()).append(",");
        }

        String result="Hello : "+user.getFirstname() +" ( "+rollno+" )";
        result += !sb.isEmpty() ? sb.substring(0, sb.length() - 2) : ""+"\n";
        result+="Score is "+finalCorrectAnswers+"/"+maxMarks;
        emailService.sendMail(user.getEmail(),result);
        return resultResponseDTOList;
    }
}
