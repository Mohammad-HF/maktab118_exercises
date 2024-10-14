import { IResDto } from "../../types/global.type";
import { IPost } from "../../types/posts.type";
import { httpClient } from "../client";
import { urls } from "../urls";

interface IPostsResDTo extends IResDto {
    posts : IPost[]
}
type FetchPosts = (skip : number ) => Promise<IPostsResDTo>;
type params = {skip : number , limit : number}

export const fetchPosts: FetchPosts = async (skip) => {
  const params : params = {skip : skip , limit : 10}
  const response = await httpClient().get<IPostsResDTo>(urls.posts.list,{params:params});
  return response.data;
};

type FetchPost = (id:number)=>Promise<IPost>
export const fetchPost: FetchPost = async (id)=>{
  const response = await httpClient().get<IPost>(urls.posts.info(id))
  return response.data;
}