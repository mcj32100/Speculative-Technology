var complexStateMachine;           // the ComplexStateMachine class
var clickablesManager;             // our clickables manager
var clickables;                    // an array of clickable objects

var currentStateName = "";
var moodImage;

var bkColor = '#031927';
var textColor = '#E9D6EC';

var displayPecentages = true;
var displayHorizontalBars = true;

var xLeftMargin = 50;     // for percentages
var xBarOffset = 30;
var yTopMargin = 50;
var yOffset = 50;
var barWidth = 30;
var barSpacing = 50;

var buttonFont;


function preload() {
  clickablesManager = new ClickableManager('data/clickableLayout.csv');
  complexStateMachine = new ComplexStateMachine("data/interactionTable.csv", "data/clickableLayout.csv");

  buttonFont = loadFont("AtariClassic-ExtraSmooth.ttf");
}

// Setup code goes here
function setup() {
  createCanvas(1280, 720);
  imageMode(CENTER);
  initializeScores();

  // setup the clickables = this will allocate the array
  clickables = clickablesManager.setup();

  // setup the state machine with callbacks
  complexStateMachine.setup(clickablesManager, setImage, stateChanged);

  // call OUR function to setup additional information about the p5.clickables
  // that are not in the array 
  setupClickables(); 
 }

// Draw code goes here
function draw() {
  drawBackground();
  drawImage();
  drawOther();
  drawUI();
}

function setupClickables() {
  // All clickables to have same effects
  for( let i = 0; i < clickables.length; i++ ) {
    clickables[i].onHover = clickableButtonHover;
    clickables[i].onOutside = clickableButtonOnOutside;
    clickables[i].onPress = clickableButtonPressed;
    clickables[i].textFont = "AtariClassic-ExtraSmooth";
    clickables[i].width = 170;
  }
}

// tint when mouse is over
clickableButtonHover = function () {
  this.color = "#9E98A3";
  this.noTint = false;
  this.tint = "#FF0000";
}

// color a light gray if off
clickableButtonOnOutside = function () {
  // backto our gray color
  this.color = "#F8FADE";
}

clickableButtonPressed = function() {
  complexStateMachine.clickablePressed(this.name);
}

// this is a callback, which we use to set our display image
function setImage(imageFilename) {
  moodImage = loadImage(imageFilename);
} 

// this is a callback, which we can use for different effects
function stateChanged(newStateName) {
    currentStateName = newStateName;
    console.log(currentStateName);
} 

//==== KEYPRESSED ====/
function mousePressed() {
  // if( currentStateName === "Startup" ) {
  //   complexStateMachine.newState("Instructions");
  // }
}

//==== MODIFY THIS CODE FOR UI =====/

function drawBackground() {
  background(color(bkColor));
}

function drawImage() {
  if( moodImage !== undefined ) {
    image(moodImage, width/2, height/2);
  }  
}

function drawOther() {
  push();

   // Draw mood — if not on startup or Instructions screen  
   if( currentStateName !== "Players" && currentStateName !== "P1") {
    fill(color(textColor));
    textFont(buttonFont);
    textSize(36);
    //text(currentStateName, width/2, 50);
  }

  pop();
}

//-- right now, it is just the clickables
function drawUI() {
  clickablesManager.draw();
}var complexStateMachine;           
var clickablesManager;             
var clickables;                    

var currentStateName = "";
var moodImage;

var bkColor = '#031927';
var textColor = '#E9D6EC';

var buttonFont;

function preload() {
  clickablesManager = new ClickableManager('data/clickableLayout.csv');
  complexStateMachine = new ComplexStateMachine("data/interactionTable.csv", "data/clickableLayout.csv");

  buttonFont = loadFont("AtariClassic-ExtraSmooth.ttf");
  
}

// Setup code goes here
function setup() {
  createCanvas(1280, 720);
  imageMode(CENTER);

  // setup the clickables = this will allocate the array
  clickables = clickablesManager.setup();

  // setup the state machine with callbacks
  complexStateMachine.setup(clickablesManager, setImage, stateChanged);

  // call OUR function to setup additional information about the p5.clickables
  // that are not in the array 
  setupClickables(); 
 }


// Draw code goes here
function draw() {
  drawBackground();
  drawImage();
  drawOther();
  drawUI();
  fill('yellow');
  ellipse(150,100,80);
  ellipse(1130,100,80);
  fill('#162040');
  ellipse(150,100,50);
  ellipse(1130,100,50);
  fill('white');
  ellipse(150,100,20);
  ellipse(1130,100,20);
}

function setupClickables() {
  // All clickables to have same effects
  for( let i = 0; i < clickables.length; i++ ) {
    clickables[i].onHover = clickableButtonHover;
    clickables[i].onOutside = clickableButtonOnOutside;
    clickables[i].onPress = clickableButtonPressed;
    clickables[i].textFont = "AtariClassic-ExtraSmooth";
    clickables[i].width = 170;
  }
}

// tint when mouse is over
clickableButtonHover = function () {
  this.color = 'yellow';
  this.noTint = false;
  this.tint = "#FF0000";
}

// color a light gray if off
clickableButtonOnOutside = function () {
  // backto our gray color
  this.color = "#F8FADE";
}

clickableButtonPressed = function() {
  complexStateMachine.clickablePressed(this.name);
}

// this is a callback, which we use to set our display image
function setImage(imageFilename) {
  moodImage = loadImage(imageFilename);
} 

// this is a callback, which we can use for different effects
function stateChanged(newStateName) {
    currentStateName = newStateName;
    console.log(currentStateName);
} 


//==== KEYPRESSED ====/
function mousePressed() {
  // if( currentStateName === "Startup" ) {
  //   complexStateMachine.newState("Instructions");
  // }
}

//==== MODIFY THIS CODE FOR UI =====/

function drawBackground() {
  background(color(bkColor));
}

function drawImage() {
  if( moodImage !== undefined ) {
    image(moodImage, width/2, height/2);
  }  
}

function drawOther() {
  push();

   // Draw mood — if not on startup or Instructions screen  
   if( currentStateName !== "Players" && currentStateName !== "P1") {
    fill(color(textColor));
    textFont(buttonFont);
    textSize(36);
    //text(currentStateName, width/2, 50);
  }

  pop();
}

//-- right now, it is just the clickables
function drawUI() {
  clickablesManager.draw();
}
