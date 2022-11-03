const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

Traveller.belongsToMany(Location, { through: Trip, uniqueKey: false });
Location.belongsToMany(Traveller, { through: Trip, uniqueKey: false });

module.exports = {
  Location,
  Traveller,
  Trip,
};
