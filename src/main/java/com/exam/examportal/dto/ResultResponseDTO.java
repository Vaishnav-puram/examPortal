package com.exam.examportal.dto;

import jakarta.persistence.*;

@Entity
@Table(name = "results")
public class ResultResponseDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String rollno;
    private Long queId;

    @Column(length = 5000)
    private String content;
    private String image;
    private String option_1;
    private String option_2;
    private String option_3;
    private String option_4;
    private String givenAnswer;
    private String actualAnswer;
    private int result;
    public ResultResponseDTO() {
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

    public String getActualAnswer() {
        return actualAnswer;
    }

    public void setActualAnswer(String actualAnswer) {
        this.actualAnswer = actualAnswer;
    }

    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }

    public String getRollno() {
        return rollno;
    }

    public void setRollno(String rollno) {
        this.rollno = rollno;
    }

    @Override
    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();

        stringBuilder.append("<table border=\"1\">");
        stringBuilder.append("<tr><th>Field</th><th>Value</th></tr>");
        appendRow(stringBuilder, "Question", content);
        appendRow(stringBuilder, "Image", image);
        appendRow(stringBuilder, "Option 1", option_1);
        appendRow(stringBuilder, "Option 2", option_2);
        appendRow(stringBuilder, "Option 3", option_3);
        appendRow(stringBuilder, "Option 4", option_4);
        appendRow(stringBuilder, "Given Answer", givenAnswer);
        appendRow(stringBuilder, "Actual Answer", actualAnswer);
        stringBuilder.append("</table>");
        stringBuilder.append("\n");
        return stringBuilder.toString();
    }

    private void appendRow(StringBuilder stringBuilder, String field, String value) {
        stringBuilder.append("<tr><td>").append(field).append("</td><td>").append(value).append("</td></tr>");
    }


}
