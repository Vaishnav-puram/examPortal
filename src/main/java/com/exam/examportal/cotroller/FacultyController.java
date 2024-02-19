package com.exam.examportal.cotroller;

import com.exam.examportal.exceptions.FacultyAlreadyExists;
import com.exam.examportal.exceptions.FacultyNotFound;
import com.exam.examportal.models.Faculty;
import com.exam.examportal.models.MailBody;
import com.exam.examportal.models.QuizModel.Category;
import com.exam.examportal.models.QuizModel.Question;
import com.exam.examportal.models.QuizModel.Quiz;
import com.exam.examportal.service.*;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import static org.springframework.http.MediaType.*;

@RestController
@RequestMapping("/faculty")
@CrossOrigin(origins = {"http://127.0.0.1:5173/"})
public class FacultyController {
    @Autowired
    CategoryService categoryService;
    @Autowired
    QuizService quizService;
    @Autowired
    QuestionService questionService;
    @Autowired
    FacultyService facultyService;
    @Autowired
    EmailService emailService;
    @Autowired
    ImageHandlingService imageService;
    @PostMapping("/create")
    public Faculty createFaculty(@RequestBody Faculty faculty)throws FacultyAlreadyExists {
        return facultyService.createFaculty(faculty);
    }
    @GetMapping("/{email}")
    public Faculty getFaculty(@PathVariable String email)throws FacultyNotFound {
        return facultyService.getFaculty(email);
    }
    @GetMapping("/login/{email}")
    public Faculty getFacultyByEmail(@PathVariable String email,@RequestParam String password) throws FacultyNotFound {
        return facultyService.authenticateCredFaculty(email,password);
    }
    @GetMapping("/getCategory/{cid}")
    public Category getCategory(@PathVariable Long cid){
        return categoryService.getCategoryById(cid);
    }
    @PostMapping("/addCategory")
    public Category addCategory(@RequestBody Category category){
        return categoryService.addCategory(category);
    }
    @GetMapping("/getCategories")
    @CrossOrigin(origins = "*")
    public ResponseEntity<?> getCategories(){
        return ResponseEntity.ok(categoryService.getCategories());
    }
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
    @GetMapping("/getQuestion/{queId}")
    public Question getQuestion(@PathVariable Long queId){
        return questionService.getByQueId(queId);
    }
    @GetMapping("/getQuestionsByQuiz/{qid}")
    public List<Question> getQuestionsByQuiz(@PathVariable Long qid){
        Quiz quiz=quizService.getQuizById(qid);
        Set<Question> questionSet=quiz.getQuestionSet();
        List<Question> questionList=new ArrayList<>(questionSet);
        if(questionList.size()>quiz.getNoOfQuestions()){ //get only the specified no.of questions
            questionList=questionList.subList(0,quiz.getNoOfQuestions()+1);
        }
        Collections.shuffle(questionList);
        return questionList;
    }
    @PostMapping("/addQuestion")
    public Question addQuestion(@RequestBody Question question){
        return questionService.addQuestion(question);
    }

    @GetMapping("/getQuizBySubject/{subject}") //to include special characters and to consume url as plain text without URL decoding
    public ResponseEntity<Set<Quiz>> getQuizBySubject(@PathVariable String subject){
        System.out.println("inside getQuizBySubject"+subject);
        return ResponseEntity.ok(quizService.findQuizBySubject(subject));
    }
    @PostMapping("/sendMail")
    public String sendMail(@RequestBody List<MailBody> mailBody) throws MessagingException {
        mailBody.forEach((mail)-> {
            try {
                emailService.sendMail(mail.getTo(),mail.getBody());
            } catch (MessagingException e) {
                throw new RuntimeException(e);
            }
        });
        return "Mail sent successfully";
    }
    @PostMapping(value = "/images/{question}", consumes ={ MediaType.MULTIPART_FORM_DATA_VALUE,IMAGE_GIF_VALUE, IMAGE_JPEG_VALUE, IMAGE_PNG_VALUE})
    public ResponseEntity<?> uploadImage(@PathVariable String question, @RequestParam("image") MultipartFile image)
            throws IOException {
        System.out.println("in upload image " + question);
        System.out.println("image --> "+image);
        return ResponseEntity.status(HttpStatus.CREATED).body(imageService.uploadImageForQuestion(question, image));
    }
}
