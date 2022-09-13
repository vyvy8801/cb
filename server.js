require('dotenv').config();
const app = require('./src/app/');

//start server
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${port}.`);
});

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))