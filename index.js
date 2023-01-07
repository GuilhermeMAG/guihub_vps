const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});