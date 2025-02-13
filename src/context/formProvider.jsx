import { createContext, useState } from "react";    

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const hideForm = () => setIsFormVisible(false);
    const showForm = () => setIsFormVisible(true);

    return (
        <FormContext.Provider value={{ isFormVisible, hideForm, showForm }}>
            {children}
        </FormContext.Provider>
    );
};
