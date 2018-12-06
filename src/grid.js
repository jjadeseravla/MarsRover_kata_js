
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


// Grid.prototype.getGridSize = function(xStartPoint, yStartPoint) {
//   if (isNaN(xStartPoint) && isNaN(yStartPoint)) throw ('please enter two numbers');
//   return this.gridSize = [xStartPoint, yStartPoint];
// }

module.exports = { Grid };
