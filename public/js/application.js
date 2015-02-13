var board;

function Cell(x, y) {
  this.x = x;
  this.y = y;
}

function Board() {
  // Set size of board
  this.size = 4;

  // Populated board with empty cells
  this.cells = []
  for(var i = 0; i < this.size; i++) {
    this.cells[i] = []
    for(var j = 0; j < this.size; j++) {
      this.cells[i][j] = 0;
    }
  }
}

Board.prototype.placeNewNumber = function() {
  // Gather all locations of empty cells
}

Board.prototype.up = function() {

}

Board.prototype.down = function() {

}



$(document).ready(function() {
  console.log('creating le board');
  board = new Board();
});
