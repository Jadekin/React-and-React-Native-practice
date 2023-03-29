import React from "react";

// import styles from "./User.scss";

export interface UserProps {
  name: string;
  age: number;
}

export function User(props: UserProps) {
  const [name, setName] = React.useState(props.name);
  const [age, setAge] = React.useState(props.age);

  return (
    <>
      <p>
        This is {name} and I am {age}
      </p>
    </>
  );
}
