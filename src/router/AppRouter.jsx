import React, {Component} from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom'
import Layout from '../layout'
import Home from '../pages/home'

import Haha from '../pages/common/FootNav'

function HH() {
    return (
        <div>你好</div>
    )
}
function NH() {
    return (
        <div>哈哈</div>
    )
}

class AppRouter extends Component {
    render() {
        return (
            // <Home></Home>
            // // <Haha></Haha>
            <HashRouter>
                <Layout path="/">
                    <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/HH" component={HH} />
                        <Route path="/NH" component={NH} />
                    </Switch>
                </Layout>
                {/* <Route path="/" component={Layout}></Route> */}
            </HashRouter>
        )
    }
}

export default AppRouter;
