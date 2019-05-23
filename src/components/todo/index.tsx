import React from "react";
import TodoField from "./field";
import TodoList from "./list";
import { observable, decorate, action } from "mobx";

export interface ITodo {
  id: number;
  value: string;
  checked: boolean;
}

interface IState {
  data: ITodo[],
}

class Todo extends React.Component<{}, IState> {
  public state: IState = {
    data: [],
  };

  public render() {
    const {data} = this.state; 
    return (
      <div className="todo">
        <TodoField onAdd={this.handleAddItem} />
        <TodoList data={data} onToggle={this.handleToggle}/>
      </div>
    );
  }

  private handleAddItem = (value: string) => {
    const data = [...this.state.data];
    const length = data.length;
    const lastItem = data[length - 1];
    
    data.push({
      id: lastItem && lastItem.id  > 0 ? lastItem.id + 1 : 1,
      value,
      checked: false,
    });
   
    this.setState({data});
  }

  private handleToggle = (id: number, checked: boolean) => {
    const {data} = this.state;
    const item = data.find(item => item.id === id);
    if (item) {
      item.checked = checked;
      this.setState({data: Object.assign(data, item)});
    }
  }
}

export default Todo;