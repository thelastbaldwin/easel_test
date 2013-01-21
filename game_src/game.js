// Following the code tutorial found at: 
// http://blogs.msdn.com/b/davrous/archive/2011/07/21/html5-gaming-animating-sprites-in-canvas-with-easeljs.aspx

var canvas;
var stage;
var screen_width;
var screen_height;
var bmpAnimation;

var imgMonsterARun = new Image();

function init(){
	//find canvas and load images, wait for last image to load
	canvas = document.getElementById('testCanvas');

	imgMonsterARun.onload = handleImageLoad;
	imgMonsterARun.onerror = handleImageError;
	imgMonsterARun.src = "img/imgMonsterARun.png"

	// create spritesheet and assign the associated data
	var spriteSheet = new createjs.SpriteSheet({
		//image to use
		images: [imgMonsterARun],
		//width, height  registarton point of each sprite
		frames: {width: 64,height: 64, regX: 32, regY: 32},
		animations:{
			walk: [0,9, "walk"]
		}
	});
}

function reset(){
	stage.removeAllChildren();
	createjs.Ticker.removeAllListners();
	stage.update();
}