import { useEffect, useState } from "react";
import { getImageFromRollno } from "../../services/User_Service";
import "./adminProfile.css"
function Profile() {
    let [imageData, setImageData] = useState(null);

    let id = JSON.parse(localStorage.getItem('user')).rollno;
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const res = await getImageFromRollno(id);
                console.log("response -->", res.data);
                setImageData(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        if (id) {
            fetchImage();
        }
    }, [id])
    console.log("url -->",`data:image/jpeg;base64,${imageData}`);
    return (
        <>
            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card1">
                    <div className="image d-flex flex-column justify-content-center align-items-center">
                        <img src={`data:image/jpeg;base64,${imageData}`} height={'200px'} /><span className="name mt-3">{JSON.parse(localStorage.getItem('currUser')).firstname}</span> <span className="idd">{JSON.parse(localStorage.getItem('currUser')).lastname}</span>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                            <span className="idd1"><b>{localStorage.getItem('role')} </b></span>
                        </div>
                        <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                            <span className="number">{JSON.parse(localStorage.getItem('user')).rollno}</span>
                        </div>
                        <div style={{ fontSize: 'medium' }}>
                            <table>
                                <tr>
                                    <td>Mail : <b>{JSON.parse(localStorage.getItem('currUser')).email}</b></td>

                                </tr>
                                <tr>
                                    <td>Age : <b>{JSON.parse(localStorage.getItem('currUser')).age}</b></td>

                                </tr>
                                <tr>
                                    <td>Mobile : <b>{JSON.parse(localStorage.getItem('currUser')).mobile}</b></td>

                                </tr>

                            </table>
                        </div>
                        <div className="d-flex mt-2"><button className="btn1 btn-dark">Edit Profile</button></div>
                        <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                            <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;