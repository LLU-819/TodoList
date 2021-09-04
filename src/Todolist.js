import React, { Component } from "react";
import store from "./store";
import {
  getInputChangeAciton,
  getAddItemAction,
  getDeleteItemAction,
} from "./store/actionCreators";
import TodolistUI from "./TodolistUI";
import "antd/dist/antd.css";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodolistUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }

  handleInputChange(e) {
    const action = getInputChangeAciton(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleDeleteItem(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default Todolist;
