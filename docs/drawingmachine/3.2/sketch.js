function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 600, 0, 255, true));
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  }
}