import * as React from "react";

class MyComponent extends React.Component {
  state = {
    first: "loading...",
    second: "loading...",
    third: "loading...",
    fourth: "loading...",
    doneMessage: "Doneeee!!",
  };

  constructor() {
    super();

    setTimeout(() => {
      this.setState({
        first: "Done! :)",
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        second: "Done! :)",
      });
    }, 2000);

    setTimeout(() => {
      this.setState({
        ...this.state,
        third: "Done! :)",
      });
    }, 3000);

    setTimeout(() => {
      this.setState({
        fourth: this.state.doneMessage,
      });
    }, 4000);
  }

  render() {
    return (
      <main>
        <ul>
          {Object.keys(this.state)
            .filter((key) => key !== "doneMessage")
            .map((key) => (
              <li key={key}>
                <strong>{key}</strong>: {this.state[key]}
              </li>
            ))}
        </ul>
      </main>
    );
  }
}

export default MyComponent;