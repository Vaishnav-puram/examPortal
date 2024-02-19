package com.exam.examportal.dto;

public class ResultMaxDTO {
    private String quiz;
    private int result;
    private int maxResult;

    public ResultMaxDTO() {
    }
    public String getQuiz() {
        return quiz;
    }

    public void setQuiz(String quiz) {
        this.quiz = quiz;
    }

    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }

    public int getMaxResult() {
        return maxResult;
    }

    public void setMaxResult(int maxResult) {
        this.maxResult = maxResult;
    }
}
