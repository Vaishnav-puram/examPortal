import { axiosService } from "./Helper";

export const signUp=(user)=>{
    return axiosService.post('/create',user)
            .then((response)=>{response.data})
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
export const getUserName=()=>{
    return localStorage.getItem('name');
} 
function saveToken(token){
    localStorage.setItem('token',JSON.stringify(token))
}

function getToken(){
    // return localStorage.getItem('token')
    const tokenString = localStorage.getItem('token');
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
    return axiosService.get(loginURL,user)
        .then((response)=>{
            console.log(response.data)
            return response.data
        })
}