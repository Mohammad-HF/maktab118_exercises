import axios from "axios";
import { IWeatherResDto } from "../types/openweather";


const url = "https://api.openweathermap.org/data/2.5/weather";
export const fetchWeatherData = async({lat , lng }:{lat : number , lng : number})=>{
    const params = {lat : lat , lon : lng,appid :"51e0785b7d151f2e9fb00d36fa8e7ef9"}
    const response = await axios.get<IWeatherResDto>(url,{params :params})
    console.log(response.data);
    
  return  response.data
}