import * as React from "react";

export default function Home() {
  return (
    <section>
      <WithoutFragments />
      <WithFragments />
    </section>
  );
}

export function WithoutFragments() {
  return (
    <div>
      <h1>Without Fragments</h1>
      <p>
        Here hereh with <code>div</code>
      </p>
    </div>
  );
}

export function WithFragments() {
  return (
    <>
      <h1>Without Fragments</h1>
      <p>
        Here hereh with <code>div</code>
      </p>
    </>
  );
}
