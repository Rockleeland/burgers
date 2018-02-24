var orm = require("../config/orm.js");

const burger = {
    // Find all the pets ordering by the lowest price to the highest price.
    all: function (callback) {
        orm.selectAll("burgers", callback);
    },
    // Find a pet in the pets table by an animal_name of Rachel.
    create: function (burgertext, callback) {
        orm.insertOne("burgers", "burger_name", burgertext, callback);
    },
    // Find the buyer with the most pets.
    update: function (id, callback) {
        orm.updateOne("burgers", "devoured", 1, id, callback);
    }
}

module.exports = burger;