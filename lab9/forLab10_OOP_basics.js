// write Ford Constructor:
function Ford(speed) {
	this.speed = speed;
	this.manifacturer = "Ford";
}

const ford1 = new Ford(100);
const ford2 = new Ford(300);

const fordOfPesho ={
	"wings": 2
};
// fordOfPesho is a Ford, as well => do it on lab10

console.log(ford1.speed); // 100
console.log(ford1.manifacturer); // "Ford"

