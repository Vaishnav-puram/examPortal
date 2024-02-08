package com.exam.examportal.models.QuizModel;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cid;
    @Column(length = 5000)
    private String title;
    @Column(length = 5000)
    private String description;

    @OneToMany(mappedBy = "category",fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Quiz> quizSet=new LinkedHashSet<>();

    public Category() {
    }

    public Category(Long cid, String title, String description) {
        this.cid = cid;
        this.title = title;
        this.description = description;
    }

    public Long getCid() {
        return cid;
    }

    public void setCid(Long cid) {
        this.cid = cid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Quiz> getQuizSet() {
        return quizSet;
    }

    public void setQuizSet(Set<Quiz> quizSet) {
        this.quizSet = quizSet;
    }
}
