const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;
console.log(123, 'prueba')
app.use(express.static('public'))

app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
