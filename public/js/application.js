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
  if(this.value === 0) {
    this.html.hide();
  } else {
    this.html.show();
  }
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

Board.prototype.left = function() {
  for(var y = 0; y < this.size; y++) {
    var row_to_solve = []
    for(var x = this.size-1; x >= 0; x--) {
      row_to_solve.push(this.cells[y][x]);
    }
    solveRow(row_to_solve);
  }
  this.display();
}

Board.prototype.right = function() {
  for(var y = 0; y < this.size; y++) {
    solveRow(this.cells[y]);
  }
  this.display();
}

function solveRow(row) {
  var last_value;
  var new_row = [];
  var reversed = [];
  var positions = [];

  // var sorting_zeros = [];
  // var sorting_others = [];
  // while(row.length > 0) {
  //   var cell = row.shift();
  //   positions.push({x: cell.x, y: cell.y});
  //   if(cell.value === 0) {
  //     sorting_zeros.push(cell);
  //   } else {
  //     sorting_others.push(cell);
  //   }
  // }

  // var sorting_counter = 0;
  // while(sorting_zeros.length > 0) {
  //   row.push(sorting_zeros.shift());
  // }
  // while(sorting_others.length > 0) {
  //   row.push(sorting_others.shift());
  // }

  console.log(row[0].x);
  console.log(row[1].x);
  console.log(row[2].x);
  console.log(row[3].x);

  for(var position in positions) {
    row[position].x = positions[position].x;
    row[position].y = positions[position].y;
  }

  for(var cell = 3; cell >= 0; cell--) {
    if(last_value === row[cell].value && last_value === new_row.last()) {
      new_row[new_row.length - 1] = new_row.last() * 2;
      last_value = row[cell].value;
    } else if(row[cell].value !== 0) {
      new_row.push(row[cell].value);
      last_value = row[cell].value;
    }
  }

  // Add empty space because the algorithm above doesn't add in empty spaces. We can always assume that empty space will only be at the end.
  while(new_row.length < 4) {
    new_row.push(0);
  }

  // Reverses the array because the algorithm returns it in the wrong order.
  for(var i = new_row.length-1; i >= 0; i--) {
    reversed.push(new_row[i]);
  }

  for(var i = 0; i < 4; i++) {
    row[i].value = reversed[i];
  }
}

$(document).ready(function() {
  board = new Board();
});

// DANGER WILL ROBINSON MONKEY PATCHING ABOUNDS

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};
