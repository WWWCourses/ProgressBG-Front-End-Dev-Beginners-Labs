const ford = {
	speed: 300,
	manifacturer:"Ford"
}

const fordOfPesho ={
	"wings": 2,
	// "speed": 50
};

console.dir(fordOfPesho);
fordOfPesho.__proto__ = ford;
// console.dir(fordOfPesho);

console.log( fordOfPesho.speed );
console.log( fordOfPesho.manifacturer );
