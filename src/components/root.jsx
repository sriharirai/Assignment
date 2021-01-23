import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from "./header";
import Home from "./home";

const Root = () => (
    <div>
        <Header/>
        <Router>
            <Switch>
                <Route path={"/"} component={Home}/>
            </Switch>
        </Router>
    </div>
)

export default Root;
