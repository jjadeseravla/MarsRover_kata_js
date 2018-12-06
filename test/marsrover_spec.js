const chai = require('chai')
const expect = chai.expect
const { Grid } = require('../src/grid.js')
const { MarsRover } = require('../src/marsrover.js')

describe('Mars Rover', function() {

  describe('You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing', function() {
    it('creates marsrover with a set of default values', function() {
      var mr = new MarsRover(8, 8, 'N', new Grid([9, 9]));
      expect(mr.location).to.deep.equal([8, 8]);
      expect(mr.orientation).equal('N');
      //check why expect(mr.grid).to.equal(new Grid([9, 9]));
    });

    it('should throw an error if starting points are not two positive numbers', function() {
      //var mr1 = new MarsRover(-6, 0, 'N', new Grid([9, 9]));
      expect(function(){ new MarsRover(-6, 0, 'N', new Grid([9, 9])) }).to.throw('please enter integers above 0');
      expect(function(){ new MarsRover(2, 'boo', 'N', new Grid([9, 9])) }).to.throw('position coordinates must be integers');
    })

    it('should not allow x and y to be greater than grid size', function() {
      expect(function(){ new MarsRover(10, 10, 'N', new Grid([9, 9])) }).to.throw('x and y should be less than the grid size');
    })
  });

  describe('the marsrover should be able to move', function() {
    it('should be able to move forward one step', function() {
       var mr = new MarsRover(6, 6, 'N', new Grid([9, 9]));
       mr.move('M')
       expect(mr.location).to.deep.equal([6, 7])
       expect(mr.orientation).to.equal('N');
    })

    it('should be able to move right one step', function() {
      var mr = new MarsRover(6, 6, 'E', new Grid([9, 9]));
      mr.move('M')
      expect(mr.location).to.deep.equal([7, 6])
    });

    it('should be able to move down one step', function() {
      var mr = new MarsRover(6, 6, 'S', new Grid([9, 9]));
      mr.move('M')
      expect(mr.location).to.deep.equal([6, 5])
    });

    it('should be able to move left one step', function() {
      var mr = new MarsRover(6, 6, 'W', new Grid([9, 9]));
      mr.move('M')
      expect(mr.location).to.deep.equal([5, 6])
    });
  });

  describe('the state of the marsrover is stored', function() {
    it('should be able to move more than one step', function() {
      var mr = new MarsRover(6, 6, 'N', new Grid([9, 9]));
      mr.move('MM')
      expect(mr.location).to.deep.equal([6, 8])
    })
  })

  describe('should be able to turn direction', function() {
    it('should be able to turn right', function() {
        var mr = new MarsRover(6, 6, 'N', new Grid([9, 9]));
        mr.move('R');
        expect(mr.orientation).to.equal('E')
        expect(mr.location).to.deep.equal([6, 6]);
    });

    it('should be able to turn left', function() {
      var mr = new MarsRover(6, 6, 'W', new Grid([9, 9]));
      mr.move('L');
      expect(mr.orientation).to.equal('S')
      expect(mr.location).to.deep.equal([6, 6]);
    });
  })

  describe('should be able to take on a string of commands', function() {
    // it('should be able to move and turn', function() {
    //   var mr = new MarsRover(6, 6, 'N', new Grid([9, 9]));
    //   mr.move('MRM');
    //   expect(mr.orientation).to.equal('E')
    //   expect(mr.location).to.deep.equal([7, 7]);
    // })

    var grid

    beforeEach(function() {
      grid = new Grid([5, 5])
    })

    it('should be able to turn left and move a step', function() {
      var mr = new MarsRover(1, 2, 'N', grid);
      mr.move('LM')
      expect(mr.orientation).to.equal('W')
      expect(mr.location).to.deep.equal([0, 2]);
    });

    it('should be able to move and turn left', function() {
      var mr = new MarsRover(1, 2, 'N', new Grid([5, 5]));
      //mr.move('LMLMLMLMM');
      mr.move('ML')
      expect(mr.orientation).to.equal('W')
      expect(mr.location).to.deep.equal([1, 3]);
    });

    it('should be able to move and turn right', function() {
      var mr = new MarsRover(1, 2, 'N', new Grid([5, 5]));
      //mr.move('LMLMLMLMM');
      mr.move('MR')
      expect(mr.orientation).to.equal('E')
      expect(mr.location).to.deep.equal([1, 3]);
    });

    it('should be able to turn right and move', function() {
      var mr = new MarsRover(1, 2, 'E', new Grid([5, 5]));
      //mr.move('LMLMLMLMM');
      mr.move('RM')
      expect(mr.orientation).to.equal('S')
      expect(mr.location).to.deep.equal([1, 1]);
    });

    it('should be able to turn right, move and turn left', function() {
      var mr = new MarsRover(1, 2, 'E', new Grid([5, 5]));
      //mr.move('LMLMLMLMM');
      mr.move('RML')
      expect(mr.orientation).to.equal('E')
      expect(mr.location).to.deep.equal([1, 1]);
    });

    it('should be able to turn right, move two steps and turn left', function() {
      var mr = new MarsRover(1, 2, 'E', new Grid([5, 5]));
      //mr.move('LMLMLMLMM');
      mr.move('RMML')
      expect(mr.orientation).to.equal('E')
      expect(mr.location).to.deep.equal([1, 0]);
    });

    it('should be able to turn left and move one step several times', function() {
      var mr = new MarsRover(1, 2, 'N', new Grid([5, 5]));
      //mr.move('LMLMLMLMM');
      mr.move('LMLMLMLMM')
      expect(mr.orientation).to.equal('N')
      expect(mr.location).to.deep.equal([1, 3]);
    });

    it('should be able to turn right', function() {
      var mr = new MarsRover(1, 2, 'W', new Grid([5, 5]));
      //mr.move('LMLMLMLMM');
      mr.move('R')
      expect(mr.orientation).to.equal('N')
      expect(mr.location).to.deep.equal([1, 2]);
    });

    it('should be able to turn right, move two steps and turn left', function() {
      var mr = new MarsRover(1, 2, 'W', new Grid([5, 5]));
      //mr.move('LMLMLMLMM');
      mr.move('RMML')
      expect(mr.orientation).to.equal('W')
      expect(mr.location).to.deep.equal([1, 4]);
    });

    it('should be able to take on a string of commands', function() {
      var mr = new MarsRover(1, 2, 'W', new Grid([5, 5]));
      //mr.move('LMLMLMLMM');
      mr.move('RMMLRRRMMMM')
      expect(mr.orientation).to.equal('S')
      expect(mr.location).to.deep.equal([1, 0]);
    });

    it('should be able to take a very long string of commands', function() {
      var mr = new MarsRover(3, 3, 'E', new Grid([5, 5]));
      mr.move('MMRMMRMRRM')
      expect(mr.orientation).to.equal('E')
      expect(mr.location).to.deep.equal([5, 1]);
    })
  });
});
