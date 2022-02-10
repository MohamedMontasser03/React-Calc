import { useState } from "react";
import ButtonGrid from "./components/ButtonGrid";
import CalcButton from "./components/CalcButton";
import Header from "./components/Header";
import { useInput } from "./context/InputContext";
import { useTheme } from "./context/ThemeContext";

function App() {
  const [input, dispatchInput] = useInput();
  const [theme, setTheme] = useTheme();

  return (
    // Hack to get tailwind to compile runtime styles
    <div className="theme-1 theme-2 theme-3 left-[0.625rem] left-[calc(100%_-_0.625rem)] left-1/2">
      <div className={`w-full bg-primary theme-${theme}`}>
        <div
          className={`animate-fade min-h-screen max-w-lg mx-auto p-5 text-text`}
        >
          <Header />
          <div className="styled-scrollbar bg-display my-5 text-5xl h-28 whitespace-nowrap font-semibold overflow-x-auto overflow-y-hidden px-6 py-8 rounded-lg">
            {input}
          </div>
          <ButtonGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
