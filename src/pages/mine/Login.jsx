import React, { Component } from "react";
import HeadTitle from "../../pages/common/headtitle";
import { List, InputItem, Button } from "antd-mobile";
import * as commonService from "../../request/action/common";
import * as parentService from "../../request/action/parent";
import * as actions from "../../store/actionCreators";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    loginForm: { phone: "", password: "", smsCode: "" },
    smsCode: {
      content: "获取短信验证码",
      disabled: false,
      realCode: "",
    },
  };

  // 发送短信验证码
  async sendSmsCode() {
    try {
      let res = await commonService.getSmsCode(this.state.loginForm.phone);
      console.log(res);
      this.setState({
        smsCode: {
          ...this.state.smsCode,
          realCode: res.data.smsCode,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  // 点击发送短信验证码按钮
  getSmsCodeBut() {
    if (this.state.smsCode.content != "获取短信验证码") return;

    this.setState({
      smsCode: {
        content: 60,
        disabled: true,
        realCode: "",
      },
    });
    this.sendSmsCode();

    let timer = setInterval(() => {
      this.setState({
        smsCode: {
          ...this.state.smsCode,
          content: this.state.smsCode.content - 1,
        },
      });

      if (this.state.smsCode.content == 1) {
        this.setState({
          smsCode: {
            content: "获取短信验证码",
            disabled: false,
            realCode: this.state.smsCode.real,
          },
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  // 输入值改变监听
  inputValueChange(value, type) {
    const loginForm = this.state.loginForm;
    switch (type) {
      case "phone":
        this.setState({
          loginForm: {
            ...loginForm,
            phone: value,
          },
        });
        break;
      case "password":
        this.setState({
          loginForm: {
            ...loginForm,
            password: value,
          },
        });
        break;
      case "smsCode":
        this.setState({
          loginForm: {
            ...loginForm,
            smsCode: value,
          },
        });
    }
  }

  // 登录确认
  async loginSure() {
    // 校验参数
    // 校验短信验证码
    if (this.state.loginForm.smsCode === this.state.smsCode.realCode) {
      // 发起登录请求
      try {
        const { phone, password } = this.state.loginForm;
        let res = await parentService.parentLogin(phone, password);
        if (res.status == 200) {
          console.log("登录成功");
          // token 存储到 localstorage
          localStorage.setItem("token", res.data.userInfo.token);
          // 用户信息 存储到 store
          this.props.storeUserInfo(res.data.userInfo);
          this.props.history.push("/");
        }
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("验证码错误");
    }
  }

  render() {
    return (
      <div>
        <HeadTitle content="登录"></HeadTitle>
        <List renderHeader=" ">
          <InputItem
            type="text"
            placeholder="请输入手机号码"
            value={this.state.loginForm.phone}
            onChange={(value) => {
              this.inputValueChange(value, "phone");
            }}
          >
            手机号码
          </InputItem>
          <InputItem
            type="number"
            placeholder="请输入短信验证码"
            value={this.state.loginForm.smsCode}
            onChange={(value) => {
              this.inputValueChange(value, "smsCode");
            }}
          >
            短信验证码
          </InputItem>
          <InputItem
            type="password"
            placeholder="请输入密码"
            value={this.state.loginForm.password}
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

  componentWillUnmount = () => {
    this.setState = (state, callback) => {
      return;
    };
  };
}

export default connect(
  actions.userStateToProps,
  actions.userDispatchToProps
)(Login);
