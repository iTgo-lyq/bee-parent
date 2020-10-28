import React, { Component } from 'react';
import '../../App.css'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
        <div className="title-line">
          欢迎您！
        </div>
        <div className="detail-line">我们等您很久了</div>
        <div className="detail-line">开始使用前，请先添加宝贝的设备和信息</div>
        <div className="add-window">
          <svg className="icon homeAddIcon" aria-hidden="true">
            <use xlinkHref="#icon-tianjia"></use>
          </svg>

        </div>
        </div>
      </div>
    )
  }
}

export default Home;
