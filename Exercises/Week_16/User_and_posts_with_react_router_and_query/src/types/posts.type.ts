export interface IPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reaction: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}
