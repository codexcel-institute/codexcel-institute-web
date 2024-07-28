import { createContext, useState } from "react";


export const FormContext = createContext()


export function FormProvider ({ children }){
    const [displayForm, setDisplayForm] = useState(false)

    function openForm(){
        setDisplayForm(true)
    }

    function closeForm(){
        setDisplayForm(false)
    }
    return(
        <FormContext.Provider value={{displayForm, openForm, closeForm}}>{children}</FormContext.Provider>
    )
}