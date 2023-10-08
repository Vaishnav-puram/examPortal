package com.exam.examportal.exceptions;

public class UserAlreadyExists extends Exception{
    String msg;
    public UserAlreadyExists(String msg){
        this.msg=msg;
    }
}
