const chai = require('chai')
const expect = chai.expect
const { Grid } = require('../src/grid.js')
const { MarsRover } = require('../src/marsrover.js')
const { Controller } = require('../src/controller.js')

describe('Controller', function() {
  it.only('should get the state of the current marsrover', function() {
    var controller = new Controller(new MarsRover(8, 8, 'N', new Grid([9, 9])));
    expect(controller.getMarsRoverState().orientation).to.equal('N');
      expect(controller.getMarsRoverState().location).to.equal([8, 8]);
  })
})
