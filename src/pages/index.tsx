import * as React from "react";

export default function Home() {
  return (
    <>
      <Button disabled={true} text="This is the button" />
    </>
  );
}
export interface Props {
  disabled: boolean;
  text: string;
}

export function Button({ disabled, text }: Props) {
  return <button disabled={disabled}> {text}</button>;
} 