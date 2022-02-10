import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  //change position of knob
  const pos = ["[0.625rem]", "1/2", "[calc(100%_-_0.625rem)]"];

  function onClick(e: React.MouseEvent<HTMLDivElement>) {
    const newtheme = Math.ceil(
      ((e.clientX - e.currentTarget.offsetLeft) * 3) /
        e.currentTarget.clientWidth
    );
    setTheme(newtheme);
  }

  return (
    <div onClick={onClick}>
      <div className="flex justify-between px-1 my-1">
        <span className="text-xs">1</span>
        <span className=" text-xs">2</span>
        <span className="text-xs">3</span>
      </div>
      <div className="bg-secondary relative transition-all rounded-full h-5 w-14">
        <div
          className={`w-5 h-5 absolute -translate-x-1/2 left-${
            pos[theme - 1]
          } border-secondary border-4 transition-all rounded-full bg-button-accent`}
        ></div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
