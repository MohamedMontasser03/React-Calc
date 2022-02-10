import React from "react";

type CalcButtonProps = {
  size?: "normal" | "big";
  theme?: "primary" | "secondary" | "accent";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLElement>,
  HTMLButtonElement
>;

function CalcButton(props: CalcButtonProps) {
  const theme = {
    primary:
      "bg-button-primary text-button-text text-3xl border-button-primary-border",
    secondary:
      "bg-button-secondary text-accent-text text-2xl border-button-secondary-border",
    accent:
      "bg-button-accent text-accent-text text-2xl border-button-accent-border",
  };

  return (
    <button
      className={`border-b-4 text-center  font-bold rounded-lg py-4 ${
        props.size === "big" ? "col-span-2" : ""
      } ${theme[props.theme || "primary"]}`}
      {...props}
    ></button>
  );
}

export default CalcButton;
