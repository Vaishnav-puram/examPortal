import { useEffect, useState } from "react";
import { axiosService } from "../../services/Helper";
import { getToken } from "../../services/User_Service";
import Table from 'react-bootstrap/Table';
function FacultyList(){
    let [facultyData,setFacultyData]=useState([]);
    useEffect(()=>{
        fetchFaculty();
    },[])
    const fetchFaculty=async ()=>{
        try{
            const res=await axiosService.get('getAllFaculty',{
                headers: {
               'Authorization': `Bearer ${getToken().token}`,
             }
           })
           console.log(res.data);
           setFacultyData(res.data);
        }catch(err){
            console.log(err);
        }
    }
    return(
        <>
            <Table striped style={{fontSize:'medium',width:'1000px',marginTop:'40px',marginRight:'180px'}}>
                <thead>
                    <tr>
                        <th>Faculty Name</th>
                        <th>Subject</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {facultyData.map((faculty) => (
                    <tr key={faculty.id}>
                        <td>{faculty.name}</td>
                        <td>{faculty.subject}</td>
                        <td>{faculty.email}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    )
}

export default FacultyList;