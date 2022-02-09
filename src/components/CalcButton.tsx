import React from "react";

// React.DetailedHTMLProps<
//     React.ButtonHTMLAttributes<HTMLElement>,
//     HTMLButtonElement
//   >

function CalcButton(props: any) {
  return (
    <button
      className="border-b-4  border-[#938d8d] text-center bg-main3 text-main1 text-3xl font-bold rounded-lg py-4"
      {...props}
    ></button>
  );
}

export default CalcButton;
