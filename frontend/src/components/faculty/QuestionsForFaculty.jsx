import {NavLink, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { getQuestionsForFaculty} from "../../services/User_Service";
import { axiosFacultyService } from "../../services/Helper";
import { getFacultyToken } from "../../services/User_Service";
function QuestionsForFaculty(){
    const {qid}=useParams();
    let [questionData,setQuestionData]=useState([]);
    useEffect(()=>{
        fetchQuestions();
    },[])
    const fetchQuestions=async ()=>{
        try{
            const res=await getQuestionsForFaculty(qid);
            console.log(res.data);
            setQuestionData(res.data);
        }catch(err){
            console.log(err);
        }
    }
    const handleDelete=(e,queId)=>{
        e.preventDefault();
        axiosFacultyService.delete(`delQuestion/${queId}`,{
            headers: {
                'Authorization': `Bearer ${getFacultyToken().token}`
            }
        })
    }
    return(
        <>
            <Table striped style={{position:'absolute',fontSize:'medium',width:'1000px',marginTop:'40px',marginLeft:'160px'}}>
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
                        <td><NavLink to={`/faculty-dashboard/updateQuestion/${question.queId}`}><Button variant="outline-secondary">Update</Button></NavLink></td>
                        <td><Button variant="outline-danger"  onClick={(e)=>handleDelete(e,question.queId)} >Delete</Button></td>
                    </tr>
                ))}
                </tbody>
            </Table>

        </>
    )
}

export default QuestionsForFaculty;