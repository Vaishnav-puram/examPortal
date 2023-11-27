import Header from "./Header";
import { CardBody, Container, FormGroup } from "reactstrap";
import { Card, CardHeader } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "../index.css"
function SignIn(){
    return(
        <>
        <Header/>
        <Container style={{width:'550px',fontSize:'medium'}}>
            <Card>
                <CardHeader>
                    <h3>Student Login</h3>
                </CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control id="email" type="email" placeholder="Enter email" style={{fontSize:'small'}} />
                            <Form.Label>Password</Form.Label>
                            <Form.Control id="pass" type="password" placeholder="Enter password" style={{fontSize:'small'}} />
                        </FormGroup>
                        <Container className="text-center">
                        <Button  variant="dark" style={{fontSize:'medium'}}>Login</Button>
                        <a href="" className="ms-4">Forgot password ?</a>
                        </Container>
                    </Form>
                    <Container className="text-center">
                            Not a member ? <Link>Register</Link>
                    </Container>
                </CardBody>
               
            </Card>
            
        </Container>
    </>
    )
}
export default SignIn;