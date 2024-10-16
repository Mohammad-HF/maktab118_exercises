export const urls = {
    posts:{
        list: "/posts",
        info: (id : number)=>`/posts/${id}`,
        byUser : (id : number) => `/posts/user/${id}`
    },
    comments : {
        byPost : (id : number)=> `/comments/post/${id}`,
    },
    users : {
        list : "/users",
        info : (id : number)=> `/users/${id}`
    }
}