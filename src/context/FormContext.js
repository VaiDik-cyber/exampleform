import { createContext, useState } from "react";

const FormContext = createContext({
  data: [{}],
  addData: () => {},
});

export const FormProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const addData = (newValue) => {
    setData([...data, newValue]);
  };

  const obj = { data: data, addData: addData };

  return <FormContext.Provider value={obj}>{children}</FormContext.Provider>;
};

export default FormContext;
