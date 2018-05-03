const express = require('express');
const path = require('path');

const app = express();

const distDir = path.join(__dirname, 'public'); // const distDir = __dirname + '/public/'; 

app.use(express.static(distDir));

app.get('*', (req, res) => {
   // res.sendFile(path.join(distDir, 'index.html'));
   res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
})
