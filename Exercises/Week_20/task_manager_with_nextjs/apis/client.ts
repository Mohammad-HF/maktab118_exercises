import axios from "axios"


export const httpReq = ()=>{
    return axios.create({baseURL : 'https://town-board.pockethost.io/'})
}