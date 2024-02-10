package com.exam.examportal.dto;

import jakarta.persistence.Column;

public class QuestionResponseDTO {
    private Long queId;

    @Column(length = 5000)
    private String content;
    private String image;
    private String option_1;
    private String option_2;
    private String option_3;
    private String option_4;
    private String givenAnswer;

    public QuestionResponseDTO() {
    }

    public QuestionResponseDTO(Long queId, String content, String image, String option_1, String option_2, String option_3, String option_4, String givenAnswer) {
        this.queId = queId;
        this.content = content;
        this.image = image;
        this.option_1 = option_1;
        this.option_2 = option_2;
        this.option_3 = option_3;
        this.option_4 = option_4;
        this.givenAnswer = givenAnswer;
    }

    public Long getQueId() {
        return queId;
    }

    public void setQueId(Long queId) {
        this.queId = queId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getOption_1() {
        return option_1;
    }

    public void setOption_1(String option_1) {
        this.option_1 = option_1;
    }

    public String getOption_2() {
        return option_2;
    }

    public void setOption_2(String option_2) {
        this.option_2 = option_2;
    }

    public String getOption_3() {
        return option_3;
    }

    public void setOption_3(String option_3) {
        this.option_3 = option_3;
    }

    public String getOption_4() {
        return option_4;
    }

    public void setOption_4(String option_4) {
        this.option_4 = option_4;
    }

    public String getGivenAnswer() {
        return givenAnswer;
    }

    public void setGivenAnswer(String givenAnswer) {
        this.givenAnswer = givenAnswer;
    }
}
