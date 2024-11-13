import { getToken } from "@/utils/session-managment";
import { redirect } from "next/navigation";
import { ReactNode } from "react"

const TasksLayout : React.FC<{children : ReactNode}> = async({children})=>{
    const userToken = await getToken();
    if(!userToken) redirect("/login");
    return <div>
        {children}
    </div>
}
export default TasksLayout