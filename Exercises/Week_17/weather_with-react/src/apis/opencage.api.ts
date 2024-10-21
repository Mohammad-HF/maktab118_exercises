import axios from "axios";
import { IResult } from "../types/opencage";

const url = "https://api.opencagedata.com/geocode/v1/json";
export const fetchLatAndLng = async (query: string) => {
  const params = {
    key: "1b38d17630684cc2ac38eb569576249c",
    q: encodeURIComponent(query),
    pretty: 1,
    no_annotations: 1,
  };
  const response = await axios.get<{results : IResult[] | []}>(url, { params: params });
  return response.data;
};
