import { createContext, useState } from "react";

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
     const [graphType, setGraphType] = useState("line");
     const [showAlerts, setShowAlerts] = useState(true);

     return (
          <ConfigContext.Provider value={{
               graphType,
               setGraphType,
               showAlerts,
               setShowAlerts
          }}>
               {children}
          </ConfigContext.Provider>
     );
};