import { useNavigate, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { getQuestions ,getToken} from "../../services/User_Service";
import { axiosService } from "../../services/Helper";
function Questions(){
    const navigate=useNavigate();
    const {qid}=useParams();
    let [questionData,setQuestionData]=useState([]);
    useEffect(()=>{
        fetchQuestions();
    },[])
    const fetchQuestions=async ()=>{
        try{
            const res=await getQuestions(qid);
            console.log(res.data);
            setQuestionData(res.data);
        }catch(err){
            console.log(err);
        }
    }
    const handleDelete=(e,queId)=>{
        e.preventDefault();
        alert("inside handle delete")
        axiosService.delete(`question/delQuestion/${queId}`,{
            headers: {
                'Authorization': `Bearer ${getToken().token}`
            }
        })
    }
    return(
        <>
            <Table striped style={{fontSize:'medium',width:'8000px',marginTop:'40px',marginRight:'180px'}}>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Option 1</th>
                        <th>Option 2</th>
                        <th>Option 3</th>
                        <th>Option 4</th>
                        <th>Answer</th>
                        <th colSpan={2} style={{textAlign:'center'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                {questionData.map((question) => (
                    <tr key={question.queId}>
                        <td>{question.content}</td>
                        <td>{question.option_1}</td>
                        <td>{question.option_2}</td>
                        <td>{question.option_3}</td>
                        <td>{question.option_4}</td>
                        <td>{question.answer}</td>
                        <td><Button variant="outline-secondary">Update</Button></td>
                        <td><Button variant="outline-danger" onClick={(e)=>handleDelete(e,question.queId)}>Delete</Button></td>
                    </tr>
                ))}
                </tbody>
            </Table>

        </>
    )
}

export default Questions;