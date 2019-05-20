import React from "react";
import Todo from "../components/todo";

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <Todo/>
      </div>
    );
  }
}

export default App;
