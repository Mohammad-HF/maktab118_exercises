
const tokenName = "chat-app-token";

export const setToken = (token : string)=>{
    localStorage.setItem(tokenName,token)
}

export const getToken = ()=>{
    return localStorage.getItem(tokenName)
}