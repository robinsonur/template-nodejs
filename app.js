const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = process.env.PORT ?? 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {

    res.redirect('/')

});

wss.on('connection', ws => {

    ws.on('message', message => {

        console.log(`Recibido: ${message}`)

    });

    ws.send('Hola')

});

app.listen(port, () => {

    console.log(`App listening on port ${port}`)

})
