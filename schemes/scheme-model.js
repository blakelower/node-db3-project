const db = require("../data/dbconfig");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

function findSteps() {
  return db("schemes");
}

function add(scheme) {
    return db("schemes")
      .insert(scheme, "id")
      .then(([id]) => {
        return findById(id);
      });
  }

  function update(changes, id) {
    return db("schemes")
      .where({ id })
      .update(changes);
  }

  function remove(id) {
    return db("schemes").where("id", id).del();
  }