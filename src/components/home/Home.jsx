import { createContext, useContext, useState } from "react";
import Switch from "./switch/Switch";
import { ThemeContext } from "../../App";

export default function Home() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <>
      <div
        className={`container-fluid w-100 h-100 d-flex flex-column align-items-center justify-content-center fs-5 ${
          theme === "dark" ? "bg-dark text-white" : ""
        }`}
      >
        <Switch />
        <div className="text-center mt-4 fs-1">Hello World</div>
      </div>
    </>
  );
}
