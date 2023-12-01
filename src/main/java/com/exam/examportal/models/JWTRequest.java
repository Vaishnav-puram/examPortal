package com.exam.examportal.models;
public class JWTRequest {
    private String rollno;
    private String password;

    public JWTRequest(String rollno, String password) {
        this.rollno = rollno;
        this.password = password;
    }

    public String getRollno() {
        return rollno;
    }

    public void setRollno(String rollno) {
        this.rollno = rollno;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
