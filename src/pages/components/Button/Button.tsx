import React, { MouseEventHandler } from "react";
// import styles from "./Button.scss";

export interface ButtonProps {
  disabled: boolean;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export function Button({ disabled, text, onClick }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
