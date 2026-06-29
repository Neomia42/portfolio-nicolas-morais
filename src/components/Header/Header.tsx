import { useEffect, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import "./Header.css";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.dataset.theme = "light";
      return;
    }

    delete document.documentElement.dataset.theme;
  }, [theme]);

  return (
    <div>
      <button
        type="button"
        aria-label={
          theme === "dark" ? "Activer le theme light" : "Activer le theme dark"
        }
        className="theme-toggle"
        onClick={() =>
          setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
          )
        }
      >
        {theme === "dark" ? (
          <LuSun className="icon-dark" />
        ) : (
          <FiMoon className="icon-light" />
        )}
      </button>
    </div>
  );
}

export default App;
