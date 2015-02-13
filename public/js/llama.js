function Llama() {
  this.dom = $("img#llama");
  this.x = 0;
  this.y = 0;
  this.speed = 10;
  this.dom.css("position", "relative");

  this.movementInterval = 0;

  var that = this

  $(document).on('keyup', function(event) {
    clearInterval(that.movementInterval);
  })

  $(document).on('keypress', function(event) {
    console.log(event.keyCode);
    switch(event.keyCode) {
      // Up
      case 119:
        clearInterval(that.movementInterval);
        that.movementInterval = setInterval(function() {
          that.y -= 1
        }, that.speed);
        break;
      // Left
      case 97:
        that.faceLeft();
        clearInterval(that.movementInterval);
        that.movementInterval = setInterval(function() {
          that.x -= 1
        }, that.speed);
        break;
      // Down
      case 115:
        clearInterval(that.movementInterval);
        that.movementInterval = setInterval(function() {
          that.y += 1
        }, that.speed);
        break;
      // Right
      case 100:
        that.faceRight();
        clearInterval(that.movementInterval);
        that.movementInterval = setInterval(function() {
          that.x += 1
        }, that.speed);
        break;
    }
  });
}

Llama.prototype.faceLeft = function() {
  this.dom.attr("src", "/img/llamaleft.png");
}

Llama.prototype.faceRight = function() {
  this.dom.attr("src", "/img/llamaright.png");
}

Llama.prototype.draw = function() {
  this.dom.css("left", this.x);
  this.dom.css("top", this.y);
}

Llama.prototype.update = function() {
}
