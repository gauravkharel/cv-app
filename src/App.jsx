import './App.css'
import Form from './component/Form'
import { FormProvider } from './context/FormContext'
import TopNavBar from './component/sections/TopNavBar'
function App() {
  return(
    <FormProvider>
      <TopNavBar />
      <Form />
    </FormProvider>
  ) 
}

export default App