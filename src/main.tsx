import React from "react";
import ReactDOM from "react-dom";
import "../dist/tailwind.css";
import App from "./App";
import { InputProvider } from "./context/InputContext";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.render(
  <ThemeProvider>
    <InputProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </InputProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
