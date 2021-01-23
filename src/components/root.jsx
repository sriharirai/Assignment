import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from "./header";
import Home from "./home";
import Posts from "./posts/posts-container";
import Post from "./post/post-container";

const Root = () => (
    <div>
        <Header/>
        <Router>
            <Switch>
                <Route path={"/users/:id/posts"} component={Posts}/>
                <Route path={"/posts/:id"} component={Post}/>
                <Route path={"/"} component={Home}/>
            </Switch>
        </Router>
    </div>
)

export default Root;
