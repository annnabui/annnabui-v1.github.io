var canvas;
var strokeOne;
var strokeOut;
let strokeOutID = "strokeout";

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  noDebugMode();

  canvas.position(0,0);
  canvas.style('z-index', '-1');
  strokeCap(SQUARE);

  strokeOne = function() {
    stroke(68,74,246,120);
    strokeWeight(150);
  }

  strokeOut = function() {
    stroke(68,74,246,120);
    strokeWeight(150);
  }

  // let strokeOutObj = {var: strokeOut, id: strokeOutID};

  // console.log(strokeOutObj.var);
  // console.log(strokeOutObj.id);
}

function draw() {
  background(0,10,255);
  // background(000)
  orbitControl();

  noFill();
  strokeOne ();
  arc(0,-10,300,300,PI*3/4, PI*5/4);
  translate(0,0,150);


  arc(0,-10,300,300,PI*5/3,PI*3/4);
  arc(0,-10,300,300,PI*7/6,PI*3/2);
  translate(0,0,150);

  arc(0,-10,300,300,0,PI/4);
  arc(0,-10,300,300,PI,PI*3/2);
  
  arc(0,-10,300,300,0,PI/2);
  translate(0,0,150);
  
  arc(0,-10,300,300,0,PI);
  translate(0,0,150);

  arc(0,-10,300,300,PI*3/4,PI*3/2);
  translate(0,0,0);

  arc(0,-10,300,300,PI*5/3,PI*7/4);
  translate(0,0,0);

  arc(0,-10,300,300,0,PI*1/4);
  translate(0,0,150);
  

  strokeOut();
  arc(0,-10,300,300,PI/2,PI*5/4);
  translate(0,0,150);
};

// var strokeClick = document.getElementById('strokeout');
// var strokePopup = document.getElementById('myDiv');

// strokeClick.addEventListener("click", function() {
//   strokePopup.style.display = "block";
// });

