import React, { Component } from "react";
import "./index.css";
class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="head-nav" style={{ fontFamily: "webfont-我的" }}>
          <div>我的</div>
        </div>
        <div className="mine-container">
          <div className="mine-userinfo-line">
            <div className="mine-userinfo-head">
              <img
                className="mine-head-img"
                src="https://stone-1258976754.cos.ap-shanghai.myqcloud.com/lxy.jpg"
                alt=""
              />
            </div>
            <div className="mine-userinfo-name">
              <div className="mine-name-text">小娅勤小娅</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mine;
