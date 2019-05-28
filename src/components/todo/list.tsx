import React from "react";
import { ITodo } from "./index";

interface IProps {
  data: ITodo[],
  onToggle: (id: number, checked: boolean) => void;
}

class TodoList extends React.Component<IProps> {
  public render() {
    const list = this.props.data.map((item: ITodo) => {
      return (
        <li key={item.id}>
          <label>
            <input type="checkbox" defaultChecked={item.checked}
              onChange={(e: React.FormEvent<HTMLInputElement>)=>
                this.handleCheck(e, item.id)}
              name="item"
            />
            {item.value}
          </label>
        </li>);
    })
    return (
      <ul>{list}</ul>
    );
  }

  private handleCheck = (e: React.FormEvent<HTMLInputElement>, id: number) => {
    this.props.onToggle(id, e.currentTarget.checked);
  }
}

export default TodoList;