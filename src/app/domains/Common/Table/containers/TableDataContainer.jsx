import { useEffect, useState } from "react";
import { useGetEmployeeData } from "../../../../hooks/query-hooks/useGetEmployeeData/useGetEmployeeData";

const TableDataContainer = ({ children }) => {
  const { data, isLoading, isError } = useGetEmployeeData();
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    if (data?.data?.data) {
      localStorage.setItem("employeeData", JSON.stringify(data?.data?.data));
      setEmployeeData(data?.data?.data);
    }
  }, [data]);

  const handleDelete = (id) => {
    const data = JSON.parse(localStorage.getItem("employeeData") || {});
    const filteredData = data.filter((item) => item.id !== id);
    setEmployeeData(filteredData);
    localStorage.setItem("employeeData", JSON.stringify(filteredData));
  };

  const handleAdd = (data) => {
    const oldData = JSON.parse(localStorage.getItem("employeeData") || {});
    const newData = [...oldData, data];
    setEmployeeData(newData);
    localStorage.setItem("employeeData", JSON.stringify(newData));
  };

  return (
    <div>
      {children({
        data: employeeData,
        isLoading,
        isError,
        handleDelete,
        handleAdd,
      })}
    </div>
  );
};

export default TableDataContainer;
