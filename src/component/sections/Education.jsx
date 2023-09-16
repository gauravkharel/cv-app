import useFormContext from "../../context/useFormContext";
function Education() {
  return <Degree />;
}

const Degree = () => {
  const { data, handleChange } = useFormContext();

  return (
    <section>
      <span>From bottom to top start from the last degree you took.</span>
      <br />

      <label htmlFor="degreename">
        <span>Degree: </span>
        <input
          type="text"
          name="education.degreename"
          placeholder="MSc. in Computer Science"
          value={data.education.degreename}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="gradmy">
        <span>Graduated On: </span>
        <input
          type="text"
          name="education.gradmy"
          placeholder="Sept 2022"
          value={data.education.gradmy}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="uniname">
        <span>University Name: </span>
        <input
          type="text"
          name="education.uniname"
          placeholder="University of London"
          value={data.education.uniname}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="uniadd">
        <span>University Adress: </span>
        <input
          type="text"
          name="education.uniadd"
          placeholder="University of London"
          value={data.education.uniadd}
          onChange={handleChange}
        />
      </label>
    
      </section>
  );
};

export default Education;
