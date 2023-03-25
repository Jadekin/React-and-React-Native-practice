import * as React from "react";

class MyComponent extends React.Component {
  state = {
    first: false,
    second: true,
  };

  render() {
    const { first, second } = this.state;

    return (
      <div>
        <h1>Setting components</h1>
        <button disabled={first}>First</button>
        <button disabled={second}>First</button>
      </div>
    );
  }
}

export default MyComponent;