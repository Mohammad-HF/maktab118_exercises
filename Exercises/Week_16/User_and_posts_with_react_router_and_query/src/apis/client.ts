import axios from "axios";
const url = "https://dummyjson.com";
export const httpClient = () => {
  return axios.create({
    baseURL: url,
  });
};
