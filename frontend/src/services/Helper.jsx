import axios from "axios";
export const BASE_URL='http://localhost:9195/exam';
export const Faculty_BASE_URL='http://localhost:9195/faculty';

export const axiosService=axios.create({
    baseURL:BASE_URL
})

export const axiosFacultyService=axios.create({
    baseURL:Faculty_BASE_URL
})
