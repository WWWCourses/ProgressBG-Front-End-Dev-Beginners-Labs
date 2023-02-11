// function arrayContructor(el1,el2){
// 	this.el1 = el1;
// 	this.el2 = el2;
// }
// arrayContructor.prototype.push  = function (x) {
// 	this.el3 = x;
// }

// console.dir(arrayContructor);


class Array{
	constructor(el1,el2){
		this.el1 = el1;
		this.el2 = el2;
	}
	push(x) {
		this.el3 = x;
	}
	pop(){

	}
}
console.dir(Array);
Array.getElements = function () {
	console.log(`Get elements`);
}

let arr1 = new Array(1,2);
let arr2 = new Array(2,3);
arr1.push(3);
// arr1.getElements();
Array.getElements();

// console.log(arr1);
// // console.log(arr1);

// arr1.push();
// arr2.push();

