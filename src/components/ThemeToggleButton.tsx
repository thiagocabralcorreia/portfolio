import { Moon, SunDim } from "phosphor-react";
import { useTheme } from "../context/ThemeContext";

interface ThemeToggleButtonProps {
  iconSize?: number;
}

export function ThemeToggleButton({ iconSize = 28 }: ThemeToggleButtonProps) {
  const { theme, setTheme } = useTheme();

  function handleToggleTheme() {
    //reverse the theme value every time that "handleToggleTheme" is called
    setTheme(!theme);
  }

  return (
    <div className="content-center pl-2 my-auto header-link">
      {theme ? (
        <Moon
          size={iconSize}
          className="cursor-pointer"
          onClick={handleToggleTheme}
        />
      ) : (
        <SunDim
          size={iconSize}
          className="cursor-pointer"
          onClick={handleToggleTheme}
        />
      )}
    </div>
  );
}
