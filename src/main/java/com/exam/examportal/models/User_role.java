package com.exam.examportal.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "userRole")
@Getter
@Setter
public class User_role {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int urid;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    private Role role;

}
