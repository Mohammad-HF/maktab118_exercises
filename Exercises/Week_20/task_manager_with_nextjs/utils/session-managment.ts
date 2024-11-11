const userToken = "user-session-token";
export const setToken = (token :string)=>{
    localStorage.setItem(userToken,token)
}

export const getToken = ()=>{
  const token =  localStorage.getItem(userToken);
  return token
}