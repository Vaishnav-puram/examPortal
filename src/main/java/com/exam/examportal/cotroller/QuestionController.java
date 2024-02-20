package com.exam.examportal.cotroller;

import com.exam.examportal.dto.QuestionDTO;
import com.exam.examportal.models.QuizModel.Question;
import com.exam.examportal.models.QuizModel.Quiz;
import com.exam.examportal.repo.QuizRepo;
import com.exam.examportal.service.QuestionService;
import com.exam.examportal.service.QuizService;
import org.hibernate.sql.ast.tree.expression.Collation;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/exam/question")
@CrossOrigin("*")
public class QuestionController {
    @Autowired
    private QuestionService questionService;
    @Autowired
    private  QuizService quizService;
    @Autowired
    private ModelMapper modelMapper;
    @GetMapping("/getQuestionForAdmin/{queId}")
    public Question getQuestion(@PathVariable Long queId){
        return questionService.getByQueId(queId);
    }
    @GetMapping("/getQuestion/{question}")
    public Question getQuestionByName(@PathVariable String question){
        return questionService.getByQueName(question);
    }
    @GetMapping("/getQuestionsByQuiz/{qid}")
    public List<QuestionDTO> getQuestionsByQuiz(@PathVariable Long qid){
        Quiz quiz=quizService.getQuizById(qid);
        Set<Question> questionSet=quiz.getQuestionSet();
        List<Question> questionList=new ArrayList<>(questionSet);
        if(questionList.size()>quiz.getNoOfQuestions()){ //get only the specified no.of questions
            questionList=questionList.subList(0,quiz.getNoOfQuestions()+1);
        }
        Collections.shuffle(questionList);
        return questionList.stream().map(question ->modelMapper.map(question,QuestionDTO.class)).collect(Collectors.toList());
    }
    @PostMapping("/addQuestion")
    public Question addQuestion(@RequestBody Question question){
        return questionService.addQuestion(question);
    }
    @PutMapping("/updateQuestion")
    public Question updateQuestion(@RequestBody Question question){
        return questionService.updateQuestion(question);
    }
    @DeleteMapping("/delQuestion/{queId}")
    public void deleteQuestion(@PathVariable Long queId){
        questionService.deleteQuestion(queId);
    }
}
