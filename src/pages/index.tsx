import * as React from "react";
import * as ReactDOM from "react-dom";

const enabled = false;
const text = "Here is the button";
const placeholder = "This is the placeholder";

const array = ["First", "Second", "Third"];

const object = {
  first: 1,
  second: 2,
  third: 3,
};

export default function Home() {
  return (
    <section>
      <h1>Test of mapping collection to elements</h1>
      {array.map((i) => (
        <>
          <button key={i} disabled={enabled}>
            {i}
          </button>
        </>
      ))}

      {Object.keys(object).map((i) => (
        <input key={`${i}3`} placeholder={object[i]}></input>
      ))}
    </section>
  );
}
