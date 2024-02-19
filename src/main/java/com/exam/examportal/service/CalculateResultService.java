package com.exam.examportal.service;

import com.exam.examportal.dto.QuestionResponseDTO;
import com.exam.examportal.dto.ResultResponseDTO;
import jakarta.mail.MessagingException;
import org.springframework.ui.Model;

import java.util.List;

public interface CalculateResultService {
    List<ResultResponseDTO> calcResult(List<QuestionResponseDTO> questionResponseDTO, String rollno) throws MessagingException;
}
