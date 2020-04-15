const db = require("../data/dbconfig");

module.exports = {
  find,
  findById,
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}
