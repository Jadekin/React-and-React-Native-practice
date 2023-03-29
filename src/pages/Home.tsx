import * as React from "react";
import { Button, User } from "./components";
import { Promise } from "bluebird";

Promise.config({ cancellation: true });

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Daniel", age: 35 });
    }, 2000);
  });
}

export default function Home() {
  const [showUser, setShowUser] = React.useState(false);

  React.useEffect(() => {
    const promise = fetchUser().then((user) => {
      // setId(user.id);
      // setAge(user.age);
      // setName(user.name);
    });

    return () => {
      promise.cancel();
    };
  });

  // const showingUser = showUser ? <button>Hola</button> : null;
  const showingUser = showUser ? <User name={"Karen"} age={35} /> : null;

  return (
    <>
      <div>{showingUser}</div>
      <div>
        <Button
          disabled={false}
          onClick={() => setShowUser(!showUser)}
          text="Change name"
        />
      </div>
    </>
  );
}
