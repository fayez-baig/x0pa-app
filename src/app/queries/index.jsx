import { axiosInstance } from "../axios/axios-instance";

const getEmployees = async () => await axiosInstance.get("employees");

export { getEmployees };
