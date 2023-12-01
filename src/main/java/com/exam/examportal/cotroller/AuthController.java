package com.exam.examportal.cotroller;


import com.exam.examportal.exceptions.UserNotFound;
import com.exam.examportal.models.JWTRequest;
import com.exam.examportal.models.JWTResponse;
import com.exam.examportal.security.JWTHelper;
import com.exam.examportal.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.parameters.P;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @Autowired
    JWTHelper jwtHelper;

    @PostMapping("/exam/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JWTRequest jwtRequest) throws UserNotFound {
        try{
            authenticate(jwtRequest.getRollno(),jwtRequest.getPassword());
        }catch (UserNotFound e){
            throw new UserNotFound("User Not Found"+e.getMessage());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        UserDetails userDetails = userDetailsService.loadUserByUsername(jwtRequest.getRollno());
        String token=this.jwtHelper.generateToken(userDetails);
        return ResponseEntity.ok(new JWTResponse(token));
    }
    private void authenticate(String rollno,String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(rollno,password));
        }catch (DisabledException e){
            throw new Exception("User disabled"+e.getMessage());
        }catch (BadCredentialsException e){
            throw new Exception("Invalid credentials"+e.getMessage());
        }
    }
}