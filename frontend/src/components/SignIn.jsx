import Header from "./Header";
import { CardBody, Container, FormGroup } from "reactstrap";
import { Card, CardHeader } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </FormGroup>
                        <Container className="text-center">
                        <Button  variant="dark" style={{fontSize:'medium'}}>Login</Button>
                        <a href="" className="ms-4">Forgot password ?</a>
                        </Container>
                    </Form>
                </CardBody>
               
            </Card>
            
        </Container>
    </>
    )
}
export default SignIn;