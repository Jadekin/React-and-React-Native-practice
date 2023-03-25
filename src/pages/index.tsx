import * as React from "react";

class MyComponent extends React.Component {
  state = {
    heading: "React Awesomesouce {Busy}",
    content: "Loading...",
  };

  constructor() {
    super();

    setTimeout(() => {
      this.setState({
        heading: "React Awesomesouce",
        content: "Done! :)",
      });
    }, 3000);
  }

  render() {
    const { heading, content } = this.state;
    return (
      <main>
        <h1>Creating component state</h1>
        <h2>{heading}</h2>
        <p>{content}</p>
      </main>
    );
  }
}

export default MyComponent;