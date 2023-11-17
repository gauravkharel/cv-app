import useFormContext from "../context/useFormContext";
import FormSections from "./FormSections";
import Button from "./formui/Button";

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
        <div className="m-2 flex flex-row-reverse gap-2">
          <Button name='Prev' handleClick={handlePrev} />
          <Button name='Next' handleClick={handleNext} />
        </div>
        <h2 className="text-2xl text-gray-200 antialiased">{title[page]}</h2>
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
