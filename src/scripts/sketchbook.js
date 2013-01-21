// Start the main app logic.
requirejs(["underscore", 'easeljs', 'tweenjs', 'soundjs', 'backbone', 'bbLocalStorage'],
function   (underscore, easeljs, tweenjs, soundjs, backbone, bbLocalStorage) {

	function executeScript(){
		// raw_input = document.getElementById('src').value;
		// eval(raw_input);
		console.log('launched contained text');

		//complete test app follows
		/* Define Canvas */
		var canvas;
		var stage;

		/* Background */
		var bgSrc = new Image(); //this will store the image data of the source png
		var bg; //the bitmap object using easeljs

		// Button
		var btnSrc = new Image();
		var btn;

		// Create text
		var msg = new createjs.Text('Hello World!', 'Bold 25px Arial', '#EEE');

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

			msg.x = centerX - 70;
			msg.y = centerY;
			msg.alpha = 0;

			stage.addChild(bg,btn,msg);
			stage.update(); //Very important

			//add button listener
			btn.onPress = toggle;	
		}

		function toggle(){

			if(btn.y <= centerY){
				createjs.Tween.get(btn).to({y:centerY + 50}, 700, createjs.Ease.circInOut);
				createjs.Tween.get(msg).wait(400).to({alpha: 1}, 400);
			}else{
				createjs.Tween.get(msg).to({alpha: 0}, 400);
				createjs.Tween.get(btn).wait(100).to({y:centerY}, 700, createjs.Ease.circInOut);		
			}
		}
		Main();

		};


		var runButton = document.getElementById('run-button');
		var stopButton = document.getElementById('stop-button');
		var saveButton = document.getElementById('save-button');
		var loadButton = document.getElementById('load-button');
		var resetButton = document.getElementById('reset-button');

		runButton.onclick = function(){
			console.log("here");
			executeScript();
		};
});


