import axios from "axios";
import { IPost } from "../types/posts.type";

export interface IResPostDto {
    skip : number;
    limit : number;
    total : number;
    posts : IPost[]
}
type FetchPosts = ()=>Promise<IResPostDto>
const url = "https://dummyjson.com/posts"
export const fetchPosts : FetchPosts = async ()=>{
    const response = await axios.get<IResPostDto>(url)
    return response.data ;
}