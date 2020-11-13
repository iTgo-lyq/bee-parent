import React, { Component } from "react";
import "../../assets/headnav.css";
import FindBox from "./components/findbox";
import "./index.css";
class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="head-nav" style={{ fontFamily: "webfont-发现" }}>
          <div>发现</div>
        </div>
        <div className="find-container">
          <FindBox
            content="识图记录"
            background="linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)"
            to="/find/image_recognition"
          />
          <FindBox
            content="语音交互"
            background="linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)"
          />
          <FindBox
            content="个性分析"
            background="linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)"
          />
          <FindBox
            content="学习建议"
            background="linear-gradient( 135deg, #FFE985 10%, #FA742B 100%)"
          />
          <FindBox
            content="位置共享"
            background="linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%)"
          />
          <FindBox
            content="亲子通讯"
            background="linear-gradient( 135deg, #3B2667 10%, #BC78EC 100%)"
          />
          <FindBox
            content="学习资源"
            background="linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)"
          />
        </div>
      </div>
    );
  }
}

export default Find;
