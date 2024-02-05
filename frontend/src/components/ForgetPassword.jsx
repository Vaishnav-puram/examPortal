import Header from "./Header";
import { CardBody, Container, FormGroup } from "reactstrap";
import { Card } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../index.css"
import { useState } from "react";
import { ForgetPass } from "../services/User_Service";
function ForgetPassword() {
    let [userData,setUserData]=useState({
        rollno:"",
        pass:""
    })
    function handleChange(event,property){
        setUserData({...userData,[property]:event.target.value});
    }
    function changePass(){
        console.log(userData);
        ForgetPass(userData);
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
                                <Form.Control id="email" type="text" placeholder="Enter Rollno" style={{ fontSize: 'small' }} name="rollno" value={userData.rollno} onChange={(e) => handleChange(e, 'rollno')} />
                                <Form.Label>New Password</Form.Label>
                                <Form.Control id="pass" type="text" placeholder="Enter password" style={{ fontSize: 'small' }} name="pass" value={userData.pass} onChange={(e) => handleChange(e, 'pass')} />
                            </FormGroup>

                            <Container className="text-center">
                                <Button type="button" variant="dark" style={{ fontSize: 'medium' }} onClick={changePass}>Change Password</Button>
                            </Container>
                        </Form>
                    </CardBody>

                </Card>

            </Container>
        </>
    )
}

export default ForgetPassword;