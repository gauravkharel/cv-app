import "./App.css";
import Form from "./component/Form";
import BasicDocument from "./ToPdf"; 
import { FormProvider } from "./context/FormContext";
function App() {
  return (
    <FormProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <BasicDocument />
          </div>
          <div className="md:col-span-1">
            <Form />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}


export default App;
