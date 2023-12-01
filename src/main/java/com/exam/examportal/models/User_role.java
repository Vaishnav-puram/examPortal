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

    public int getUrid() {
        return urid;
    }

    public User getUser() {
        return user;
    }

    public Role getRole() {
        return role;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    public void setUrid(int urid) {
        this.urid = urid;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    private Role role;

}
