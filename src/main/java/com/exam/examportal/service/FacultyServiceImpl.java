package com.exam.examportal.service;

import com.exam.examportal.exceptions.FacultyAlreadyExists;
import com.exam.examportal.exceptions.FacultyNotFound;
import com.exam.examportal.models.Faculty;
import com.exam.examportal.repo.FacultyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacultyServiceImpl implements FacultyService{
    @Autowired
    FacultyRepo facultyRepo;
    @Override
    public Faculty createFaculty(Faculty faculty) throws FacultyAlreadyExists {
        Faculty f=facultyRepo.findByEmail(faculty.getEmail());
        if (f!=null){
            throw new FacultyAlreadyExists("Faculty already exists !");
        }
        return facultyRepo.save(faculty);
    }
    @Override
    public Faculty getFaculty(String email) throws FacultyNotFound {
        Faculty f=facultyRepo.findByEmail(email);
        if (f==null){
            throw new FacultyNotFound("No Faculty Found!");
        }
        return f;
    }

    @Override
    public Faculty authenticateCredFaculty(String email, String password) throws FacultyNotFound {
        Faculty f=facultyRepo.findByEmail(email);
        if (f==null&&!(f.getPassword().equals(password))){
          throw new FacultyNotFound("Faculty not found!");
        }
        System.out.println("Faculty Logged in successful");
        return f;

    }

    @Override
    public List<Faculty> getAllFaculty() {
        return facultyRepo.findAll();
    }
}
