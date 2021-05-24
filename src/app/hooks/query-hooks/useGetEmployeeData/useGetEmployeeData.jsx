import { useQuery } from "react-query";
import { getEmployees } from "../../../queries";

export const useGetEmployeeData = () =>
  useQuery(`employees-info`, () => getEmployees(), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
