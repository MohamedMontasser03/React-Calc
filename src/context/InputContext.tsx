import React, {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";

type ActionType = "insert" | "delete" | "clear" | "eval";

type ReducerType = (
  state: string,
  action: { type: ActionType; payload?: string }
) => string;

const InputContext = createContext(
  {} as [
    string,
    React.Dispatch<{
      type: ActionType;
      payload?: string;
    }>
  ]
);

const InputReducer: ReducerType = (state, { type, payload = "" }) => {
  try {
    const regex = /[^(0-9x\+-\/.)]/g;
    switch (type) {
      case "insert":
        return state.match(regex) ? payload : state + payload;
      case "delete":
        return state.match(regex) ? "" : state.slice(0, state.length - 1);
      case "clear":
        return "";
      case "eval":
        const res = String(eval(state.replaceAll("x", "*")));
        if (!res) throw new Error("");
        return String(res);
      default:
        return "";
    }
  } catch (err: any) {
    return "Invalid Input";
  }
};

function InputProvider(props: { children?: ReactNode }) {
  const state = useReducer(InputReducer, "");

  return <InputContext.Provider value={state} {...props} />;
}

function useInput() {
  const context = useContext(InputContext);
  if (!context) throw new Error("Not inside an Input provider");
  return context;
}

export { useInput, InputProvider };
