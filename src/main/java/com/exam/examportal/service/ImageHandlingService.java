package com.exam.examportal.service;

import com.exam.examportal.dto.ApiResponse;
import com.exam.examportal.models.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ImageHandlingService {
	ApiResponse uploadImage(String rollno, MultipartFile image) throws IOException;
	ApiResponse uploadImageForQuestion(String question, MultipartFile image) throws IOException;
	byte[] serveImage(String rollno) throws IOException;
	byte[] serveImageForQuestion(String question) throws IOException;
	//used for uploading img along with emp details
	void uploadImage(User user, MultipartFile image) throws IOException;
}
