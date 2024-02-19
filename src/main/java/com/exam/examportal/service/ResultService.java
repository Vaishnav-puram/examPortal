package com.exam.examportal.service;

import com.exam.examportal.dto.ResultMaxDTO;
import jakarta.persistence.Tuple;

import java.util.List;

public interface ResultService {
    List<ResultMaxDTO> getData(String rollno);
}
