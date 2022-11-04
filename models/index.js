const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false
  },
  foreignKey: "traveller_id"
});
Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false
  },
  foreignKey: "location_id"
});

module.exports = {
  Location,
  Traveller,
  Trip,
};
