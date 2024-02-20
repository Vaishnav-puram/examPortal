import { axiosFacultyService, axiosService } from "./Helper";

export const signUp=(user)=>{
    return axiosService.post('/create',user)
            .then((response)=>{response.data})
}

export const uploadImageForUserId=(image,rollno)=>{
    let formData=new FormData();
    formData.append("image",image);
    return axiosService.post(`/images/${rollno}`,formData).then((res)=>res.data);

}

export const getImageFromRollno=(rollno)=>{
    return axiosService.get(`/getImage/${rollno}`,{
        headers: {
          'Authorization': `Bearer ${getToken().token}`
    }});
}
export const  tokenGetter=(user)=>{
    return axiosService.post('generate-token',user) //generate token before logging in
            .then((response)=>{
                console.log("<--->",response.data)  
                saveToken(response.data); // saves the token in local storage
                let role;
                getCurrentUser().then((data)=>{
                    console.log('inside token getter',data)
                    role=data;
                    switchPage(role);
                })
                console.log('Role in tokenGetter2 -->',role)
                setUser(user) // saves the logged in user in local storage  
                return response.data
            })
}
export const SENDOTP=(rollno)=>{
    return axiosService.get(`/sendOTP/${rollno}`)
            .then((response)=>{
                console.log("-->",response.data)
                let msg=response.data;
                    switchToSubmitOTP(msg)
            }).catch((err)=>{
                console.log(err);
            })
}
function switchToSubmitOTP(msg){
    if(msg==="OTP sent successfully"){
        window.location.href='/submitOTP';
    }
}
export const VerifyOTP=(userOTP)=>{
    return axiosService.post('/verifyOtp',userOTP)
        .then((response)=>{
            console.log(" verify otp-->",response.data)
        }).catch((err)=>console.log(err));
}
export const ForgetPass=(user)=>{
    return axiosService.post('/forgetPassword',user)
        .then((response)=>{
            console.log(response.data)
            return response.data
        })

}
function switchPage(role){
    if(role=='ADMIN'){
            window.location.href='/admin-dashboard';
        }else{
            window.location.href='/user-dashboard';
        }
}

function getCurrentUser(){
    const tokenObj = getToken();
    console.log("--> in current user",tokenObj.token);
    return axiosService.get('/currentUser',{
        headers: {
          'Authorization': `Bearer ${tokenObj.token}`
        }
      })
    .then(response => {
      console.log(response.data);
      saveCurrentUser(response.data);
      var role=response.data.authorities[0].authority;
      setRole(role);
      saveUserName(response.data.firstname);
      console.log("Role ---> ",role)
      return role;
    })
    .catch(error => {
      // Handle the error
      console.log("error",error);
    });
    }


function saveUserName(name){
    localStorage.setItem('name',name);
}
function saveCurrentUser(user){
    localStorage.setItem('currUser',JSON.stringify(user));
}
export const getUserName=()=>{
    return localStorage.getItem('name');
} 
export const getRollno=()=>{
    const id=localStorage.getItem('user');
    return JSON.parse(id).rollno; 
}
function saveToken(token){
    localStorage.setItem('token',JSON.stringify(token))
}

function saveFacultyToken(token){
    localStorage.setItem('facultyToken',JSON.stringify(token))
}


export const getToken=()=>{
    // return localStorage.getItem('token')
    const tokenString = localStorage.getItem('token');
    return JSON.parse(tokenString);
}
export const getFacultyToken=()=>{
    // return localStorage.getItem('token')
    const tokenString = localStorage.getItem('facultyToken');
    return JSON.parse(tokenString);
}


function isLoggedIn(){
    let user_token=localStorage.getItem('token')
    if(user_token==""||user_token==undefined||user_token==null){
        return false;
    }
    return true;
}

export const logoff=()=>{
     localStorage.removeItem('user');
     localStorage.removeItem('token');
     localStorage.removeItem('role');
     localStorage.removeItem('name');
     localStorage.removeItem('current_faculty');
     localStorage.removeItem('currUser');
     localStorage.removeItem('facultyToken');
}

function setUser(user){
    localStorage.setItem('user',JSON.stringify(user))
}
export const getUser=()=>{
    let u=localStorage.getItem('user');
    return JSON.parse(u);
}
function setRole(role){
    localStorage.setItem('role',role);
}
export const getRole=()=>{
    return localStorage.getItem('role');
}

export const signin=(user)=>{
    const{rollno,password}=user;
    const loginURL=`/login/${rollno}?password=${password}`
    return axiosService.get(loginURL,user,{
        headers: {
          'Authorization': `Bearer ${getToken().token}`
        }
      })
        .then((response)=>{
            console.log(response.data)
            return response.data
        })
}

