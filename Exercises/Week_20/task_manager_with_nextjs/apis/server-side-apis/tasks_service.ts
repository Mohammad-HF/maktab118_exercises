"use server"
import { AxiosError } from "axios";
import { httpReq } from "../client"
import { urls } from "../urls"
import { revalidatePath } from "next/cache";

type IAddNewTask = (data : FormData)=>Promise<void>
export const addNewTaskService : IAddNewTask = async(data)=>{
    try {
        const response = await httpReq().post(urls.task.addTask,data);
        revalidatePath("/tasks")
    } catch (error) {
        console.log((error as AxiosError).response?.data)
    }
}

interface ITaskResDto extends IResDto {
    items : ITask[]
}
type FetchTaskListService = ()=> Promise<ITaskResDto | undefined> 
export const fetchTaskListService : FetchTaskListService = async()=> {
    try {
        const response = await httpReq().get<ITaskResDto>(urls.task.list)
        return response.data;
    } catch (error) {
        console.log((error as AxiosError).response?.data)
        
    }
}