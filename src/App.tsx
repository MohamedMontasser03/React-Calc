import { useState } from "react";
import ButtonGrid from "./components/ButtonGrid";
import CalcButton from "./components/CalcButton";
import Header from "./components/Header";

function App() {
  const [calc, setCalc] = useState("");

  return (
    <div className="w-full bg-main">
      <div className=" min-h-screen max-w-lg mx-auto p-5 text-white">
        <Header />
        <div className="bg-main2 my-5 text-5xl h-28 font-semibold overflow-x-auto overflow-y-hidden px-6 py-8 rounded-lg">
          {calc}
        </div>
        <ButtonGrid setState={setCalc} />
      </div>
    </div>
  );
}

export default App;
