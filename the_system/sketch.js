let font
let fontSize = 100

let word = "YUM"
let img


let rowSize = 10
let click = 15 

function preload() {
  font = loadFont('./Raleway-Black.ttf')
  img = loadImage('system3.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img.resize(width, height) 
  frameRate(15)
}

function draw() {
  background(0)
  translate(windowWidth/2-(width/2), windowHeight/2-(height/2))
 let rowSize = 1 + int(mouseY/10)
  loop();
//noLoop()
  // Copy rows from the image to the canvas.
  for (let y = 0; y < height; y += rowSize) {
      let sx = 15 * sin(mouseY/(width*4) * y)
      let sy = y 
      let dx = 0
      let dy = y
       
    image(img, 
         dx, dy, width, rowSize, 
         sx, sy, width, rowSize,)
    
    blendMode(MULTIPLY)
    noStroke()
    fill(random(190,255), random(190,255), random(190,255))
    rect(0, dy, width, rowSize)
    blendMode(BLEND)

  }
}

// mousePressed() {
// loop(); 
//} 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}