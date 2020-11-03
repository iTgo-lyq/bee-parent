import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import "./index.css";
import Icon from "../icon";
import { withRouter } from "react-router-dom";

class FootNav extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.history)
    // switch (this.props.history.location.pathname) {
    //   case '/mine'
    // }
    this.state = {
      selectedTab: "Welcome",
      hidden: false,
    };
  }
  renderContent() {
    console.log(123);
  }
  render() {
    const { history } = this.props;
    return (
      <div style={{ position: "fixed", width: "100%", bottom: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#ffa62b"
          barTintColor="white"
          tabBarPosition="bottom"
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            icon={<Icon icon="icon-shouye"></Icon>}
            selectedIcon={<Icon icon="icon-shouye-selected"></Icon>}
            title="首页"
            key="Home"
            selected={this.state.selectedTab === "Welcome"}
            onPress={() => {
              history.push("/");
              this.setState({
                selectedTab: "Welcome",
              });
            }}
          />
          <TabBar.Item
            icon={<Icon icon="icon-faxian"></Icon>}
            selectedIcon={<Icon icon="icon-faxian-selected"></Icon>}
            title="发现"
            key="Find"
            selected={this.state.selectedTab === "Find"}
            onPress={() => {
              history.push("/find");
              this.setState({
                selectedTab: "Find",
              });
            }}
          />
          <TabBar.Item
            icon={<Icon icon="icon-wode"></Icon>}
            selectedIcon={<Icon icon="icon-wode-selected"></Icon>}
            title="我的"
            key="Mine"
            selected={this.state.selectedTab === "Mine"}
            onPress={() => {
              history.push("/mine");
              this.setState({
                selectedTab: "Mine",
              });
            }}
          />
        </TabBar>
      </div>
    );
  }
}

export default withRouter(FootNav);
