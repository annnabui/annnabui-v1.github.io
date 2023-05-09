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
  let scaledSeg1 = map(seg1, 2, 4160, 60, 360);
  let scaledSeg2 = map(seg2, 2, 4160, 60, 360);
  let scaledSeg3 = map(seg3, 2, 4160, 60, 360);
  let scaledSeg4 = map(seg4, 2, 4160, 60, 360);
  let scaledSeg5 = map(seg5, 2, 4160, 60, 360);
  let scaledSeg6 = map(seg6, 2, 4160, 60, 360);
  let scaledSeg7 = map(seg7, 2, 4160, 60, 360);
  let scaledSeg8 = map(seg8, 2, 4160, 60, 360);
  
  fill(68,74,246,200);
  textFont(myFont);
  textSize(36);
  text('1851 - 1859', -100, -250)
  noFill();
  arc(0,-10,300,300,135, 135 + scaledSeg1)
  translate(0,0,200);

  fill(68,74,246,200);
  textFont(myFont);
  textSize(36);
  text('1860 - 1880', -100, -250)
  noFill();
  arc(0,-10,300,300,300,300 + scaledSeg2);
  translate(0,0,200);
  
  fill(68,74,246,200);
  textFont(myFont);
  textSize(36);
  text('1881 - 1901', -100, -250)
  noFill();
  arc(0,-10,300,300,210,210 + scaledSeg3);
  translate(0,0,200);

  fill(68,74,246,200);
  textFont(myFont);
  textSize(36);
  text('1902 - 1922', -100, -250)
  noFill();
  arc(0,-10,300,300,0, 0 + scaledSeg4);
  translate(0,0,200);
  
  fill(68,74,246,200);
  textFont(myFont);
  textSize(36);
  text('1923 - 1943', -100, -250)
  noFill();
  arc(0,-10,300,300,275, 275 + scaledSeg5);
  translate(0,0,200);
  
  fill(68,74,246,200);
  textFont(myFont);
  textSize(36);
  text('1944 - 1964', -100, -250)
  noFill();
  arc(0,-10,300,300,200, 200 + scaledSeg6);
  translate(0,0,200);

  fill(68,74,246,200);
  textFont(myFont);
  textSize(36);
  text('1965 - 1985', -100, -250)
  noFill();
  arc(0,-10,300,300,300,300 + scaledSeg7);
  translate(0,0,200);

  fill(68,74,246,200);
  textFont(myFont);
  textSize(36);
  text('1986 - 2006', -100, -250)
  noFill();
  arc(0,-10,300,300,300,300 + scaledSeg8);
  translate(0,0,200);

}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}