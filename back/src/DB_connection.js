require('dotenv').config();
const { Sequelize } = require('sequelize');
const CharacterModel = require('./models/Character');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/
const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
    { logging: false, native: false }
);

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/
CharacterModel(database);

module.exports = {
    database,
    ...database.models,
};
