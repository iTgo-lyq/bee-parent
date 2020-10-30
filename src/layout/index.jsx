import React, { Component } from "react";
import FootNav from "../components/common/footnav";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }
  render() {
    return (
      <div>
        {this.props.children}
        <FootNav />
      </div>
    );
  }
}

export default Layout;
