const Sequelize = require("sequelize");
const databaseName = "authorize-backend";

console.log("Opening database connection");
const PORT = process.env.PORT || 5432; /* NEW ADDITION */


const db = new Sequelize(`postgres://localhost:${PORT}/${databaseName}`, { logging: false });

module.exports = db;