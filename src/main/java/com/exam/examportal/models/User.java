    package com.exam.examportal.models;

    import com.fasterxml.jackson.annotation.JsonIgnore;
    import jakarta.persistence.*;
    import lombok.Getter;
    import lombok.Setter;

    import java.util.HashSet;
    import java.util.Set;

    @Entity
    @Table(name = "users")
    @Getter
    @Setter
    public class User {
        public User() {
            this.userRoles = new HashSet<>();
        }

        public User(int id, String username, String firstname, String lastname, String email, String password, long mobile, Set<User_role> userRoles, int age, String profile, boolean enable) {
            this.id = id;
            this.username = username;
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.password = password;
            this.mobile = mobile;
            this.userRoles = userRoles;
            this.age = age;
            this.profile = profile;
            this.enable = enable;
        }

        public void setId(int id) {
            this.id = id;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public void setFirstname(String firstname) {
            this.firstname = firstname;
        }

        public void setLastname(String lastname) {
            this.lastname = lastname;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public void setMobile(long mobile) {
            this.mobile = mobile;
        }

        public void setAge(int age) {
            this.age = age;
        }

        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)
        private int id;
        private String username;
        private String firstname;
        private String lastname;
        private String email;
        private String password;
        private long mobile;

        @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "user")
        @JsonIgnore
        private Set<User_role> userRoles =new HashSet<>();

        public void setProfile(String profile) {
            this.profile = profile;
        }

        public void setUserRoles(Set<User_role> userRoles) {
            this.userRoles = userRoles;
        }

        public Set<User_role> getUserRoles() {
            return userRoles;
        }

        private int age;

        public String getProfile() {
            return profile;
        }

        private String profile;

        public boolean isEnable() {
            return enable;
        }

        public void setEnable(boolean enable) {
            this.enable = enable;
        }

        private boolean enable=true;


        public int getId() {
            return id;
        }

        public String getUsername() {
            return username;
        }

        public String getFirstname() {
            return firstname;
        }

        public String getLastname() {
            return lastname;
        }

        public String getEmail() {
            return email;
        }

        public String getPassword() {
            return password;
        }

        public long getMobile() {
            return mobile;
        }

        public int getAge() {
            return age;
        }
    }
