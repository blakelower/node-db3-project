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

function findSteps(userId){
    return db("steps")
    .join("schemes" , "schemes.id", "steps.scheme_id")
    .where("schemes.id", userId)
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions ")
}

function add(scheme) {
    return db("schemes")
      .insert(scheme, "id")
      .then(([id]) => {
        return findById(id);
      });
  }

  function update(changes, userId){
    return db("schemes")
    .update(changes)
    .where({id : userId});
    }

  function remove(id) {
    return db("schemes").where("id", id).del();
  }