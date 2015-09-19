import React from 'react';
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

export default class Root extends React.Component{
    render(){
        return(
            <div id="root-element">
                <RouteHandler/>
            </div>
        )
    }
}
