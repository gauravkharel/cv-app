import useFormContext from "../context/useFormContext";
import FormInputs from "./FormInputs";

const Form = () => {
  const { setPage, title, page, data} = useFormContext();

  const handleNext = () => setPage(page => page + 1)
  const handlePrev = () => setPage(page => page - 1)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(JSON.stringify(data))
}

  return (
    <>
      <button className="p-1 bg-pink-200" type="button" onClick={handleNext}>
        Next
      </button>
      <button className="p-1 bg-pink-300"  type="button" onClick={handlePrev}>
        Prev
      </button>
      <h2 className="text-2xl">{title[page]}</h2>
      <FormInputs />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Form;
