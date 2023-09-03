import useFormContext from "../context/useFormContext";
import FormInputs from "./FormInputs";

const Form = () => {
  const { setPage } = useFormContext();

  const handleNext = () => setPage(page => page + 1)

  return (
    <>
      <button type="button" onClick={handleNext}>
        Next
      </button>
      {/* <h2>{title[page]}</h2> */}
      <FormInputs />
    </>
  );
};

export default Form;
