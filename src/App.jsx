import { createContext, useContext, useState } from "react";
import Home from "./components/home/Home";

export const ThemeContext = createContext("");

export default function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Home />
      </ThemeContext.Provider>
    </>
  );
}
