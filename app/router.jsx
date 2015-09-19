import React from "react";
import Router from "react-router";
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

import Root from "./components/Root";
import MemberList from "./components/MemberList";

var routes = (
    <Route name="root" handler={Root} path="/">
        <DefaultRoute name="list" handler={MemberList} />
    </Route>
);

var router = Router.create({
  routes: routes
});

export default router;
