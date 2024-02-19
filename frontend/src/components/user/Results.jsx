import { useEffect, useState } from "react";
import { getResultSet } from "../../services/User_Service";
import Table from 'react-bootstrap/Table';
function Results(){
    let [resultData,setResultData]=useState([]);
    let id = JSON.parse(localStorage.getItem('user')).rollno;
    useEffect(()=>{
        fetchResults();
    },[])
    const fetchResults=async()=>{
        try{
            const res=await getResultSet(id);
            console.log(res.data);
            setResultData(res.data);
        }catch(err){
            console.log(err);
        }
    }
    return(
        <>
            <Table striped style={{color:'white',fontSize:'medium',width:'8000px',marginTop:'40px',marginRight:'180px'}}>
                <thead>
                    <tr>
                        <th>Quiz Title</th>
                        <th>Score</th>
                        <th>Max Score</th>
                    </tr>
                </thead>
                <tbody>
                {resultData.map((res) => (
                    <tr key={res.quiz}>
                        <td>{res.quiz}</td>
                        <td>{res.result}</td>
                        <td>{res.maxResult}</td>
                    </tr>
                ))}
                </tbody>
            </Table>

        </>
    )
}
export default Results;