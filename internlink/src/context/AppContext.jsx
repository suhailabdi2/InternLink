import { createContext } from "react";
export const AppContext = createContext(); 
export const AppProvider = () => {
    const value={

    }
   return(
    <AppContextProvider value={value}>
        {props.children}
      </AppContextProvider>   
   )
}