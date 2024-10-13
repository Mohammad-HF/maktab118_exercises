import { Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"

export const MainTemplate : React.FC = ()=>{
    return <>
    <NavBar/>
    <div className="bg-appTeal min-h-[calc(100vh_-_72px)] pt-16 max-w-[1600px] mx-auto px-4 pb-4">
    <Outlet/> 
    </div>
    <Footer/>
    </>
}