import axios from "axios"

const baseUrl = "http://localhost:8080"
export const axiosInstance = ()=>{
    return axios.create({baseURL : baseUrl})
}