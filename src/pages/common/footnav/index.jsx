import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import "./index.css";
import Icon from "../icon";
import { withRouter } from "react-router-dom";

class FootNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "Home",
      hidden: false,
    };
    this.pathListen(this.props.location.pathname, true);
  }
  pathListen(path, ifConstructor = false) {
    if (/^\/find/.test(path)) {
      if (this.state.selectedTab != "Find") {
        if (ifConstructor) {
          this.state.selectedTab = "Find";
        } else {
          this.setState({
            selectedTab: "Find",
          });
        }
      }
    } else if (/^\/mine/.test(path)) {
      if (this.state.selectedTab != "Mine") {
        if (ifConstructor) {
          this.state.selectedTab = "Mine";
        } else {
          this.setState({
            selectedTab: "Mine",
          });
        }
      }
    } else {
      if (this.state.selectedTab != "Home") {
        if (ifConstructor) {
          this.state.selectedTab = "Home";
        } else {
          this.setState({
            selectedTab: "Home",
          });
        }
      }
    }
  }
  componentDidUpdate() {
    const path = this.props.location.pathname;
    this.pathListen(path);
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
            selected={this.state.selectedTab === "Home"}
            onPress={() => {
              history.push("/");
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
            }}
          />
        </TabBar>
      </div>
    );
  }
}

export default withRouter(FootNav);
