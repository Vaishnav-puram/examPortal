import { axiosService } from "./Helper";

export const signUp=(user)=>{
    return axiosService.post('/create',user)
            .then((response)=>{response.data})
}