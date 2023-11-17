import useFormContext from "../context/useFormContext";
import FormSections from "./FormSections";

const Form = () => {
  const { setPage, title, page, data } = useFormContext();

  const handleNext = () => setPage((page) => page + 1);
  const handlePrev = () => setPage((page) => page - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };

  return (
    <div className="h-[59rem] ">
        <div className="">
          <button className="p-1 bg-pink-200" type="button" onClick={handleNext}>
            Next
          </button>
          <button className="p-1 bg-pink-300" type="button" onClick={handlePrev}>
            Prev
          </button>
        </div>
        <h2 className="text-2xl">{title[page]}</h2>
        <FormSections />
        <button
          className="bg-blue-500 text-white m-1 text-xl px-4 py-2"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
    </div>
  );
};

export default Form;