export const facultyToken=(facultyData)=>{
    return axiosFacultyService.post('generate-token',facultyData)
            .then((response)=>{
                console.log(response.data)
                saveFacultyToken(response.data)
                return facultySignIn(facultyData);
            }).then((res)=>{
                console.log("faculty -->",res.data)
                localStorage.setItem("current_faculty",JSON.stringify(res.data));
                switchFacultyPage();
            }).catch((error) => {
                console.error("Error while fetching token:", error);
            });
}

export const facultySignIn=(facultyData)=>{
    const{email,password}=facultyData;
    console.log("inside facultySignIn -->",facultyData.email,facultyData.password)
    const facultyLoginURL=`login/${email}?password=${password}`;
    const facultyToken=getFacultyToken();
    console.log("faculty token : ",facultyToken.token);
    return axiosFacultyService.get(facultyLoginURL,{
        headers: {
          'Authorization': `Bearer ${facultyToken.token}`,
        }
      })
}

export const currFaculty=()=>{
    return localStorage.getItem('current_faculty');
}
export const currSubject=()=>{
    var subject=currFaculty();
    return JSON.parse(subject).subject;
}
export const currFacultyName=()=>{
    var faculty=currFaculty();
    console.log("faculty --> ",faculty);
    console.log(JSON.parse(faculty).name)
    return JSON.parse(faculty).name;
}
function switchFacultyPage(){
    window.location.href='/faculty-dashboard';
}

export const getQuizzesForFaculty=()=>{
    var subject=currSubject();
    return axiosFacultyService.get(`/getQuizBySubject/${subject}`,{
        headers: {
            'Authorization': `Bearer ${getFacultyToken().token}`,
          }
    })

}

export const getCategories=()=>{
   return axiosService.get('category/getCategories',{
        headers: {
            'Authorization': `Bearer ${getToken().token}`
        }
    })
}

export const addCategory=(categoryData)=>{
    return axiosService.post('category/addCategory',categoryData,{
        headers: {
            'Authorization': `Bearer ${getToken().token}`
        }
    })
}

export const deleteCategory=(cid)=>{
    return axiosService.delete(`category/delCategory/${cid}`,{
        headers: {
            'Authorization': `Bearer ${getToken().token}`
        }
    })
}

export const addQuiz=(quizData)=>{
    return axiosService.post('quiz/addQuiz',quizData,{
        headers: {
            'Authorization': `Bearer ${getToken().token}`
        } 
    })
}

export const getQuizzes=()=>{
    return axiosService.get('quiz/getQuizzes',{
        headers: {
            'Authorization': `Bearer ${getToken().token}`
        }
    })
}
export const deleteQuiz=(qid)=>{
    return axiosService.delete(`quiz/delQuiz/${qid}`,{
        headers: {
            'Authorization': `Bearer ${getToken().token}`
        }
    })
}

export const getQuestions=(qid)=>{
    return axiosService.get(`/question/getQuestionsByQuiz/${qid}`,{
        headers: {
            'Authorization': `Bearer ${getToken().token}`
        } 
    })
}

export const getQuestionsForFaculty=(qid)=>{
    return axiosFacultyService.get(`/getQuestionsByQuiz/${qid}`,{
        headers: {
            'Authorization': `Bearer ${getFacultyToken().token}`
        } 
    })
}
export const getQuizzesByCategory=(category)=>{
    return axiosService.get(`/getQuizBySubject/${category}`,{
        headers: {
            'Authorization': `Bearer ${getToken().token}`,
          }
    })

}
export const getResults=(questionData,rollno)=>{
    console.log("inside call --> ",questionData);
    return axiosService.post(`/getResults/${rollno}`,questionData,{
        headers: {
            'Authorization': `Bearer ${getToken().token}`,
          }
    })
}
export const getResultSet=(rollno)=>{
    console.log("inside call --> ",rollno);
    return axiosService.get(`/getResultSet/${rollno}`,{
        headers: {
            'Authorization': `Bearer ${getToken().token}`,
          }
    })
}
export const sendMail=(mailBody)=>{
    console.log("inside sedMail service");
    return axiosFacultyService.post('/sendMail',mailBody,{
        headers: {
            'Authorization': `Bearer ${getFacultyToken().token}`,
          }});
}

export const uploadImageForQuestion=(image,question)=>{
    let formData=new FormData();
    formData.append("image",image);
    return axiosFacultyService.post(`/images/${question}`,formData,{
        headers: {
            'Authorization': `Bearer ${getFacultyToken().token}`,
          }}).then((res)=>res.data);
}
export const getQuestion=(question)=>{
    return axiosFacultyService.get(`/getQuestion/${question}`,{
        headers: {
            'Authorization': `Bearer ${getFacultyToken().token}`,
          }});
}
export const getImageFromQuestion=(question)=>{
    console.log("inside getImageFrom Question")
    let img=axiosFacultyService.get(`/getImageForQuestion/${question}`,{
        headers: {
          'Authorization': `Bearer ${getFacultyToken().token}`
    }}).then((res)=>img=res.data);
    return img;
}