"use server";
import { AxiosError } from "axios";
import { httpReq } from "../client";
import { urls } from "../urls";
import { revalidatePath } from "next/cache";

type IAddNewTask = (data: FormData) => Promise<void>;
export const addNewTaskService: IAddNewTask = async (data) => {
  try {
    const response = await httpReq().post(urls.task.addTask, data);
    revalidatePath("/tasks");
  } catch (error) {
    console.log((error as AxiosError).response?.data);
  }
};

interface ITaskResDto extends IResDto {
  items: ITask[];
}
type FetchTaskListService = () => Promise<ITaskResDto | undefined>;
export const fetchTaskListService: FetchTaskListService = async () => {
  try {
    const response = await httpReq().get<ITaskResDto>(urls.task.list);
    return response.data;
  } catch (error) {
    console.log((error as AxiosError).response?.data);
  }
};

type EditTaskService = (data: FormData,id: string) => Promise<void>;
export const editTaskService: EditTaskService = async (data,id) => {
  try {
    
    const response = await httpReq().patch(
      urls.task.editTask(id),
      {
        priority: data.get("priority"),
        title: data.get("title"),
        description: data.get("description"),
        completed: data.get("completed") === "yes" ? true : false,
      }
    );
    revalidatePath("/tasks");
  } catch (error) {
    console.log((error as AxiosError).response?.data);
  }
};
type RemoveTaskService = (id :string)=>Promise<void>
export const removeTaskService : RemoveTaskService = async(id)=>{
    try {
        const response = await httpReq().delete(urls.task.deleteTask(id))
        revalidatePath("/tasks")
    } catch (error) {
        console.log((error as AxiosError).response?.data);
    }
}
