    package com.exam.examportal.models;

    import com.fasterxml.jackson.annotation.JsonIgnore;
    import jakarta.persistence.*;
    import lombok.Getter;
    import lombok.Setter;
    import org.springframework.security.core.GrantedAuthority;
    import org.springframework.security.core.userdetails.UserDetails;
//    import org.hibernate.Hibernate;
//    import org.springframework.security.core.GrantedAuthority;
//    import org.springframework.security.core.userdetails.UserDetails;

    import java.util.Collection;
    import java.util.HashSet;
    import java.util.Set;

    @Entity
    @Table(name = "users")
    @Getter
    @Setter
    public class User implements UserDetails {
        public User() {
            this.userRoles = new HashSet<>();
        }

        public User(int id, String rollno, String firstname, String lastname, String email, String password, long mobile, Set<User_role> userRoles, int age, String profile, boolean enable) {
            this.id = id;
            this.rollno = rollno;
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

        public void setRollno(String rollno) {
            this.rollno = rollno;
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
        private String rollno;
        private String firstname;
        private String lastname;
        private String email;
        private String password;
        private long mobile;

        @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "user")
        @JsonIgnore
        private Set<User_role> userRoles;

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

        private String role;
        public int getId() {
            return id;
        }

        public String getRollno() {
            return rollno;
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

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            Set<Authority> set=new HashSet<>();
            this.userRoles.forEach(userRole -> set.add(new Authority(userRole.getRole().getRole())));
            return set;
        }

        public String getPassword() {
            return password;
        }

        @Override
        public String getUsername() {
            return rollno;
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }

        public long getMobile() {
            return mobile;
        }

        public int getAge() {
            return age;
        }

//        public String getRole() {
//            if (userRoles != null && !userRoles.isEmpty()) {
//                // Assuming each User_role entity has a field named 'role'
//                return userRoles.iterator().next().getRole().toString();
//            }
//            return null; // or return a default role if userRoles is empty
//        }
    }
