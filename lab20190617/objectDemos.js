var car1 = {
    "brand" : "ford",
    "year"  : 2016,
    "color" : "red",
    "doors" : 3
}

var car2 = {
    "brand" : "bmw",
    "year"  : 2018,
    "color" : "black",
    "doors" : 5
}

var developer1 = {
    // properties:
    "firstName"     : "Ivan",
    "surName"       : "Ivanov",
    "address"       : { "country": "Bulgaria", "town"   : "Plovdiv"},
    "skills"        : ["HTML", "CSS", "JavaScript"],
    // methods:
    "applyForJob"   : function(){
        console.log( this.firstName + " is applying for job!")
    }
}


console.log( developer1.skills[1]);


var propName = 'country';
// console.log( developer1.address.country); // Bulgaria
console.log( developer1.address[propName]);    // Plovdiv

