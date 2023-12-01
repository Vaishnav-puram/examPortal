package com.exam.examportal.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "role")
@Getter
@Setter
public class Role {
    public Role() {
        this.userRoles = new HashSet<>();
    }

    public Role(int rid, String role) {
        this.rid = rid;
        this.role = role;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int rid;
    private String role;
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "role")
    @JsonIgnore
    private Set<User_role> userRoles=new HashSet<>();

    public Set<User_role> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<User_role> userRoles) {
        this.userRoles = userRoles;
    }

    public void setRid(int rid) {
        this.rid = rid;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public int getRid() {
        return rid;
    }

    public String getRole() {
        return role;
    }
}
