package com.exam.examportal.exceptions;

public class FacultyAlreadyExists extends Exception{
        private String msg;
        public FacultyAlreadyExists(String msg){
            super(msg);
        }
}
