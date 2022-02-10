import React from "react";
import { useInput } from "../context/InputContext";
import CalcButton from "./CalcButton";

function ButtonGrid() {
  const [_, dispatchInput] = useInput();

  return (
    <div className="grid grid-cols-4 grid-rows-5 p-8 gap-4 bg-secondary rounded-lg">
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "7" })}
      >
        7
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "8" })}
      >
        8
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "9" })}
      >
        9
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "delete" })}
        theme="secondary"
      >
        DEL
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "4" })}
      >
        4
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "5" })}
      >
        5
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "6" })}
      >
        6
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "+" })}
      >
        +
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "1" })}
      >
        1
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "2" })}
      >
        2
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "3" })}
      >
        3
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "-" })}
      >
        -
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "." })}
      >
        .
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "0" })}
      >
        0
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "/" })}
      >
        /
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "insert", payload: "x" })}
      >
        x
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "clear" })}
        size="big"
        theme="secondary"
      >
        RESET
      </CalcButton>
      <CalcButton
        onClick={() => dispatchInput({ type: "eval" })}
        size="big"
        theme="accent"
      >
        =
      </CalcButton>
    </div>
  );
}

export default ButtonGrid;
