import React, { Component } from 'react';
import PropTypes from 'prop-types'
class index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {content} = this.props 
        return (
          <div>
            <div className="head-nav" style={{ fontFamily: `webfont-${content}` }}>
          <div>{content}</div>
        </div>
        <div className="head-nav-instead" style={{ fontFamily: `webfont-${content}` }}>
        </div>
        </div>
        );
    }
}

index.propTypes = {
    content: PropTypes.string
  };

export default index;