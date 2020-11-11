import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Icon from '../icon'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      const {path} = this.props
      console.log(path)
    return (
      <div
        style={{
          position: "absolute",
          left: "0.2rem",
          marginTop: "auto",
          marginBottom: "auto",
          top: "0",
          bottom: "0",
        }}

      >
          <Link to={path}>
        <Icon icon="icon-fanhui" size="1.6rem" />
        </Link>
      </div>
    );
  }
}

export default index;
