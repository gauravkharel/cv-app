import { useState } from "react";

function Form() {
  const [data, setData] = useState({
    fullname: "",
    jobtitle: "",
    email: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Name: ${data.fullname}, Job Title: ${data.jobtitle}, Email: ${data.email}, Phone Number: ${data.phonenumber} `
    );
  };

  // const dispatch = useDispatch();
  return (
    <>
      <section>
        <h1 className="">Main form</h1>
      </section>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <h1 className="">Personal Details</h1>
        <label className="flex gap-2" htmlFor="fullname">
          <span>Full Name: </span>
          <span className="font-thin text-sm">required</span>
          <input
            type="text"
            name="fullname"
            placeholder="Your Name"
            value={data.fullname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="jobtitle">
          <span>Job Title: </span>
          <span className="font-thin text-sm">optional</span>
          <input
            className="border-1px border-black rounded "
            type="text"
            name="jobtitle"
            placeholder="Software Engineer"
            value={data.jobtitle}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="email">
          <span>Email: </span>
          <input
            type="email"
            name="email"
            placeholder="placeh@gmail.com"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phonenumber">
          <span>Phone Number </span>
          <input
            type="number"
            name="phonenumber"
            placeholder="123 121 131"
            value={data.number}
            onChange={handleChange}
          />
        </label>
        <button className="w-12 p-2 block text-sm bg-violet-500 active:bg-violet-700" type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
