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
            name="personal.fullname"
            placeholder="Your Name"
            value={data.personal.fullname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="jobtitle">
          <span>Job Title: </span>
          <span className="font-thin text-sm">optional</span>
          <input
            className="border-1px border-black rounded "
            type="text"
            name="personal.jobtitle"
            placeholder="Software Engineer"
            value={data.personal.jobtitle}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          <span>Email: </span>
          <input
            type="email"
            name="personal.email"
            placeholder="placeh@gmail.com"
            value={data.personal.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phonenumber">
          <span>Phone Number </span>
          <input
            type="number"
            name="personal.phonenumber"
            placeholder="123 121 131"
            value={data.personal.number}
            onChange={handleChange}
          />
        </label>
        
    </>
  );
}

export default PersonalDetails;