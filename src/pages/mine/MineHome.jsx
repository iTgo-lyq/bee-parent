import React, { Component } from 'react';
import HeadTitle from '../../pages/common/headtitle'
class MineHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
<HeadTitle content="我的"/>
            <div className="mine-container">
          <LoginLine></LoginLine>
        </div>
        </div>

        );
    }
}

export default MineHome;