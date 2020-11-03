import React, { Component } from "react";
import { Route, HashRouter, Switch, BrowserRouter as Router } from "react-router-dom";
import { IndexRoute } from 'react-router'
import Layout from "../layout";
import Welcome from "../pages/welcome";
import Find from "../pages/find";
import Mine from "../pages/mine";
import Test from "../pages"
import Login from "../pages/mine/Login";
import { Provider } from "react-redux";
import store from '../store'

function NB() {
  return <div>你个笨蛋，走错了！</div>;
}

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/find" component={Find} />
            <Route>
              <Route exact path="/mine" component={Mine} />
              <Route path="/mine/login" component={Login} />
            </Route>
            <Route path="/test" component={Test} />
            <Route path="*" component={NB} />
          </Switch>
        </Layout>
      </Router>
      </Provider>
    );
  }
}

export default AppRouter;
