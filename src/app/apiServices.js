import axios from "axios";
import { BASE_URL } from "./config";

const apiServices = axios.create({
  baseURL: BASE_URL,
});

apiServices.interceptors.request.use(
  (request) => {
    console.log("Start request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
  }
);
apiServices.interceptors.response.use(
  (response) => {
    console.log("Start response", response);
    return response;
  },
  function (error) {
    console.log("RESPONSE ERROR", error);
  }
);
export default apiServices;
