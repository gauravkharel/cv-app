import useFormContext from "../../context/useFormContext";
import Input from "../formui/Input";

function WorkExperience() {
  const { data, handleChange } = useFormContext();
  return (
    <section>
      <span>Put your work on here.</span>
      <br />

      <Input
        type="text"
        name="workexperience.companyname"
        handleChange={handleChange}
        value={data.workexperience.companyname}
        htmlFor="companyname"
        title="Company Name"
      />

      <Input
        type="text"
        name="workexperience.jobtitle"
        handleChange={handleChange}
        value={data.workexperience.jobtitle}
        htmlFor="jobtitle"
        title="Job Title"
      />
      <Input
        type="text"
        name="workexperience.jobtitle"
        handleChange={handleChange}
        value={data.workexperience.jobtitle}
        htmlFor="jobtitle"
        title="Job Title"
      />
    </section>
  );
}

export default WorkExperience;
