package com.exam.examportal.cotroller;

import com.exam.examportal.exceptions.FacultyAlreadyExists;
import com.exam.examportal.exceptions.FacultyNotFound;
import com.exam.examportal.models.Faculty;
import com.exam.examportal.service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/faculty")
@CrossOrigin(origins = {"http://127.0.0.1:5173/"})
public class FacultyController {
    @Autowired
    FacultyService facultyService;
    @PostMapping("/create")
    public Faculty createFaculty(@RequestBody Faculty faculty)throws FacultyAlreadyExists {
        return facultyService.createFaculty(faculty);
    }
    @GetMapping("/{email}")
    public Faculty getFaculty(@PathVariable String email)throws FacultyNotFound {
        return facultyService.getFaculty(email);
    }
    @GetMapping("/login/{email}")
    public Faculty getFacultyByEmail(@PathVariable String email,@RequestParam String password) throws FacultyNotFound {
        return facultyService.authenticateCredFaculty(email,password);
    }
}
