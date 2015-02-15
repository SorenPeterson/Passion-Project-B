var BOARD_SIZE = 400;
var CELL_SIZE = BOARD_SIZE/4;

var board;

function Cell(x, y, value) {
  this.x = x;
  this.y = y;
  this.value = value;
  this.html = $("#cell-template").find(".cell").clone();
}

Cell.prototype.display = function() {
  this.html.css("top", this.y * CELL_SIZE)
  this.html.css("left", this.x * CELL_SIZE)
}

function Board() {
  // Set size of board
  this.size = 4;

  this.html = $("#game");

  // Populated board with empty cells
  this.cells = []
  for(var y = 0; y < this.size; y++) {
    this.cells[y] = []
    for(var x = 0; x < this.size; x++) {
      this.cells[y][x] = new Cell(x, y, 0);
      this.html.append(this.cells[y][x].html);
      this.cells[y][x].display();
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
