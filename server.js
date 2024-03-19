const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Todo bien pelado');
});

server.listen(process.env.PORT || 3000, () => {
    console.log('se ejecuto en el puerto 300');
});

/*
const http = require('http');

const server = http.createServer((req, res) => {
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hola panchito, lo hiciste bien');
});

server.listen(process.env.PORT || 3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
});*/

