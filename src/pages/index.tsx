import * as React from "react";

export default function ShowButton() {
  return <Button disabled={false} text="This is the button" />;
}

export function Button({ disabled, text }) {
  return <button disabled={disabled}> {text}</button>;
}