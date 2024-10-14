import { IComments } from "../../types/comments.type"
import { IResDto } from "../../types/global.type"
import { httpClient } from "../client"
import { urls } from "../urls"

interface ICommentsResDto extends IResDto{
    comments : IComments[]
}
type FetchCommentOfPosts = (id : number)=>Promise<ICommentsResDto>
export const fetchCommentOfPosts : FetchCommentOfPosts = async (id)=>{
    const response = await httpClient().get<ICommentsResDto>(urls.comments.byPost(id));
    return response.data;
}