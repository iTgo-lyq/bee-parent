import React, { Component } from "react";
import FootNav from "../pages/common/footnav";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.children}
        <div style={{
          width:'100%',
          height:'50px'
        }}></div>
        <FootNav />
      </div>
    );
  }
}

export default Layout;
