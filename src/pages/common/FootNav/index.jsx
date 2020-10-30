import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import "./index.css";

class FootNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "Home",
      hidden: false,
    };
  }
  renderContent() {
    console.log(123);
  }
  render() {
    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#ffa62b"
          barTintColor="white"
          tabBarPosition="bottom"
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            icon={
              <svg className="icon icon-home" aria-hidden="true">
                <use xlinkHref="#icon-shouye"></use>
              </svg>
            }
            selectedIcon={
              <svg className="icon icon-home-select" aria-hidden="true">
                <use xlinkHref="#icon-shouye-selected"></use>
              </svg>
            }
            title="首页"
            key="Home"
            selected={this.state.selectedTab === "Home"}
            onPress={() => {
              this.setState({
                selectedTab: "Home",
              });
            }}
          />
          <TabBar.Item
            icon={
              <svg className="icon icon-find" aria-hidden="true">
                <use xlinkHref="#icon-faxian"></use>
              </svg>
            }
            selectedIcon={
              <svg className="icon icon-find-select" aria-hidden="true">
                <use xlinkHref="#icon-faxian-selected"></use>
              </svg>
            }
            title="发现"
            key="Find"
            selected={this.state.selectedTab === "Find"}
            onPress={() => {
              this.setState({
                selectedTab: "Find",
              });
            }}
          />
          <TabBar.Item
            icon={
              <svg className="icon icon-mine" aria-hidden="true">
                <use xlinkHref="#icon-wode"></use>
              </svg>
            }
            selectedIcon={
              <svg className="icon icon-mine-select" aria-hidden="true">
                <use xlinkHref="#icon-wode-selected"></use>
              </svg>
            }
            title="我的"
            key="Mine"
            selected={this.state.selectedTab === "Mine"}
            onPress={() => {
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

export default FootNav;
