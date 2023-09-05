import useFormContext from "../../context/useFormContext";
function PersonalDetails() {
  const {data, handleChange} = useFormContext();

  return (
    <>
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
        
    </>
  );
}

export default PersonalDetails;