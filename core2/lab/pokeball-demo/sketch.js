let d = 100; // diameter of circle
let x = d / 2; // x-coordinate starts at 50
let y = d / 2; // y-coordinate starts at 50
let vx = 50; // velocity in x-direction (speed + direction)
let vy = 50; // velocity in y-direction
let s = 80;

function preload() {
  pokeball = loadImage('pokeball.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // ellipseMode(CORNER);
  pokeball.resize (s, s);
  image (pokeball, x, y);
  //ellipse(x, y, d);
  x = x + vx; // updating the x-coordinate
  y = y + vy; // updating the y-coordinate
  // d = d + 1;  // d++;

  /* boundary-checking
   * the ball change its direction once it hits the wall
   */
  if (x + pokeball.width / 2 >= windowWidth || x - pokeball.width / 2 <= 0) {
    vx = -vx;
    //when the x position of the ball is greater than or equal to the canvas (right side) OR when it's smaller than 0 (left side)
    //then the direction of the ball = negative => moving the other way
  }
  if (y + pokeball.height / 2 >= windowHeight || y - pokeball.height / 2 <= 0) {
    vy = -vy;
  }

  // console.log(vx);
  // circle(200, 200, 50);
}
