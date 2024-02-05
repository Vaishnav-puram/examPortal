import Header from "./Header";
import { CardBody, Container, FormGroup } from "reactstrap";
import { Card, CardHeader } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../index.css"
import { VerifyOTP} from "../services/User_Service";
import { toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
function SubmitOTP(){
    let [userOTP,setUserOTP]=useState({
        rollno:"",
        otp:""
    });
    function handleChange(event,property){
        setUserOTP({...userOTP,[property]:event.target.value});
    }
    function verifyOTP(){
        VerifyOTP(userOTP);
    }
    return(
        <>
        <Header />
        <Container style={{ width: '550px', fontSize: 'medium' }}>
            <Card>

                <CardBody>
                    <Form>
                        <FormGroup>
                            <Form.Label>Rollno</Form.Label>
                            <Form.Control id="email" type="text" placeholder="Enter Rollno" style={{ fontSize: 'small' }} name="rollno" value={userOTP.rollno} onChange={(e)=>handleChange(e,'rollno')} />
                            <Form.Label>OTP</Form.Label>
                            <Form.Control id="otp" type="text" placeholder="Enter otp" style={{ fontSize: 'small' }} name="otp" value={userOTP.otp} onChange={(e)=>handleChange(e,'otp')}/>
                        </FormGroup>

                        <Container className="text-center">
                            <Button type="button" variant="dark" style={{ fontSize: 'medium' }} onClick={verifyOTP}>Send OTP</Button>
                        </Container>
                    </Form>
                </CardBody>

            </Card>

        </Container>
    </>
    )
}

export default SubmitOTP;