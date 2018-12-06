'use strict'

// import Grid from '../grid'

const chai = require('chai')
const expect = chai.expect
const { Grid } = require('../src/grid.js')
//const { MarsRover } = require('../src/marsrover.js')

  describe('grid', function() {
 //  var grid;
 //
 //  beforeEach(function() {
 //    grid = new Grid([5, 6]);
 //  })

  describe('it sets the coordinates of the plateau grid', function () {

    it('should throw an error if no coords are provided to grid', function () {
      expect(function() { new Grid() }).to.throw('please write numbers');
    });

    it('should set the coordinates for X and Y', function () {
      //var grid = new grid([5,5])
      //var grid = new grid();
      //grid = new Grid();
      var grid = new Grid([5, 6]);
      grid.getGridDim()
      expect(grid.gridSize).to.deep.equal([5, 6]);
    });


    it('should throw an error if there are not 2 coordinates that are numbers', function () {
      //expect(function(){ grid.getGridSize(['boo', 9]) }).to.throw('please enter two numbers');
       expect(function() { new Grid([5, 'boo']) }).to.throw('please enter two numbers');
    });

  });
});
