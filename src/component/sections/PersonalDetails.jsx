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
            title='Fullname'
          />
           <Input
            type='text'
            name='personal.jobtitle'
            handleChange={handleChange}
            value={data.personal.jobtitle}
            htmlFor='jobtitle'
            title='Job Title'
          />
          <Input
            type='email'
            name='personal.email'
            handleChange={handleChange}
            value={data.personal.email}
            htmlFor='email'
            title='Email'
          />
          <Input
            type='number'
            name='personal.phonenumber'
            handleChange={handleChange}
            value={data.personal.phonenumber}
            htmlFor='phonenumber'
            title='Phone Number'
          />
          </span>
    </>
  );
}



export default PersonalDetails;
