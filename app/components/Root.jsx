import React from 'react';
import ReactDOM from 'react-dom';
var Router = require('react-router');

export default class Root extends React.Component{
    render(){
        return(
            <div id="root-element">
                {this.props.children}
            </div>
        )
    }
}
