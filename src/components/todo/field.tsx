import React from "react";

interface IProps {
  onAdd: (value: string) => void;
}

class TodoField extends React.Component<IProps> {
  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="todo-field" autoComplete="off"/>
        <button>Add</button>
      </form>
    );
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget).get("todo-field");
    if (typeof formData === "string") {
      this.props.onAdd(formData);
    }
    e.currentTarget.reset();
  }
}

export default TodoField;