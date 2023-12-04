import Header from "./Header";
import { CardBody, Container, FormGroup } from "reactstrap";
import { Card, CardHeader } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../index.css"
import { tokenGetter } from "../services/User_Service";
import { toast } from 'react-toastify';

function SignIn() {
    let [userData, setUserData] = useState({
        rollno: "",
        password: ""
    });
    const handleChange = (event, property) => {
        setUserData({ ...userData, [property]: event.target.value });
    }
    useEffect(() => {
        console.log(userData);
    }, [userData])
    const login = (event) => {
        event.preventDefault();
        tokenGetter(userData).then((data) => {
            console.log(data);
            console.log("logged in successfully!");
            toast.success("user logged in successfully");
        }).catch((err) => {
            console.log(err);
            toast.error("login failed")
        });
        setUserData({
            rollno: "",
            password: ""
        })
    }
    return (
        <>
            <Header />
            <Container style={{ width: '550px', fontSize: 'medium' }}>
                <Card>
                    <CardHeader>
                        <h3>Student Login</h3>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Form.Label>Rollno</Form.Label>
                                <Form.Control id="rollno" type="text" placeholder="Enter rollno" style={{ fontSize: 'small' }} value={userData.rollno} onChange={(e) => handleChange(e, 'rollno')} />
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="pass" type="password" placeholder="Enter password" style={{ fontSize: 'small' }} value={userData.password} onChange={(e) => handleChange(e, 'password')} />
                            </FormGroup>
                        
                            <Container className="text-center">
                                <Button type="submit" variant="dark" style={{ fontSize: 'medium' }} onClick={login}>Login</Button>
                                <a href="" className="ms-4">Forgot password ?</a>
                            </Container>
                        </Form>
                        <Container className="text-center">
                            <div> Not a member ? <Link>Register</Link> </div>
                        </Container>
                    </CardBody>

                </Card>

            </Container>
        </>
    )
}
export default SignIn;