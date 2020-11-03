import React, { Component } from "react";
import "./index.css";
import LoginLine from './LoginLine'
import {Provider} from 'react-redux'
import store from '../../store'
import HeadTitle from '../../pages/common/headtitle'
class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <div>
      <HeadTitle content="我的" />
      <LoginLine />
      </div>
    );
  }
}

export default Mine;
