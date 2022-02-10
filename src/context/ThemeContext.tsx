import React, {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";

type ContextType = [number, React.Dispatch<React.SetStateAction<number>>];

const ThemeContext = createContext({} as ContextType);

function ThemeProvider(props: { children?: ReactNode }) {
  const state = useState(parseInt(localStorage.getItem("theme") || "1"));
  localStorage.setItem("theme", String(state[0]));

  return <ThemeContext.Provider value={state} {...props} />;
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Not inside an Theme provider");
  return context;
}

export { useTheme, ThemeProvider };
