import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Layout from "../layout";
import Welcome from "../components/welcome";
import Find from "../components/find";
import Mine from "../components/mine";
import Test from "../components"

function NB() {
  return <div>你个笨蛋，走错了！</div>;
}

class AppRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Layout path="/">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/find" component={Find} />
            <Route path="/mine" component={Mine} />
            <Route path="/test" component={Test} />
            <Route path="*" component={NB} />
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}

export default AppRouter;
