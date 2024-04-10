let backgroundImage;
let icarus = [];
let ic1, ic2, ic3;
let currentImage = 0;
let frameCounter = 0;
let displayDuration = 60 * 2; // 2 seconds at 60 FPS

function preload() {
  backgroundImage = loadImage('images/final.bg1.png');
  ic1 = loadImage('images/fall1.transparent.png');
  ic2 = loadImage('images/fallen1.transparent.png');
  ic3 = loadImage('images/lament.transparent.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  icarus.push(ic1);
  icarus.push(ic2);
  icarus.push(ic3);
}

function draw() {
  image(backgroundImage, 0, 0, windowWidth, windowHeight);

  // Calculate the y positions for the images
  let ic1_y = windowHeight / 3 - ic1.height / 2; // First third
  let ic2_y = windowHeight * 2 / 3 - ic2.height / 2; // Middle
  let ic3_y = windowHeight * 2 / 3 - ic3.height / 2; // Last third

  // Apply yellow filter to the images
  tint(255, 204, 0); // Yellow color
  // Display the current image
  if (frameCounter < displayDuration) {
    image(icarus[currentImage], windowWidth / 2 - icarus[currentImage].width / 2, [ic1_y, ic2_y, ic3_y][currentImage]);
  } else {
    // Move to the next image after displayDuration frames
    currentImage++;
    frameCounter = 0;
    if (currentImage >= icarus.length) {
      currentImage = 0; // Reset to the first image
    }
  }
  noTint(); // Reset tint to default

  frameCounter++;
}
