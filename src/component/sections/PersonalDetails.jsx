import useFormContext from "../../context/useFormContext";
import Input from "../formui/Input";
function PersonalDetails() {
  const {data, handleChange} = useFormContext()
return (
    <>
        <span className="flex flex-col gap-3">
          <Input
            type='text'
            name='personal.fullname'
            handleChange={handleChange}
            value={data.personal.fullname}
            htmlFor='fullname'
          />
           <Input
            type='text'
            name='personal.jobtitle'
            handleChange={handleChange}
            value={data.personal.jobtitle}
            htmlFor='jobtitle'
          />
          <Input
            type='email'
            name='personal.email'
            handleChange={handleChange}
            value={data.personal.email}
            htmlFor='email'
          />
          <Input
            type='number'
            name='personal.phonenumber'
            handleChange={handleChange}
            value={data.personal.phonenumber}
            htmlFor='phonenumber'
          />
          </span>
    </>
  );
}



export default PersonalDetails;
