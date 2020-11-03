import React, { Component } from "react";
import HeadTitle from "../../pages/common/headtitle";
import { List, InputItem, Button } from "antd-mobile";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smsCode: {
        content: "获取短信验证码",
        disabled: false,
      },
      timer: null,
    };
  }
  getSmsCode() {
    let timer = setInterval(() => {
      if (this.state.smsCode.content === "获取短信验证码") {
        this.setState({
          smsCode: {
            content: 60,
            disabled: true,
          },
        });
      } else {
        if (this.state.smsCode.content === 1) {
          this.setState({
            smsCode: {
              content: "请输入短信验证码",
              disabled: false,
            },
          });
          clearInterval(timer);
        } else {
          this.setState({
            smsCode: {
              content: this.state.smsCode.content - 1,
              disabled: this.state.smsCode.disabled,
            },
          });
        }
      }
    }, 1000);
  }
  render() {
    return (
      <div>
        <HeadTitle content="登录"></HeadTitle>
        <List renderHeader=" ">
          <InputItem type="phone" placeholder="请输入手机号码">
            手机号码
          </InputItem>
          <InputItem type="number" placeholder="请输入短信验证码">
            短信验证码
          </InputItem>
          <InputItem type="password" placeholder="请输入密码">
            密码
          </InputItem>
        </List>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <Button
            type="primary"
            inline
            className="login-button"
            disabled={this.state.smsCode.disabled}
            onClick={() => {
              this.getSmsCode();
            }}
          >
            {this.state.smsCode.content==='获取短信验证码'?'获取短信验证码':`${this.state.smsCode.content}秒后重试`}
          </Button>
          <Button type="primary" inline className="login-button">
            确认
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
