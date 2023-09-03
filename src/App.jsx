import './App.css'
import Form from './component/Form'
import { FormProvider } from './context/FormContext'
function App() {
  return(
    <FormProvider>

      <Form />
    </FormProvider>


  ) 
}

export default App