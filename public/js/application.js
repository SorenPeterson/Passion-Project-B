var board;

function Cell(x, y, value) {
  this.x = x;
  this.y = y;
  this.value = value;
}

function Board() {
  // Set size of board
  this.size = 4;

  // Populated board with empty cells
  this.cells = []
  for(var y = 0; y < this.size; y++) {
    this.cells[y] = []
    for(var x = 0; x < this.size; x++) {
      this.cells[y][x] = new Cell(x, y, 0);
    }
  }
}

Board.prototype.display = function() {

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
