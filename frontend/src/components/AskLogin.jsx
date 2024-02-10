import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./askLogin.css"
import Header from './Header';
import adminLogo from '../images/admin.jpeg';
import studentLogo from '../images/student.jpg';
import facultyLogo from '../images/faculty.jpeg'
import { NavLink } from 'react-router-dom';
function AskLogin() {
    return (
        <>
            <Header />
            <div className="gC">
                <div className="i1">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={adminLogo} />
                        <Card.Body>
                            <Card.Title>ADMIN LOGIN</Card.Title>
                            <NavLink to={'/adminSignIn'}><Button variant="primary">Login</Button></NavLink>
                        </Card.Body>
                    </Card>
                </div>
                <div className="i2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={studentLogo} />
                        <Card.Body>
                            <Card.Title>STUDENT LOGIN</Card.Title>
                            <NavLink to={'/signin'}><Button variant="primary">Login</Button></NavLink>
                        </Card.Body>
                    </Card>
                </div>
                <div className="i3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={facultyLogo} />
                        <Card.Body>
                            <Card.Title>FACULTY LOGIN</Card.Title>
                            <NavLink to={'/facultySignIn'}><Button variant="primary">Login</Button></NavLink>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default AskLogin;