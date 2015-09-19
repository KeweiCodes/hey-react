import '../css/main';

import React from "react";
var Router = require('react-router');
var router = require("./router");

router.run((Root) => {
    React.render(<Root />, document.body);
});
