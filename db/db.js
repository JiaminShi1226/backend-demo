const { Sequelize } = require("sequelize");
const { name } = require("../package.json");
// name === ttpbackend

const db = new Sequelize(`postgres://postgres:0917@localhost:5432/${name}`, {
  logging: false,
});

module.exports = db;
