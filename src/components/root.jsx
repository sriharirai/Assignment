import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from "./header";
import Home from "./home";
import Posts from "./posts/posts-container";

const Root = () => (
    <div>
        <Header/>
        <Router>
            <Switch>
                <Route path={"/users/:id/posts"} component={Posts}/>
                <Route path={"/"} component={Home}/>
            </Switch>
        </Router>
    </div>
)

export default Root;
