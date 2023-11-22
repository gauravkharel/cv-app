import useFormContext from "../../context/useFormContext";
import { getNewPoints } from "../../helper/utils";
import Input from "../formui/Input";
import { useState } from "react";

function WorkExperience() {
  return (
    <section>
      <span>Put your work on here.</span>
      <br />
      <Segment />
    </section>
  );
}

export default WorkExperience;

const Segment = () => {
  const { data, handleChange, setData } = useFormContext();
  return (
    <div>
      <Input
        type="text"
        name="workexperience[0].companyname"
        handleChange={handleChange}
        value={data.workexperience.companyname}
        htmlFor="companyname"
        title="Company Name"
      />

      <Input
        type="text"
        name="workexperience[0].jobtitle"
        handleChange={handleChange}
        value={data.workexperience.jobtitle}
        htmlFor="jobtitle"
        title="Job Title"
      />
      <Input
        type="text"
        name="workexperience[0].duration"
        handleChange={handleChange}
        value={data.workexperience.duration}
        htmlFor="duration"
        title="Duration"
      />
      <Input
        type="text"
        name="workexperience[0].address"
        handleChange={handleChange}
        value={data.workexperience.address}
        htmlFor="address"
        title="Address"
      />
      <DescPoints />
    </div>
  );
};

export const InputPoints = (value, onChange, htmlFor, handleRemove) => {
  return (
    <div>
      <input type="text" onChange={onChange} value={value} htmlFor={htmlFor} />
      <button onClick={handleRemove}>-</button>
    </div>
  );
};


const DescPoints = () => {
  const { data, addPoint, removePoint, updatePoint } = useFormContext();

  const handleAddBtn = () => {
    addPoint("workexperience", 0);
  };

  const handleRemove = (id) => {
    removePoint("workexperience", 0, id);
  };

  const handleChangePoints = (pointId, field, value) => {
    updatePoint("workexperience", 0, pointId, field, value);
  };

  return (
    <div>
      <button onClick={handleAddBtn}>Add</button>
      {data.workexperience[0].points.map((point) => (
        <div key={point.id}>
          <input
            type="text"
            value={point.text}
            onChange={(e) => handleChangePoints(point.id, "text", e.target.value)}
          />
          <button onClick={() => handleRemove(point.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
