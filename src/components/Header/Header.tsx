import { useEffect, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import "./Header.css";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div>
      <button
        type="button"
        className="bg-none color text-text-color"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <LuSun className="border-0 size-7 " />
        ) : (
          <FiMoon className="icon-light" />
        )}
      </button>
    </div>
  );
}

export default App;
