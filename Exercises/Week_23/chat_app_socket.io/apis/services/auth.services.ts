import { axiosInstance } from "../instance"
import { urls } from "../urls";

type LoginServiceType = (body : ILoginReqDto)=> Promise<ILoginResDto>
export const loginService : LoginServiceType = async(body)=>{
    const instance = axiosInstance();
    const response = await instance.post(urls.auth.login,body)
    return response.data;
}