import { createContext, useState } from "react";

const FormContext = createContext({});
/* eslint-disable */
export const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    fullname: "",
    jobtitle: "",
    email: "",
    phonenumber: "",
    uniname: "",
    degreename: "",
    gradmy: "",
    uniadd: "",
  });
  const title = {
    0: "Personal Details",
    1: "Work Experience",
    2: "Projects",
    3: "Education",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [page, setPage] = useState(0);

  return (
    <FormContext.Provider
      value={{ title, page, setPage, data, setData, handleChange }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
