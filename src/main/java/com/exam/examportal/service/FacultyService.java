package com.exam.examportal.service;

import com.exam.examportal.exceptions.FacultyAlreadyExists;
import com.exam.examportal.exceptions.FacultyNotFound;
import com.exam.examportal.models.Faculty;

public interface FacultyService {
    Faculty createFaculty(Faculty faculty) throws FacultyAlreadyExists;
    Faculty getFaculty(String email) throws FacultyNotFound;

    Faculty authenticateCredFaculty(String email, String password) throws FacultyNotFound;
}
