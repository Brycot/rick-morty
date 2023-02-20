const http = require('http');
const characters = require('../utils/data');

const PORT = 3001;

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports =
    /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
    http
        .createServer((req, res) => {
            res.setHeader('Acces-Control-Allow-Origin', '*');
            
            console.log(`Server raised in port ${PORT}`);
            if (req.url.includes('rickandmorty/character')) {
                const id = req.url.split('/').at(-1);

                const characterFilter = characters.find(
                    (char) => char.id === Number(id)
                );

                if (!characterFilter) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Character not found');
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(characterFilter));
            }
        })
        .listen(PORT, 'localhost');
