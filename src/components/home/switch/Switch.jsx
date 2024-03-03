import { useContext } from "react";
import { ThemeContext } from "../../../App";

export default function Switch() {
  const [theme, setTheme] = useContext(ThemeContext);
  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="me-2">Dark</div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            defaultChecked={false}
            onChange={handleToggle}
          />
        </div>
        <div>Light</div>
      </div>
    </>
  );
}
