var cats = [];

for (var i = 0; i < 3; i++) {

	(function (j) {
		cats[j] = function(){
			// j is local, so its VALUE is "closed" in the function
			// i is global, and it is used as variable, not value
			console.log(`Cat ${j},${i} is ready!`);
		}
	})(i);

}

cats[0](); // Cat 0,3 is ready












