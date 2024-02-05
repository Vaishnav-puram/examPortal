import Header from "./Header";
import { CardBody, Container, FormGroup } from "reactstrap";
import { Card, CardHeader } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../index.css"
import { SENDOTP, tokenGetter } from "../services/User_Service";
import { toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import { useState } from "react";
function OtpSend(){
    let [rollno,setRollno]=useState("");
    function handleRoll(event){
        setRollno(event.target.value);
    }
    function sendOTP(){
        console.log(rollno);
        SENDOTP(rollno);
        const msg=document.getElementById("msg");
        if(msg){
            msg.style.display="block";
        }
        
    }

    return (
        <>
            <Header />
            <Container style={{ width: '550px', fontSize: 'medium' }}>
                <Card>
    
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Form.Label>Rollno</Form.Label>
                                <Form.Control id="email" type="text" placeholder="Enter Rollno" style={{ fontSize: 'small' }} onChange={handleRoll} />
                                <span id="msg" style={{display:"none",color:"green"}}>OTP Sent to the registered mail , will be redirecting... </span>
                            </FormGroup>

                            <Container className="text-center">
                                <Button type="button" variant="dark" style={{ fontSize: 'medium' }} onClick={sendOTP}>Send OTP</Button>
                            </Container>
                        </Form>
                    </CardBody>

                </Card>

            </Container>
        </>
    )
}
export default OtpSend;