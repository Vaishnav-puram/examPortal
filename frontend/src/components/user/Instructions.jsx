/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
function Instructions({quiz}) {
    console.log(" in canvas-->",{quiz})
    const navigate=useNavigate();
    const goToQuestions=(e,qid)=>{
        e.preventDefault();
        navigate(`/user-dashboard/questionPaper/${qid}`)
    }
    return (
        <>
            <div className="modal show" style={{ display: 'block', position: 'initial',fontSize:'large' }}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Instructions</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{quiz.description}</p>
                        <p>Maximum marks : {quiz.maxMarks}</p>
                        <p>No.of Questions : {quiz.noOfQuestions}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={e=>goToQuestions(e,quiz.qid)}>Start</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </>
    )
}

export default Instructions;