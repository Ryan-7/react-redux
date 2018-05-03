const express = require('express');
const path = require('path');

const app = express();

const distDir = path.join(__dirname, 'public'); // const distDir = __dirname + '/public/'; 

app.use(express.static(distDir));

app.get('*', (req, res) => {
   // res.sendFile(path.join(distDir, 'index.html'));
   res.sendFile(__dirname + '/public/index.html')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port 3000`);
})
