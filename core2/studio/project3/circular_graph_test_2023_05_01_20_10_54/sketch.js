var canvas;
let data, url;
let myFont;

function preload() {
  url = 'oyster.json';
  data = loadJSON(url);
  
  myFont = loadFont('Helvetica-Bold.ttf');
}

let seg1 = 0
let seg2 = 0
let seg3 = 0
let seg4 = 0
let seg5 = 0
let seg6 = 0
let seg7 = 0
let seg8 = 0


function setup() {
  angleMode(DEGREES);
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  console.log(data);
  normalMaterial();
  noDebugMode();
  noFill();
  stroke(68,74,246,120);
  strokeWeight(150);

  canvas.position(0,0);
  canvas.style('z-index', '-1');
  strokeCap(SQUARE);
  let dataLength = Object.keys(data).length
  for (let i=0; i < dataLength; i++) {
    let currentEntry = data[i];
    let currentEntryYear = currentEntry['firstAppeared'];
    if (currentEntryYear <= 1859 && currentEntryYear >= 1851) {
      seg1 += currentEntry['menusAppeared']
      
    } else if(currentEntryYear <= 1880 && currentEntryYear >= 1860) {
      seg2 += currentEntry['menusAppeared']

    } else if(currentEntryYear <= 1901 && currentEntryYear >= 1881) {
      seg3 += currentEntry['menusAppeared']

    } else if(currentEntryYear <= 1922 && currentEntryYear >= 1902) {
      seg4 += currentEntry['menusAppeared']
      
    } else if(currentEntryYear <= 1943 && currentEntryYear >= 1923) {
      seg5 += currentEntry['menusAppeared']
      
    } else if(currentEntryYear <= 1964 && currentEntryYear >= 1944) {
      seg6 += currentEntry['menusAppeared']
      
    } else if(currentEntryYear <= 1985 && currentEntryYear >= 1965) {
      seg7 += currentEntry['menusAppeared'] 
      
    } else if(currentEntryYear <= 2006 && currentEntryYear >= 1986) {
      seg8 += currentEntry['menusAppeared'] 
    }
  }  
  
  console.log(seg1,seg2,seg3,seg4,seg5,seg6,seg7,seg8)
}

function draw() {
  background(0,10,255);
  //pieChart(300, menuNo);
  // background(000)

  orbitControl();
  let scaledSeg1 = map(seg1, 2, 4160, 90, 360);
  let scaledSeg2 = map(seg2, 2, 4160, 90, 360);
  let scaledSeg3 = map(seg3, 2, 4160, 90, 360);
  let scaledSeg4 = map(seg4, 2, 4160, 90, 360);
  let scaledSeg5 = map(seg5, 2, 4160, 90, 360);
  let scaledSeg6 = map(seg6, 2, 4160, 90, 360);
  let scaledSeg7 = map(seg7, 2, 4160, 90, 360);
  let scaledSeg8 = map(seg8, 2, 4160, 90, 360);
  

  // Seg1
  noFill();
  // Am 
  stroke(68,74,246,170);
  arc(0,-10,300,300,135, 135 + scaledSeg1)
  translate(0,0,200);

  // Seg2
  noFill();
  // Am
  stroke(68,74,246,170);
  arc(0,-10,300,300,300,300 + scaledSeg2);
  // Fr
  stroke(180,155,255,120);
  arc(0,-10,300,300,300 + scaledSeg2 + 5, 125);
  // Ir
  stroke(68,200,246,120);
  arc(0,-10,300,300,130, 136);
  translate(0,0,200);
  
  // Seg3
  noFill();
  // Am
  stroke(68,74,246,170);
  arc(0,-10,300,300,210,210 + scaledSeg3);
  // Fr
  stroke(180,155,255,120);
  arc(0,-10,300,300,210 + scaledSeg3 + 5, 195);
  // Ir
  stroke(68,200,246,120);
  arc(0,-10,300,300,200, 205);
  translate(0,0,200);

  // Seg4
  noFill();
  // Am
  stroke(68,74,246,170);
  arc(0,-10,300,300,0, 0 + scaledSeg4);
  // Fr
  stroke(180,155,255,120);
  arc(0,-10,300,300,0 + scaledSeg4 + 5, 215);
  // It
  stroke(255,121,255,200);
  arc(0,-10,300,300,220, 225);
  translate(0,0,200);
  
  // Seg5
  noFill();
  // Am
  stroke(68,74,246,170);
  arc(0,-10,300,300,275, 275 + scaledSeg5);
  // Fr
  stroke(180,155,255,120);
  arc(0,-10,300,300,275 + scaledSeg5 + 5, 37);
  translate(0,0,200);
  
  // Seg6
  noFill();
  // Am
  stroke(68,74,246,170);
  arc(0,-10,300,300,200, 200 + scaledSeg6);
  // Fr
  stroke(180,155,255,120);
  arc(0,-10,300,300,200 + scaledSeg6 + 5, 333);
  // Ir
  stroke(68,200,246,120);
  arc(0,-10,300,300,338, 343);
  // Port
  stroke(212,57,253,120);
  arc(0,-10,300,300,348, 358);
  translate(0,0,200);

  // Seg7
  noFill();
  // Am
  stroke(68,74,246,170);
  arc(0,-10,300,300,300,300 + scaledSeg7);
  // Fr
  stroke(180,155,255,120);
  arc(0,-10,300,300,300 + scaledSeg7 + 5, 60);
  // Port
  stroke(212,57,253,120);
  arc(0,-10,300,300,65, 75);
  // Dutch
  stroke(212,83,121,120); 
  arc(0,-10,300,300,80, 85);
  // Jap
  stroke(204,60,0,120);
  arc(0,-10,300,300,90, 100);
  translate(0,0,200);

  // Seg8
  noFill();
  // Am
  stroke(68,74,246,170);
  arc(0,-10,300,300,200,200 + scaledSeg8);
  // Fr
  stroke(180,155,255,120);
  arc(0,-10,300,300,200 + scaledSeg8 + 5, 320);
  // Port
  stroke(212,57,253,120);
  arc(0,-10,300,300,325, 330);
  // It
  stroke(255,121,255,200);
  arc(0,-10,300,300,335, 349);
  translate(0,0,200);
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}