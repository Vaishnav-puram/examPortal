package com.exam.examportal.cotroller;

import com.exam.examportal.dto.QuestionResponseDTO;
import com.exam.examportal.dto.ResultMaxDTO;
import com.exam.examportal.dto.ResultResponseDTO;
import com.exam.examportal.exceptions.FacultyAlreadyExists;
import com.exam.examportal.exceptions.FacultyNotFound;
import com.exam.examportal.exceptions.UserAlreadyExists;
import com.exam.examportal.exceptions.UserNotFound;
import com.exam.examportal.models.*;
import com.exam.examportal.models.QuizModel.Quiz;
import com.exam.examportal.repo.ResultRepo;
import com.exam.examportal.service.*;
import jakarta.mail.MessagingException;
import jakarta.persistence.Tuple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

import static org.springframework.http.MediaType.IMAGE_GIF_VALUE;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

@RestController
@RequestMapping("/exam")
@CrossOrigin(origins = {"http://localhost:5173/"})
public class EntryController {
    @Autowired
    UserService userService;
    @Autowired
    FacultyService facultyService;
    @Autowired
    EmailService emailService;
    @Autowired
    UserOTPService userOTPService;
    @Autowired
    QuizService quizService;

    @Autowired
    private ImageHandlingService imageService;
    @Autowired
    private CalculateResultService calculateResultService;

    @Autowired
    ResultService resultService;
    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @GetMapping("/user/{rollno}")
    public User getUser(@PathVariable String rollno)throws UserNotFound{
        return userService.getUser(rollno);
    }

    @GetMapping("/login/{rollno}")
    public String getUserById(@PathVariable String rollno, @RequestParam String password) {
        return userService.authenticateCred(rollno,password);
    }

    @GetMapping("/userRole/{rid}")
    public Role getRole(@PathVariable int rid)throws UserNotFound{
        return userService.getRole(rid);
    }

    @PostMapping("/create")
    public User createUser(@RequestBody User user) throws UserAlreadyExists {

        user.setPassword(this.passwordEncoder.encode(user.getPassword()));
        Role role=new Role();
        role.setRid(124);
        role.setRole("NORMAL");
        User_role userRole=new User_role();
        userRole.setUser(user);
        userRole.setRole(role);
        Set<User_role> user_roles=new HashSet<>();
        user_roles.add(userRole);
        return userService.createUser(user,user_roles);
    }
    @PostMapping("/createFaculty")
    public ResponseEntity<Faculty> createFaculty(@RequestBody Faculty faculty)throws FacultyAlreadyExists {
        return ResponseEntity.ok(facultyService.createFaculty(faculty));
    }
    @GetMapping("/getAllFaculty")
    public ResponseEntity<List<Faculty>> getAllFaculty(){
        return ResponseEntity.ok(facultyService.getAllFaculty());
    }
    @GetMapping
    @PostMapping("/sendMail")
    public String sendMail(@RequestParam String TO,@RequestParam String msg) throws MessagingException {
            emailService.sendMail(TO,msg);

        return "Mail sent successfully";
    }
    @GetMapping("/sendOTP/{rollno}")
    public String sendOTP(@PathVariable String rollno)throws MessagingException{
        emailService.sendOTP(rollno);
        return "OTP sent successfully";
    }
    @PostMapping("/verifyOtp")
    public String verifyOTP(@RequestBody UserOTP userOTP){
        return userOTPService.verifyOTP(userOTP);
    }
    @PostMapping("/forgetPassword")
    public String forgetPassword(@RequestBody UserRollPass userRollPass) throws UserNotFound {
        return userService.updatePassword(userRollPass.getRollno(),userRollPass.getNewPass());
    }

    @PostMapping(value = "/createUserAndImage", consumes ={ MediaType.MULTIPART_FORM_DATA_VALUE,IMAGE_GIF_VALUE, IMAGE_JPEG_VALUE, IMAGE_PNG_VALUE,MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> createUserAndImage(@RequestPart MultipartFile image, @RequestPart User user)
            throws IOException, UserAlreadyExists {
        System.out.println("in upload user details n image " + user + " " + image);
        createUser(user);
        uploadImage(user.getRollno(),image);
        return ResponseEntity.ok("Created successfully");
    }
    @PostMapping(value = "/images/{rollno}", consumes ={ MediaType.MULTIPART_FORM_DATA_VALUE,IMAGE_GIF_VALUE, IMAGE_JPEG_VALUE, IMAGE_PNG_VALUE})
    public ResponseEntity<?> uploadImage(@PathVariable String rollno, @RequestParam("image") MultipartFile image)
            throws IOException {
        System.out.println("in upload image " + rollno);
        System.out.println("image --> "+image);
        return ResponseEntity.status(HttpStatus.CREATED).body(imageService.uploadImage(rollno, image));
    }
    @GetMapping("/getImage/{rollno}")
    public ResponseEntity<String> getImageForUser(@PathVariable String rollno) throws IOException {
        byte[] imageData = imageService.serveImage(rollno);
        String base64Image = Base64.getEncoder().encodeToString(imageData);
        return ResponseEntity.ok(base64Image);
    }
    @GetMapping("/getImageForQuestion/{question}")
    public ResponseEntity<String> getImageForQuestion(@PathVariable String question) throws IOException {
        byte[] imageData = imageService.serveImageForQuestion(question);
        String base64Image = Base64.getEncoder().encodeToString(imageData);
        return ResponseEntity.ok(base64Image);
    }
    @GetMapping("/getQuizBySubject/{subject}") //to include special characters and to consume url as plain text without URL decoding
    public ResponseEntity<Set<Quiz>> getQuizBySubject(@PathVariable String subject){
        System.out.println("inside getQuizBySubject"+subject);
        return ResponseEntity.ok(quizService.findQuizBySubject(subject));
    }
    @PostMapping("/getResults/{rollno}")
    public ResponseEntity<List<ResultResponseDTO>> calcResults(@RequestBody List<QuestionResponseDTO> questionResponseDTO, @PathVariable String rollno) throws MessagingException {
        return ResponseEntity.ok(calculateResultService.calcResult(questionResponseDTO,rollno));
    }
    @GetMapping("/getResultSet/{rollno}")
    public ResponseEntity<List<ResultMaxDTO>> getResultSet(@PathVariable String rollno){

        return ResponseEntity.ok(resultService.getData(rollno));
    }
}
