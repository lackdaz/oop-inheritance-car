// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// //// TEST PHASE 3 /////////////////////////////////////////

// ###Part 2 -- Motorcycles
//
// Create a new constructor called Motorcycle that inherits your Car constructor.
//
// // This should be done in the file called Motorcycle.js, which requires
// Car.js for you to use. Additionally your motorcycleTest.js will need to
// require Motorcycle.js (already done for you).

// Must be an instance of a Motorcycle
// Must be an instance of a Car
// Must have the following parameters
// make
// model
// year
// color
// passengers
// Must default to 2 seats
// Must be able to do a wheelie by calling wheelie(), but only if running.
// If the wheelie is successful, return true and console.log the following:
//"Doing a sick wheelie!!". Otherwise return false.
// This function should be attached to Motorcycle.prototype.

console.log('Testing Motorcycle  Constructor');
var myRide = new Motorcycle('Ducati', 'Streetfighter', 2015, 'Black', 1, 2);
assert.strictEqual(myRide instanceof Motorcycle, true, 'Not an instance of Motorcycle');
assert.strictEqual(myRide instanceof Car, true, 'Not an instance of Car');
assert.strictEqual(myRide.make, 'Ducati', 'Constructor did not set make.');
assert.strictEqual(myRide.model, 'Streetfighter', 'Constructor did not set model.');
assert.strictEqual(myRide.year, 2015, 'Constructor did not set year.');
assert.strictEqual(myRide.color, 'Black', 'Constructor did not set color.');
assert.strictEqual(myRide.passengers, 2, 'Constructor did not set seats.');
assert.strictEqual(myRide.seats, 1, 'Constructor did not set passengers.');
//var myRide = new Motorcycle('Ducati', 'Streetfighter', 2015, 'Black', undefined, 4);
//assert.strictEqual(myRide.seats, 2, 'Constructor did not set default seats');
success();

// //// TEST PHASE 4 /////////////////////////////////////////
console.log('Testing Motorcycle  Methods');
assert.equal(typeof(myRide.wheelie), 'function', 'There is no wheelie() function');
myRide.wheelie();
assert.strictEqual(typeof(myRide.wheelie()), 'boolean', 'wheelie function did not return a boolean value');
assert.strictEqual(myRide.running, true, 'Failed to start motorcycle. Running should be = true');
assert.strictEqual(myRide.wheelie, true, 'Return value failed');
assert.strictEqual(myRide.wheelie instanceof Motorcycle.prototype, true, 'Not an instance of Car');
