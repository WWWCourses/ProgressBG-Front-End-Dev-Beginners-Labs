let app = new PIXI.Application({width: 256, height: 256});
//Let Pixi create a canvas attach it in the  HTML document
document.body.appendChild(app.view);
// console.dir(app.view);


// note that if using realative path, it must be relative to index.html
let catImagePath = "./assets/images/Siberian_cat_patronus.png";


app.loader
	.add('cat', catImagePath)
	.load((loader, resources) => {
		// creates a sprite :
		const cat = new PIXI.Sprite(resources.cat.texture);

		// Setup the position of the cat
		cat.x = app.renderer.width / 2;
		cat.y = app.renderer.height / 2;

		// set the rotation anchors (image center)
		cat.anchor.x = 0.5;
		cat.anchor.y = 0.5;

		// Add the cat to the scene we are building
		app.stage.addChild(cat);

		// Listen for frame updates
		app.ticker.add(() => {
			// each frame we spin the cat around a bit
			cat.rotation += 0.01;
		});
	});