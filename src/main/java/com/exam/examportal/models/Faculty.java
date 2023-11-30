package com.exam.examportal.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Table
@Entity(name = "faculty")
@Getter
@Setter
public class Faculty {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String name;
    private String password;
    private String subject;
    private String email;

    public Faculty() {
    }

    public Faculty(int id, String name, String password, String subject, String email) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.subject = subject;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
