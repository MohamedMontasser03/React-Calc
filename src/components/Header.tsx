import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <span className=" font-semibold text-3xl">calc</span>
      <div className="flex items-end gap-7">
        <p className="text-xs tracking-wide pb-1 font-semibold">THEME</p>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
