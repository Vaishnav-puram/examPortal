package com.exam.examportal.service;

import com.exam.examportal.dto.ApiResponse;
import com.exam.examportal.exceptions.ApiException;
import com.exam.examportal.models.User;
import com.exam.examportal.repo.UserRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

import static org.apache.commons.io.FileUtils.readFileToByteArray;
import static org.apache.commons.io.FileUtils.writeByteArrayToFile;

@Service
public class ImageHandlingServiceImpl implements ImageHandlingService {
	// injecting value of the field read from applicatoin.properties file
	@Value("${file.upload.location}") // field level DI , <property name n value />
	// ${file.upload.location} SpEL :Spring expr language
	private String uploadFolder;

	@Autowired
	private UserRepo userRepo;

	@PostConstruct
	public void init() throws IOException {
		// chk if folder exists --yes --continue
		File folder = new File(uploadFolder);
		if (folder.exists()) {
			System.out.println("folder exists alrdy !");
		} else {
			// no --create a folder
			folder.mkdir();
			System.out.println("created a folder !");
		}
	}

	@Override
	public ApiResponse uploadImage(String rollno, MultipartFile image) throws IOException {
		User user = userRepo.findByRollno(rollno);
		// store the image on server side folder
		String path = uploadFolder.concat(image.getOriginalFilename());
		System.out.println(path);
		// Use FileUtils method : writeByte[] --> File
		writeByteArrayToFile(new File(path), image.getBytes());
		// set image path
		user.setProfile(path);
		userRepo.save(user);
		return new ApiResponse("Image file uploaded successfully for rollno " + user.getRollno());
	}

	@Override
	public void uploadImage(User user, MultipartFile image) throws IOException {
		// store the image on server side folder
		String path = uploadFolder.concat(image.getOriginalFilename());
		System.out.println(path);
		// Use FileUtils method : writeByte[] --> File
		writeByteArrayToFile(new File(path), image.getBytes());
		// set image path
		user.setProfile(path);
		System.out.println("Image file uploaded successfully for user " + user.getUsername());
	}

	@Override
	public byte[] serveImage(String rollno) throws IOException {
		User user=userRepo.findByRollno(rollno);
		String path = user.getProfile();
		if (path != null) {
			return readFileToByteArray(new File(path));
		} else
			throw new ApiException("Image not yet assigned !!!!");

	}

}
