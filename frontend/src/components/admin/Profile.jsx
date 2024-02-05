import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../index.css"
function Profile() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>{localStorage.getItem('name')}</Card.Title>
                    <Card.Text>
                        {localStorage.getItem('role')}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>User ID : <b>{JSON.parse(localStorage.getItem('user')).rollno}</b></ListGroup.Item>
                    <ListGroup.Item>First Name : <b>{JSON.parse(localStorage.getItem('currUser')).firstname}</b></ListGroup.Item>
                    <ListGroup.Item>Last Name : <b>{JSON.parse(localStorage.getItem('currUser')).lastname}</b></ListGroup.Item>
                    <ListGroup.Item>Email : <b>{JSON.parse(localStorage.getItem('currUser')).email}</b></ListGroup.Item>
                    <ListGroup.Item>Age : <b>{JSON.parse(localStorage.getItem('currUser')).age}</b></ListGroup.Item>
                    <ListGroup.Item>Mobile : <b>{JSON.parse(localStorage.getItem('currUser')).mobile}</b></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Edit</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Profile;