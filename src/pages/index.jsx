import React, { Component } from "react";
import store from "../store";
class index extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
  }
  ha () {
      const action = {
          type: 'change',
          value: '这是沙比'
      }
      store.dispatch(action)
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="输入 一些东西吧" />
        <button onClick={this.ha}>ni</button>
      </div>
    );
  }
}

export default index;
