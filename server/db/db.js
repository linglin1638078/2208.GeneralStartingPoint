const Sequelize = require("sequelize");

const db = new Sequelize(
    'postgres://localhost/movie_db',
    { logging: false }
);

module.exports = db;