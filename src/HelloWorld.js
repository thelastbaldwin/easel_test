/* Define Canvas */
var canvas;
var stage;

/* Background */
var bgSrc = new Image(); //this will store the image data of the source png
var bg; //the bitmap object using easeljs

// Button
var btnSrc = new Image();
var btn;

// Variables
var centerX = 275;
var centerY = 150;
var gfxLoaded = 0; //will serve as preloader flag

function Main()
{
	// Link Canvas
	canvas = document.getElementById('HelloWorld');
	stage = new createjs.Stage(canvas);
	stage.mouseEventsEnabled = true; //mouse events are disabled by default

	// // Load GFX
	
	bgSrc.src = 'bg.png';
	bgSrc.name = 'bg';
	bgSrc.onload = loadGfx;

	btnSrc.src = 'button.png';
	btnSrc.name = 'button';
	btnSrc.onload = loadGfx;

	// Ticker
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(stage);
}

function loadGfx(e){
	if(e.target.name = 'bg'){
		bg = new createjs.Bitmap(bgSrc); 
	}
	if(e.target.name = 'button'){
		btn = new createjs.Bitmap(btnSrc); 
	}

	gfxLoaded++;

	//display graphics until all of them are loaded
	if(gfxLoaded == 2){
		buildInterface();
	}
};	

function buildInterface(){
	btn.x = centerX -40;
	btn.y = centerY - 12;

	stage.addChild(bg,btn);
	stage.update(); //Very important

	//add button listener
	btn.onPress = showText;
}

function showText(){
	console.log('This works like trace!');

	// Remove listener
	btn.onPress = null;

	// Create text

	var msg = new Text('Hello World!', 'Bold 25px Arial', '#EEE');

	msg.x = centerX - 70;
	msg.y = centerY;

	stage.addChild(msg);
	msg.alpha = 0;

	// Animation

	Tween.get(btn).to({y:centerY + 50}, 300);
	Tween.get(msg).wait(400).to({alpha: 1}, 400);
}


//window.load event
window.onload = function(){
	Main();
}