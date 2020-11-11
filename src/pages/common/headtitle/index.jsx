import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../icon";
import Back from '../../common/back'
class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { content, back } = this.props;
    // let backButton
    // if(back!=undefined || back!= null) {
    //   backButton = {Back}
    // } else {
    //   backButton = null
    // }
    console.log(back)
    return (
      <div>
        <div
          className="head-nav"
          style={{ fontFamily: `webfont-${content}`, position: "relative" }}
        >
          {back != undefined || back != null ? <Back path={back} /> : null}
          <div>{content}</div>
        </div>
        {/* <div
          className="head-nav-instead"
          style={{ fontFamily: `webfont-${content}` }}
        ></div> */}
      </div>
    );
  }
}

index.propTypes = {
  content: PropTypes.string,
};

export default index;
