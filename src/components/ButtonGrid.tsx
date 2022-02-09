import React from "react";
import CalcButton from "./CalcButton";

function ButtonGrid({ setState }: any) {
  const stateInsert = (val: string) => setState((state: string) => state + val);
  const removeInsert = () =>
    setState((state: string) => state.slice(0, state.length - 1));
  const removeState = () => setState("");
  const evalState = () =>
    setState((state: string) => {
      try {
        return String(eval(state));
      } catch (err: any) {
        return err.message;
      }
    });

  return (
    <div className="grid grid-cols-4 grid-rows-5 p-8 gap-4 bg-main1 rounded-lg">
      <CalcButton onClick={() => stateInsert("7")}>7</CalcButton>
      <CalcButton onClick={() => stateInsert("8")}>8</CalcButton>
      <CalcButton onClick={() => stateInsert("9")}>9</CalcButton>
      <CalcButton
        onClick={removeInsert}
        className="border-b-4  border-[#505e83] text-center bg-[#637198] text-2xl font-bold rounded-lg py-4"
      >
        DEL
      </CalcButton>
      <CalcButton onClick={() => stateInsert("4")}>4</CalcButton>
      <CalcButton onClick={() => stateInsert("5")}>5</CalcButton>
      <CalcButton onClick={() => stateInsert("6")}>6</CalcButton>
      <CalcButton onClick={() => stateInsert("+")}>+</CalcButton>
      <CalcButton onClick={() => stateInsert("1")}>1</CalcButton>
      <CalcButton onClick={() => stateInsert("2")}>2</CalcButton>
      <CalcButton onClick={() => stateInsert("3")}>3</CalcButton>
      <CalcButton onClick={() => stateInsert("-")}>-</CalcButton>
      <CalcButton onClick={() => stateInsert(".")}>.</CalcButton>
      <CalcButton onClick={() => stateInsert("0")}>0</CalcButton>
      <CalcButton onClick={() => stateInsert("/")}>/</CalcButton>
      <CalcButton onClick={() => stateInsert("x")}>x</CalcButton>
      <CalcButton
        onClick={removeState}
        className="col-span-2 border-b-4  border-[#505e83] text-center bg-[#637198] text-2xl font-bold rounded-lg py-4"
      >
        RESET
      </CalcButton>
      <CalcButton
        onClick={evalState}
        className="col-span-2 bg-red-600 border-b-4  border-red-700 text-center text-2xl font-bold rounded-lg"
      >
        =
      </CalcButton>
    </div>
  );
}

export default ButtonGrid;
