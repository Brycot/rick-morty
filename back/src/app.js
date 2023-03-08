const express = require('express');
const cors = require('cors');
const router = require('./routes/index.js');
const { database } = require('./DB_connection.js');
const { saveApiData } = require('./controllers/saveApiData.js');

const app = express();
const PORT = 3001;

const corsOptions = {
    origin: '*',
    credentials: true, // access-control-allow-credentials: true
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/', router);

database
    .sync({ force: true })
    .then(() => {
        app.listen(PORT, () => {
            saveApiData();
            console.log('Server raised in port ' + PORT);
        });
    })
    .catch((err) => console.log(err.message));
