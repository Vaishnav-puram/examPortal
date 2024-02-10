package com.exam.examportal.service;

import com.exam.examportal.dto.QuestionResponseDTO;

import java.util.List;

public interface CalculateResultService {
    Integer calcResult(List<QuestionResponseDTO> questionResponseDTO);
}
