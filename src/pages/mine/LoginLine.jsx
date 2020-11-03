import React, { Component } from "react";
import Icon from "../../pages/common/icon";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class LoginLine extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props.input);
  }

  render() {
    const {history} = this.props;
    return (
      <div className="mine-userinfo-line" onClick={()=>history.push('/mine/login')}>
        <div className="mine-userinfo-head">
          <Icon
            className="mine-head-img"
            size="70%"
            icon="icon-morentouxiang"
          />
        </div>
        <div className="mine-userinfo-name">
          <div className="mine-name-text">登录 / 注册</div>
        </div>
      </div>
    );
  }
}
const stateToProps = (state) => {
  return {
    input: state.inputValue,
  };
};
const dispatchToProps = (dispatch) => {
  return {
    toLogin() {
      let action = {
          type: 'toLogin'
      };
      dispatch(action);
    },
  };
};

export default withRouter(connect(stateToProps, dispatchToProps)(LoginLine));
