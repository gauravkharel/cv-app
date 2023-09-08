import { createContext, useState } from "react";
import { getNewPoints } from "../helper/utils";

const FormContext = createContext({});
/* eslint-disable */
export const FormProvider = ({ children }) => {
  const title = {
    0: "Personal Details",
    1: "Work Experience",
    2: "Projects",
    3: "Education",
  };

  const initialData = {
    personal: {
      fullname: "",
      jobtitle: "",
      email: "",
      phonenumber: "",
    },
    education: {
      uniname: "",
      degreename: "",
      gradmy: "",
      uniadd: "",
      points: [getNewPoints(), getNewPoints(), getNewPoints()],
    },
    workexperience: [
      {
        companyname: "",
        jobtitle: "",
        duration: "",
        address: "",
        bullets: "",
        points: [getNewPoints(), getNewPoints(),getNewPoints()],
      },
    ]
  };

  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [category, fieldName] = name.split(".");
    setData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [fieldName]: value,
      },
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
