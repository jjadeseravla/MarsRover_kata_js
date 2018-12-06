const { Grid } = require('./grid.js')

function MarsRover(locationX, locationY, orientation, grid) {

  var obj = {N: [0, 1], E: [1, 0], S: [0, -1], W: [-1, 0]} //better name
  var compass = ['N', 'E', 'S', 'W']

    //self = this;
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
        //console.log('i', i);
        //console.log('this.orientation', this.orientation);
        //console.log('obj', obj[this.orientation]);
        this.location[0] += obj[this.orientation][0]
        this.location[1] += obj[this.orientation][1]
      } else if (step[i] == 'R') {
        this.turnRight(step[i]);
         //this.orientation = 'E'
      } else if (step[i] == 'L') {
        // console.log(this.turnLeft);
        // console.log(this.turnRight);
        // console.log(step[i]);
        this.turnLeft(step[i]);
      } else {
        return 'you must write "M" to move, or "R" or "L"' //write instructions in another class  throw exceptions
      }
    }

  }
  MarsRover.prototype.turnRight = function(direction) {
    this.turn(1)
  }

  MarsRover.prototype.turnLeft = function(direction) {
    this.turn(-1)
  }

  MarsRover.prototype.turn = function(direction) {
    var index = compass.indexOf(this.orientation)+ direction
    if (index === -1)  {
      this.orientation = compass[compass.length -1]
      //console.log('left', this.orientation);
      return;
    }

    if (index === 4) {
      this.orientation = compass[0]
      //console.log('right', this.orientation);
      return;
    }
    //console.log('index', index);
    //console.log('compass', compass[index]);
    this.orientation = compass[index]
  }



  // MarsRover.prototype.turn = function(direction) {
  //   this.orientation = 'E';
  // }
}

//how to do modulus sign to make array into a loop
//sort out one test
//how to not give marsrover coordinates so it would fall off grid(at beginning)

module.exports = { MarsRover };
