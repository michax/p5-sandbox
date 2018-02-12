// gui params
var isOverlayEnabled = false;

var gui;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create the GUI
  sliderRange(0, 90, 1);
  gui = createGui('Configuration', windowWidth - 300, 100);
  gui.addGlobals('isOverlayEnabled');
  
  // Only call draw when then gui is changed
  noLoop();
}

function draw() {
    
  // this is a piece of cake
  background(210);
  fill(myColor);
  angleMode(DEGREES);
  arc(width/2, height/2, 100, 100, myAngle/2, 360 - myAngle/2, PIE);
  
}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}