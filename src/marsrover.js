const { Grid } = require('./grid.js')

function MarsRover(locationX, locationY, orientation, grid) {

  var vector = {N: [0, 1], E: [1, 0], S: [0, -1], W: [-1, 0]}
  var compass = ['N', 'E', 'S', 'W']

    if (!Number.isInteger(locationX) || !Number.isInteger(locationY)) {
    throw new Error('position coordinates must be integers');
  }
  if (locationX < 0 || locationY < 0) {
    throw new Error('please enter integers above 0');
  }

  if (locationX > grid.getGridDim().width || locationY > grid.getGridDim().height ) {
    throw new Error('x and y should be less than the grid size')
  }
    this.location = [locationX, locationY];
    this.orientation = orientation;
    this.grid = grid;

  MarsRover.prototype.move = function(step) {
    for (var i = 0; i <step.length; i ++) {
      if (step[i] == 'M') {
        this.location[0] += vector[this.orientation][0]
        this.location[1] += vector[this.orientation][1]
      } else if (step[i] == 'R') {
        this.turnRight(step[i]);
      } else if (step[i] == 'L') {
        this.turnLeft(step[i]);
      } else {
        return 'you must write "M" to move, or "R" or "L"' //write instructions in another class  throw exceptions
      }
    }

  }
  MarsRover.prototype.turnRight = function() {
    this.turn(1)
  }

  MarsRover.prototype.turnLeft = function() {
    this.turn(-1)
  }

  MarsRover.prototype.turn = function(direction) {
    var index = compass.indexOf(this.orientation)+ direction
    if (index === -1)  {
      this.orientation = compass[compass.length -1]
      return;
    }

    if (index === 4) {
      this.orientation = compass[0]
      return;
    }
    this.orientation = compass[index]
  }
}

module.exports = { MarsRover };

//how to do modulus sign to make array into a loop
//how to not give marsrover coordinates so it would fall off grid(at beginning)
