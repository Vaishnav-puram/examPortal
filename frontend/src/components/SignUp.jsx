import Header from "./Header";
import { CardBody, Container, FormGroup } from "reactstrap";
import { Card, CardHeader } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { signUp } from "../services/User_Service";
import { toast } from 'react-toastify';
import "../index.css"
function SignUp() {
    //initializng userData obj
    let [userData, setUserData] = useState({
        rollno: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        mobile: "",
        age: "",
        profile: ""
    })
    let [err, setErr] = useState({
        errPass: "",
        errEmail: "",
        errUname: "",
        errFname: "",
        errLname: "",
        errMobile: "",
    })
    //calls whenever the userData obj gets changed
    useEffect(() => {
        console.log(userData);
    }, [userData])
    useEffect(() => {
        console.log(err);
    }, [err]);
    //one function to update all properties of userData object
    const handleChange = (event, property) => {
        setUserData({ ...userData, [property]: event.target.value });
    }

    //submit form action
    const submit_Form = (event) => {
        //preventing the default behavior of submit action 
        event.preventDefault();
        console.log(userData);
        //validate the data (properties of userData)
        validateMobile(userData.mobile);
        validatePassword(userData.password);

        //call server api-request of create-user
        signUp(userData).then((data)=>{
            console.log(data);
            console.log("logged in successfully!");
            toast.success("user logged in successfully");
        }).catch((err)=>{
            console.log(err);
            toast.error("login failed")
        });
        setUserData({
        rollno: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        mobile: "",
        age: "",
        profile: ""
        }
        )
    }
    //reset the form fields and also resetting the error messages
    const reset = () => {
        setUserData({
            rollno: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            mobile: "",
            age: "",
            profile: ""
        })
        setErr({ ...err, errPass: "" });
    }
    function validateMobile(mob) {
        console.log("mobile entered", mob);
        console.log(mob.length);

        setErr((err) => {
            if (mob.lenngth < 10 || mob.length > 10) {
                return {...err, errMobile: "Mobile no. should be 10 digits !"};
            } else {
                return { ...err, errMobile: "" };
            }
        });
    }
    function validatePassword(pass) {
        if (pass.length < 6) {
            setErr({ ...err, errPass: "Password should'nt be less than 6!" });
        } else {
            setErr({ ...err, errPass: "" });
        }

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
    console.log(userData.rollno);
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
                                <Form.Label>rollno</Form.Label>
                                <Form.Control id="uForm" type="text" placeholder="Enter rollno" name="uname" value={userData.rollno} onChange={(e) => handleChange(e, 'rollno')} />
                                <span style={{ color: 'red', fontSize: 'small' }}>{err.errPass}</span><br />
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control id="fForm" type="text" placeholder="Enter firstname" name="fname" value={userData.firstname} onChange={(e) => handleChange(e, 'firstname')} />
                                <span style={{ color: 'red', fontSize: 'small' }}>{err.errPass}</span><br />
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control id="lForm" type="text" placeholder="Enter lastname" name="lname" value={userData.lastname} onChange={(e) => handleChange(e, 'lastname')} />
                                <span style={{ color: 'red', fontSize: 'small' }}>{err.errPass}</span><br />
                                <Form.Label>Email address</Form.Label>
                                <Form.Control id="eForm" type="email" placeholder="Enter email" name="email" value={userData.email} onChange={(e) => handleChange(e, 'email')} />
                                <span style={{ color: 'red', fontSize: 'small' }}>{err.errPass}</span><br />
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="pForm" type="password" placeholder="Enter password" name="password" value={userData.password} onChange={(e) => handleChange(e, 'password')} />
                                <span style={{ color: 'red', fontSize: 'small' }}>{err.errPass}</span><br />
                                <Form.Label>Age</Form.Label>
                                <Form.Control id="aForm" type="number" placeholder="Enter age" name="age" value={userData.age} onChange={(e) => handleChange(e, 'age')} />
                                <br />
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control id="mForm" type="text" placeholder="Enter phno." name="mobile" value={userData.mobile} onChange={(e) => handleChange(e, 'mobile')} />
                                <span style={{ color: 'red', fontSize: 'small' }}>{err.errMobile}</span><br />

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