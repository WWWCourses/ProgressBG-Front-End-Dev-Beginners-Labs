var developer1 = {
    // properties:
    "firstName"     : "Ivan",
    "surName"       : "Ivanov",
    "skills"        : ["HTML", "CSS", "JavaScript"],
    "address"       : {
        "country" : "Bulgaria",
        "town"    : "Plovdiv"
    },
    // methods:
    "applyForJob"   : function(){
        console.log( this.firstName + " is applying for job!")
    }
}

console.log( `fev object: ${developer1}` );