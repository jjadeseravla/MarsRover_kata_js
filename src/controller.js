const { Grid } = require('./grid.js')
const { MarsRover } = require('./marsrover.js')

function Controller(marsrover) {
  this.activeMarsRover = true;
  this.rovers = 0;
  this.marsrover = marsrover;
}

Controller.prototype.getMarsRoverState = function() {
  return {
    location: marsrover.location,
    orientation: marsrover.orientation
  }
  console.log('i want N', marsrover.orientation);
}

module.exports = { Controller }
