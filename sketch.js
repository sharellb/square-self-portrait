/* ICM 2023 Homework 1 Self-Portrait */

// Grid width and length (restrict to a square)
const gridSize =  1000;
// Number of squares per row and column 
const gridCount = 10;
// Calculated width and length of each square
let squareSize;

// Skin color values captured using Digital Color Meter from HEIC image captured on an iPhone and airdropped to a laptop
// inspired by ICM class 1 activity led by Ellen Nickles

const skinColors = [ 
	{R:218, G:146, B:124 },
	{R:210, G:141, B:117 },
	{R:116, G:73, B:55 },
	{R:142, G:93, B:75 },
	{R:93, G:63, B:54 },
	{R:216, G:156, B:129 },
	{R:138, G:82, B:51 },
	{R:205, G:170, B:150 },
	{R:120, G:67, B:44 },
]

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10); // Slow down speed of change

  // Calculated width and length of each square
  squareSize = windowWidth/gridCount;
}

function draw() {
  noStroke();
  
  // Draw a 10x10 grid of squares
  for (let i = 0; i <= gridCount ; i++) {
    for (let j = 0; j <= gridCount; j++) {
        
        // generate random integer for index to choose from in skinColors array
        let skinColor = skinColors[Math.floor(Math.random() * 9)];
        
        fill(skinColor.R, skinColor.G, skinColor.B);
      
        square(i*squareSize, j*squareSize, squareSize);
    }
  }
  
}