require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
})
const express = require('express');
const app = express();
const port = process.env.PORT

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});