package com.exam.examportal.cotroller;

import com.exam.examportal.models.QuizModel.Quiz;
import com.exam.examportal.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/exam/quiz")
@CrossOrigin("*")
public class QuizController {
    @Autowired
    private QuizService quizService;

    @GetMapping("/getQuizzes")
    public Set<Quiz> getQuizzes(){
        return quizService.getQuizzes();
    }
    @GetMapping("/getQuiz/{qid}")
    public Quiz getQuiz(@PathVariable Long qid){
        return quizService.getQuizById(qid);
    }
    @PostMapping("/addQuiz")
    public Quiz addQuiz(@RequestBody Quiz quiz){
        return quizService.addQuiz(quiz);
    }
    @PutMapping("/updateQuiz")
    public Quiz updateQuiz(@RequestBody Quiz quiz){
        return  quizService.updateQuiz(quiz);
    }
    @DeleteMapping("/delQuiz/{qid}")
    public void delQuiz(@PathVariable Long qid){
        quizService.deleteQuiz(qid);
    }
}
