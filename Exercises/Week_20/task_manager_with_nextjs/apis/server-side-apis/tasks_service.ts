"use server"
import { AxiosError } from "axios";
import { httpReq } from "../client"
import { urls } from "../urls"

type IAddNewTask = (data : FormData)=>Promise<void>
export const addNewTaskService : IAddNewTask = async(data)=>{
    try {
        const response = await httpReq().post(urls.task.addTask,data);
    } catch (error) {
        console.log((error as AxiosError).response?.data)
    }
}