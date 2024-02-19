package com.exam.examportal.service;

import com.exam.examportal.dto.ResultMaxDTO;
import com.exam.examportal.repo.QuizRepo;
import com.exam.examportal.repo.ResultRepo;
import jakarta.persistence.Tuple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ResultServiceImpl implements ResultService {
    @Autowired
    private ResultRepo resultRepo;
    @Autowired
    private QuizRepo quizRepo;
    @Override
    public List<ResultMaxDTO> getData(String rollno) {
        List<Tuple> tuples=resultRepo.getData(rollno);
        List<ResultMaxDTO> resultMaxDTOS=new ArrayList<>();
        for(Tuple t:tuples){
            ResultMaxDTO resultMaxDTO=new ResultMaxDTO();
            resultMaxDTO.setQuiz(t.get("quiz",String.class));
            resultMaxDTO.setResult(t.get("result",Integer.class));
            resultMaxDTO.setMaxResult(quizRepo.findByTitle(resultMaxDTO.getQuiz()).getMaxMarks());
            resultMaxDTOS.add(resultMaxDTO);
        }
        return resultMaxDTOS;
    }
}
