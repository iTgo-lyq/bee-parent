import React, { Component } from "react";
import "../../App.css";
import "./index.css";
import "../../assets/headnav.css";
import Icon from "../common/icon";

class Welcome extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="welcome">
        <div className="head-nav">
          <div style={{ fontFamily: "webfont-bee", fontSize: "6vh" }}>Bee</div>
        </div>
        <div className="container">
          <div className="title-line">欢迎您！</div>
          <div className="detail-line">我们等您很久了</div>
          <div className="detail-line">
            开始使用前，请先添加宝贝的设备和信息
          </div>
          <div className="add-window">
            <Icon size="30vw" icon="icon-tianjia"></Icon>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
