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
    workexperience: [
      {
        companyname: "",
        jobtitle: "",
        duration: "",
        address: "",
        bullets: "",
        points: [],
      // points: [getNewPoints(), getNewPoints(), getNewPoints()],
      },
    ],
    education: {
      uniname: "",
      degreename: "",
      gradmy: "",
      uniadd: "",
      points: [getNewPoints(), getNewPoints(), getNewPoints()],
    },
   
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

  const addPoint = (category, index) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const item = newData[category][index];
      item.points.push(getNewPoints());
      return newData;
    });
  };


  const removePoint = (category, index, pointId) => {
    setData((prevData) => {
      const newData = { ...prevData };
      // code below access the specific item within the specified category using the provided  `index`
      newData[category][index].points = newData[category][index].points.filter(
        (point) => point.id !== pointId
      );
      return newData;
    });
  };


  const updatePoint = (category, index, pointId, field, value) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const points = newData[category][index].points;
      const pointIndex = points.findIndex((point) => point.id === pointId);

      if (pointIndex !== -1) {
        points[pointIndex][field] = value;
      }

      return newData;
    });
  };

  const removePointById = (points, pointId) => {
    return points.filter((point) => point.id !== pointId);
  };

  const [page, setPage] = useState(0);

  return (
    <FormContext.Provider
      value={{ title, page, setPage, data, setData, handleChange, addPoint, removePoint, updatePoint, removePointById }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
