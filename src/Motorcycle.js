var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats = 3, passengers) {
  Car.call(this, make, model, year, color, seats, passengers);
}

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function() {
  if (this.running) {
    console.log("Doing a sick wheelie!!")
    return true;
  }
  return false;
};

// for export to node. Don't touch this!
module.exports = Motorcycle;
