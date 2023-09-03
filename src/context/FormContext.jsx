import { createContext, useState } from "react";

const FormContext = createContext({})
/* eslint-disable */
export const FormProvider = ({children}) => {

    const title = {
        0: 'Personal Details',
        1: 'Work Experience',
        2: 'Projects',
        3: 'Education'
    }
    
    const [page, setPage] = useState(0)

    return (
        <FormContext.Provider value={{title, page, setPage}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext