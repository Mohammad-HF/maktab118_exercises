import { IResDto } from "../../types/global.type";
import { IPost } from "../../types/posts.type";
import { httpClient } from "../client";
import { urls } from "../urls";

interface IPostsResDTo extends IResDto {
    posts : IPost[]
}
type FetchPosts = () => Promise<IPostsResDTo>;
export const fetchPosts: FetchPosts = async () => {
  const response = await httpClient().get<IPostsResDTo>(urls.posts.list);
  return response.data;
};
