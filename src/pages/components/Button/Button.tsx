import React from "react";
// import styles from "./Button.scss";

export interface ButtonProps {
  disabled: boolean;
  text: string;
  onClick?: React.FunctionComponent<React.MouseEvent<HTMLButtonElement>>;
}

export default function Button({ disabled, text, onClick }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
