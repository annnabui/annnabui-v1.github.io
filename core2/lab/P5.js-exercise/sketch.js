let data, url;
let itemNum;
let latitudes = [];
let longitudes = [];
let xCoords = [];
let yCoords = [];


function preload(){
  url = "film-location.json";
  data = loadJSON(url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(data);
}



/*
Tips:
Think about how an area on a map can be shrunk into a p5 canvas, using latitude ranging from 22.99 to 37.53, longitude ranging from -121.74 to -92.96.


latitude maps to y coordinate
longitude maops to x cordinate

             37.53
          ------------
          |          |
-121.74   |          |   -92.96
          |          |
          ------------
             22.99


               0
          ------------
          |          |
      0   |          |   windowWidth
          |          |
          ------------
          windowHeight


*/


function draw() {
  background('black');
  
  itemNum = Object.keys(data).length;
  
  for (let i = 0; i < itemNum; i++){
    latitudes[i] = data[i].Latitude;
    longitudes[i] = data[i].Longitude;

    xCoords[i] = map(longitudes[i], -122.863, -93.200, 0, windowHeight);
    yCoords[i] = map(latitudes[i], 36.676, 24.736, 0, windowWidth);
    
    //extra credit for linking coordinates in the order they appear
    stroke('blue');
    line(xCoords[i], yCoords[i], xCoords[i+1], yCoords[i+1]);
    
    fill('pink');
    circle(xCoords[i], yCoords[i], 10);
    
  }
  
  //console.log(latitudes);
}