const express = require("express");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

//Tell express to use the webpack-dev-middleware and use hte webpack.config.js 
//configuration file as a base.
app.use(
    webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
)

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});