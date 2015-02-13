var gameWindow;
var llama;

function update() {
  llama.update();
}

function draw() {
  llama.draw();
}

$(document).ready(function() {
  llama = new Llama();

  gameWindow = $("div#game")

  setInterval(function() {
    update();
    draw();
  }, 10);
});
