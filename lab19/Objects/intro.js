// let arr = [1,2,3];
// console.log( arr[8] );

let obj = {
	'a':3,
	'b':2,
	'0':1
}

const developer1 = {
	"firstName" : "Ivan",
	"surName"   : "Ivanov",
	"skills"     : ["HTML", "CSS", "JavaScript"],
	"address": {
		town: "Sofia",
		country:"BG"
	},
	"applyForJob": function(){
	  const skillsStr = this.skills.toString();
	  console.log(`Hi, I'm ${this.firstName} ${this.surName}. My strongest skills are ${skillsStr}.`);
	}
}

/* ------------------------------ Dot Notation ------------------------------ */
// console.log( obj.a );
// console.log( obj.b );
// console.log( obj.c );

// console.log( developer1.address.town );

console.log( obj.a);

/* ------------------------- Square Bracket Notation ------------------------ */
console.log( obj['0']);

let propName = 'surName';
console.log( developer1[propName] );
console.log( developer1['surName'] );
