import * as React from "react";
import * as ReactDOM from "react-dom";

const enabled = false;
const text = "Here is the button";
const placeholder = "This is the placeholder";

export default function Home() {
  return (
    <section>
      <button disabled={enabled}>{text}</button>
      <input placeholder={placeholder}></input>
    </section>
  );
}
