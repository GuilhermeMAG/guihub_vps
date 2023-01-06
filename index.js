const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(80, () => {
    console.log(`Servidor rodando! http://localhost:${80}`)
});