
function Grid(gridSize) {
  if (gridSize == undefined) {
    throw Error('please write numbers')
  }
  if (isNaN(gridSize[0]) || isNaN(gridSize[1])) {
    throw ('please enter two numbers');
  }
  this.gridSize = gridSize;
}


Grid.prototype.getGridDim = function() {
  return {
    width: this.gridSize[0],
    height: this.gridSize[1],
  }
}

module.exports = { Grid };
