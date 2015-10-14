import React from "react";
import {Route, IndexRoute} from "react-router";

import Root from "./components/Root";
import MemberList from "./components/MemberList";

var routes = (
    <Route component={Root} path="/">
        <IndexRoute component={MemberList} />
    </Route>
);

export default routes;
