import "./App.css";
import Form from "./component/Form";
import PdfView from "./component/pdf/PdfView";
import { FormProvider } from "./context/FormContext";
function App() {
  return (
    <FormProvider>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 h-full bg-pink-100">
          <div className="md:col-span-1 bg-gray-100">
            <PdfView />
          </div>
          <div className="md:col-span-1 bg-gray-500 h-full">
              <Form />
          </div>
        </div>
    </FormProvider>
  );
}

export default App;
