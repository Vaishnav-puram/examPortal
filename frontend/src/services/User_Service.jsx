import { axiosService } from "./Helper";

export const signUp=(user)=>{
    return axiosService.post('/create',user)
            .then((response)=>{response.data})
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