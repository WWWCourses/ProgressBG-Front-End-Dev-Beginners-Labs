let app = new PIXI.Application({width: 200, height: 200});

//Let Pixi create a canvas attach it in the  HTML document
document.body.appendChild(app.view);

// note that if using realative path, it must be relative to index.html
let spritePaht = "./assets/images/Siberian_cat_patronus.png";

// create a new Sprite from an image path
const sprite1 = PIXI.Sprite.from(spritePaht);


// Change the sprite's size
sprite1.width = 200;
sprite1.height = 200;

// Change sprite position
sprite1.position.set(100,100);

// Change sprite anchor point
sprite1.anchor.set(0.5,0.5)


app.ticker.add(() => {

	// each frame we spin the cat around a bit
	sprite1.rotation += 0.01;
});

// add sprite to the stage
app.stage.addChild(sprite1);


