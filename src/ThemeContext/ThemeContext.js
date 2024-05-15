import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    theme:"light",
    toggleTheme:(theme)=>{}
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}