import React from "react";

function ThemeSwitcher() {
  return (
    <div>
      <div className="flex justify-between px-1 my-1">
        <span className="text-xs">1</span>
        <span className=" text-xs">2</span>
        <span className="text-xs">3</span>
      </div>
      <div className="bg-main1 rounded-full w-14">
        <div className="w-5 h-5 border-main1 border-4 rounded-full bg-red-500"></div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
