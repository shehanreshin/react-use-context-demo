import { useState } from "react";

export default function Switch() {
  const [isDark, toggleTheme] = useState(false);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="me-2">Dark</div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked
            onClick="toggleTheme(true)"
          />
        </div>
        <div>Light</div>
      </div>
    </>
  );
}
