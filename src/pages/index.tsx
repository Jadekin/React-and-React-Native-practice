import * as React from "react";

export default function Home() {
  const [name, setName] = React.useState("Karen");
  const [age, setAge] = React.useState(35);

  return (
    <>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}></input>
      </div>
      <div>
        <Button disabled={false} text="Change name" />
      </div>

      <p>
        This is {name} and I am {age}{" "}
      </p>
    </>
  );
}
export interface Props {
  disabled: boolean;
  text: string;
  onClick?: React.FunctionComponent<React.MouseEvent<HTMLButtonElement>>;
}

export function Button({ disabled, text, onClick }: Props) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
} 