export const urls = {
    posts:{
        list: "/posts",
        info: (id : number)=>`/posts/${id}`
    },
    comments : {
        byPost : (id : number)=> `/comments/post/${id}`,
    },
    users : {
        list : "/users",
        info : (id : number)=> `/users/${id}`
    }
}