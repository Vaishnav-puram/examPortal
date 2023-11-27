import axios from "axios";
export const BASE_URL='http://localhost:9192/exam';

export const axiosService=axios.create({
    baseURL:BASE_URL
})
