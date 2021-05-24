import axios from "axios";

const defaultOptions = {
  baseURL: "https://fakejsonapi.com/fake-api/employee/api/v1/",
};

const axiosInstance = axios.create(defaultOptions);

export { axiosInstance };
