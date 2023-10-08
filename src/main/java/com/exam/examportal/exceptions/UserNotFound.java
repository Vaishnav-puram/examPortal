package com.exam.examportal.exceptions;

public class UserNotFound extends Exception{
    String msg;
    public UserNotFound(String msg){
        this.msg=msg;
    }
}
