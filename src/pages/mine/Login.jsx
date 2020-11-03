import React, { Component } from "react";
import HeadTitle from "../../pages/common/headtitle";
import { List, InputItem, Button } from "antd-mobile";
import * as commonService from "../../request/action/common";
import * as parentService from '../../request/action/parent'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: { phone: "", password: "", smsCode: "" },
      smsCode: {
        content: "获取短信验证码",
        disabled: false,
        realCode: "",
      },
    };
  }
  // 发送短信验证码
  async sendSmsCode() {
    try {
      console.log(777);
      let res = await commonService.getSmsCode(this.state.userInfo.phone);
      console.log(666);
      this.setState({
        smsCode: {
          content: this.state.smsCode.content,
          disabled: this.state.smsCode.disabled,
          realCode: res.data.smsCode,
        },
      });
      console.log(555);
      setTimeout(() => {
        console.log(this.state);
      }, 1000);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  // 点击发送短信验证码按钮
  getSmsCodeBut() {
    let timer = setInterval(async() => {
      if (this.state.smsCode.content === "获取短信验证码") {
        this.setState({
          smsCode: {
            content: 60,
            disabled: true,
            realCode: this.state.smsCode.realCode,
          },
        });
        // 发送短信验证码
        this.sendSmsCode();
      } else {
        if (this.state.smsCode.content === 1) {
          this.setState({
            smsCode: {
              content: "请输入短信验证码",
              disabled: false,
              realCode: this.state.smsCode.realCode,
            },
          });
          clearInterval(timer);
        } else {
          this.setState({
            smsCode: {
              content: this.state.smsCode.content - 1,
              disabled: this.state.smsCode.disabled,
              realCode: this.state.smsCode.realCode,
            },
          });
        }
      }
    }, 1000);
  }
  // 输入值改变监听
  inputValueChange(value, type) {
    switch (type) {
      case "phone":
        this.setState({
          userInfo: {
            phone: value,
            smsCode: this.state.userInfo.smsCode,
            password: this.state.userInfo.password,
          },
        });
        break;
      case "password":
        this.setState({
          userInfo: {
            phone: this.state.userInfo.phone,
            smsCode: this.state.userInfo.smsCode,
            password: value,
          },
        });
        break;
      case "smsCode":
        this.setState({
          userInfo: {
            phone: this.state.userInfo.phone,
            smsCode: value,
            password: this.state.userInfo.password,
          },
        });
    }
  }
  // 登录确认
  async loginSure() {
    // 校验参数
    // 校验短信验证码
    if (this.state.userInfo.smsCode === this.state.smsCode.realCode) {
        // 发起登录请求
        try {
            const {phone,password} = this.state.userInfo
            let res = await parentService.parentLogin(phone,password)
            if(res.data.status == 200) {
                console.log('chenggongle')
                
            }
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
    // 发起登录请求
  }
  render() {
    return (
      <div>
        <HeadTitle content="登录"></HeadTitle>
        <List renderHeader=" ">
          <InputItem
            type="text"
            placeholder="请输入手机号码"
            value={this.state.userInfo.phone}
            onChange={(value) => {
              this.inputValueChange(value, "phone");
            }}
          >
            手机号码
          </InputItem>
          <InputItem
            type="number"
            placeholder="请输入短信验证码"
            value={this.state.userInfo.smsCode}
            onChange={(value) => {
              this.inputValueChange(value, "smsCode");
            }}
          >
            短信验证码
          </InputItem>
          <InputItem
            type="password"
            placeholder="请输入密码"
            value={this.state.userInfo.password}
            onChange={(value) => {
              this.inputValueChange(value, "password");
            }}
          >
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
              this.getSmsCodeBut();
            }}
          >
            {this.state.smsCode.content}
          </Button>
          <Button
            type="primary"
            inline
            className="login-button"
            onClick={() => {
              this.loginSure();
            }}
          >
            确认
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
