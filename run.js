var prompt = require('prompt')
var classes = require('./elevator.js')

var promptAttrs = [
    {
        name: 'elevators',
        validator: /\d+/,
        warning: 'must be number'
    },
    {
        name: 'floors'
    }
]
prompt.start()


console.log('How many elevators?')
prompt.get(promptAttrs, function (err, result) {
        // Get user input from result object.
        var elevators = result.username;
});
console.log('How many floors?')
prompt.get(promptAttrs, function (err, result) {
        // Get user input from result object.
        var floors = result.username;
});


var simulation = new classes.Simulation(elevators, floors)

console.log(simulation.getState())
