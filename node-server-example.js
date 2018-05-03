const express = require('express');
const path = require('path');

const app = express();

const distDir = path.join(__dirname, 'public'); // const distDir = __dirname + '/public/'; 

app.use(express.static(distDir));



// app.get('*', (req, res) => {
//    // res.sendFile(path.join(distDir, 'index.html'));
//    res.sendFile(__dirname + '/public/index.html')
// })

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
})

// This middleware will run with every incoming request
app.use((req, res, next) => {
    console.log('middleware working')
    req.body = { name: "Ryan"}; // simply modifying the request object with my middleware, thats how authenticate works, thats how muelter works
    next();
})

// This middleware will only run where we want it to, for example below. 
let sayHi = (req, res, next) => {
    req.message = 'Hello there!'
    next();
}

let moreMiddleWare = (req, res, next) => {
    req.message2 = "hi";
    next();
}

app.get('/middleware', sayHi, moreMiddleWare, (req, res) => {
    res.send(req.message);
    console.log(req.message2)
})


app.get('/test', (req, res, next) => {
    console.log(req.body)
    next();
}, (req, res) => {
    res.json('works again')
})