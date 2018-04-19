// Need an entry point and an output for the final bundle file


const path = require('path'); // Require the Node module 'path' so we can use it to join our paths for the output path. 

console.log(__dirname); // This variable is the path to the current location, in this case, the indecision-app project folder. 
console.log(path.join(__dirname, 'public'))

// Expose something to another file (like a function), it's a node thing. 
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {   use: ['style-loader', 'css-loader', 'sass-loader'],
            test: /\.s?css$/
        }]
    },

    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }

};

// ^^ loader lets you customize a file when it's load, so in this case let's run it through babel 
// devtool allows us to track down errors more easily 
// devServer contentBase will serve static files. Tell it where to serve it from, in this case, our public directory.
// when we run devserver, it will watch for changes and run webpack automatically 

// css loader allows webpack to load in our css assets, converts CSS to JS
// style-loader injects the JS CSS into the DOM

// use 'loader' for a single loader, otherwise, use 'use' for an array of loaders

// '?' makes the 's' optional. So now we can compile scss and css.

// To prevent the browser from trying to hit the server for different routes, 
// we need to use the historyApiFallback which tells the dev-server we're handling routing
// via clientside and to return index.html for all pages. 
