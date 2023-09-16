import useFormContext from "../../context/useFormContext";
function PersonalDetails() {
  const {data, handleChange} = useFormContext()
return (
    <>
        <span className="flex flex-col gap-3">
        <label className="flex flex-col " htmlFor="fullname">
          <span>Full Name:<span className="font-thin text-sm">  required</span></span>
          <input
            type="text"
            name="personal.fullname"
            placeholder="Your Name"
            className="h-8 pl-3"
            value={data.personal.fullname}
            onChange={handleChange}
            />
        </label>
        <label className="flex flex-col gap-2" htmlFor="jobtitle">
          <span>Job Title: <span className="font-thin text-sm"> optional</span></span>
          <input
            type="text"
            name="personal.jobtitle"
            placeholder="Software Engineer"
            className="h-8 pl-3"
            value={data.personal.jobtitle}
            onChange={handleChange}
            />
        </label>
        <label  className="flex flex-col gap-2"  htmlFor="email">
          <span>Email: </span>
          <input
            type="email"
            name="personal.email"
            placeholder="placeh@gmail.com"
            className="h-8 pl-3"
            value={data.personal.email}
            onChange={handleChange}
            />
        </label>
        <label className="flex flex-col gap-2" htmlFor="phonenumber">
          <span>Phone Number </span>
          <input
            type="number"
            name="personal.phonenumber"
            className="h-8 pl-3"
            placeholder="123 121 131"
            value={data.personal.number}
            onChange={handleChange}
            />
        </label>
        
        </span>
    </>
  );
}

export default PersonalDetails;