import Header from "./Header";
import { CardBody, Container, FormGroup } from "reactstrap";
import { Card, CardHeader } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from "react";
function SignUp() {
    //initializng userData obj
    let [userData, setUserData] = useState({
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        mobile: "",
        age: "",
        profile: ""
    })
    //calls whenever the userData obj gets changed
    useEffect(()=>{
        console.log(userData);
    },[userData])
    //one function to update all properties of userData object
    const handleChange = (event,property) => {
        setUserData({...userData,[property]:event.target.value});
    }

    //submit form action
    const submit_Form=(event)=>{
        //preventing the default behavior of submit action 
        event.preventDefault();
        //validate the data (properties of userData)

        //call server api-request of create-user
    }
    //reset the form fields
    const reset=()=>{
        setUserData({
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            mobile: "",
            age: "",
            profile: ""
        })
    }
    // const handleFname = (event) => {
    //     setUserData({...userData,firstname: event.target.value});
    // }
    // const handleLname = (event) => {
    //     setUserData({...userData,lastname: event.target.value});
    // }
    // const handleEmail = (event) => {
    //     setUserData({...userData,email: event.target.value});
    // }
    // const handlePassword = (event) => {
    //     setUserData({...userData,password:event.target.value});
    // }
    // const handleAge = (event) => {
    //     setUserData({...userData,age :event.target.value});
    // }
    // const handleMobile = (event) => {
    //     setUserData({...userData,mobile :event.target.value});
    // }

    console.log(userData.username);
    return (
        <>
            <Header />
            <Container style={{ width: '550px', fontSize: 'medium', border: '20%' }}>
                <Card border="primary">
                    <CardHeader style={{ backgroundColor: '#CCD0D5' }}>
                        <h3>Register Student Details</h3>
                    </CardHeader>
                    <CardBody style={{ color: 'black' }}>
                        <Form >
                            <FormGroup>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" name="uname" value={userData.username} onChange={(e)=>handleChange(e,'username')} />
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control type="text" placeholder="Enter firstname" name="fname" value={userData.firstname} onChange={(e)=>handleChange(e,'firstname')} />
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control type="text" placeholder="Enter lastname" name="lname" value={userData.lastname} onChange={(e)=>handleChange(e,'lastname')} />
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={userData.email} onChange={(e)=>handleChange(e,'email')} />
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" name="password" value={userData.password} onChange={(e)=>handleChange(e,'password')} />
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Enter age" name="age" value={userData.age} onChange={(e)=>handleChange(e,'age')} />
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control type="text" placeholder="Enter phno." name="mobile" value={userData.mobile} onChange={(e)=>handleChange(e,'mobile')} />

                            </FormGroup>
                            <Container className="text-center">
                                <Button type="submit" variant="dark" style={{ fontSize: 'medium' }} onClick={submit_Form}>Register</Button>
                                <Button variant="secondary" style={{ fontSize: 'medium' }} className="ms-2" onClick={reset}>Reset</Button>

                            </Container>
                        </Form>
                    </CardBody>

                </Card>

            </Container>
        </>
    )
}
export default SignUp;