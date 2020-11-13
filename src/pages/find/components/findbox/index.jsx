import React, { Component } from "react";
import "../../../../assets/font.css";
import { Link } from 'react-router-dom'

class FindBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { content, background,to } = this.props;
    return (
      <Link to={to}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            background: background,
            width: "85%",
            height: "10vh",
            margin: "2.1vh auto",
            borderRadius: "10px",
            opacity: "0.9",
            lineHeight: "10vh",
            fontSize: "3.5vh",
            color: "white",
            fontFamily: `webfont-${content}`,
          }}
        >
          {content}
        </div>
      </div>
      </Link>
    );
  }
}

export default FindBox;
