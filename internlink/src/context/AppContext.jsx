import { createContext } from "react";
export const AppContext = createContext(); 
export const AppProvider = () => {
    const value={

    }
   return(
    <AppContext.Provider value={value}>
        {props.children}
      </AppContext.Provider>   
   )
}

export default AppProvider