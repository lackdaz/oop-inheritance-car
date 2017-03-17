// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// //// TEST PHASE 1 /////////////////////////////////////////

// Tests
// Must be an instance of Truck
// Must be an instance of Car.
// Must have the following constructor parameters:
// make
// model
// year
// color
// passengers
// Must default to 3 seats.

// test constructor
console.log('Testing Truck Constructor');
var myTruck = new Truck('Toyota', 'Land Cruiser', 2014, 'Yellow', 6, 4);

assert.strictEqual(myTruck instanceof Truck, true, 'Not an instance of Truck');
assert.strictEqual(myTruck instanceof Car, true, 'Not an instance of Car');
assert.strictEqual(myTruck.make, 'Toyota', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'Land Cruiser', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 2014, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Yellow', 'Constructor did not set color.');
assert.strictEqual(myTruck.passengers, 4, 'Constructor did not set passengers.');
assert.strictEqual(myTruck.seats, 6, 'Constructor did not set seats.');
//var myTruck = new Truck('Toyota', 'Land Cruiser', 2014, 'Yellow', null, 4);
//assert.strictEqual(myTruck.seats, 3, 'Constructor did not set default seats');
success();
