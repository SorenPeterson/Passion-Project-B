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
  this.html.css("top", this.y * CELL_SIZE);
  this.html.css("left", this.x * CELL_SIZE);
  this.html.find(".cell-value").text(this.value);
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
  for(var y = 0; y < 4; y++) {
    for(var x = 0; x < 4; x++) {
      this.cells[y][x].display();
    }
  }
}

Board.prototype.placeNewNumber = function() {
  var empty_cells = []
  var cell_index;
  var new_value;

  // Gather all locations of empty cells
  for(var y = 0; y < 4; y++) {
    for(var x = 0; x < 4; x++) {
      var this_cell = this.cells[y][x]
      if(this_cell.value === 0) {
        empty_cells.push(this_cell);
      }
    }
  }

  cell_index = Math.floor((Math.random() * empty_cells.length));
  new_value = Math.floor(Math.random() * 2) * 2 + 2;
  empty_cells[cell_index].value = new_value;
  empty_cells[cell_index].display();
}

Board.prototype.up = function() {

}

Board.prototype.down = function() {

}



$(document).ready(function() {
  board = new Board();
});
