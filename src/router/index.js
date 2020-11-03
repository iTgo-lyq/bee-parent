import Layout from "../layout";
import Welcome from "../pages/welcome";
import Find from "../pages/find";
import Mine from "../pages/mine";
import Test from "../pages"
import Login from "../pages/mine/Login";
import { HashRouter } from 'react-router-dom'

import React from 'react'
const App = () => {
    return (<div>hah</div>)
}
const routeConfig = [
    {
        path: '/',
        component: App,
        // indexRoute: { component: Welcome },
        // childRoutes: [
        //     { path: '/find', component: Find },
        //     {
        //         path: '/mine',
        //         component: Mine,
        //         childRoutes: [
        //             { path: '/login', component: Login }
        //         ]
        //     }
        // ]
    }
]

export default <HashRouter  routes={routeConfig} />