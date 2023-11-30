package com.exam.examportal.exceptions;

public class FacultyNotFound extends Exception {
    private String msg;
    public FacultyNotFound(String msg){
        super(msg);
    }
}
