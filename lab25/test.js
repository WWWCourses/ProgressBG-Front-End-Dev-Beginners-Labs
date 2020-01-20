// Конструктор за обекти от тип Developer. Важно е да бъде извикан с "new"! Поради това конвенцията е името да започва с главна буква.
function Developer( firstName, surName, skills){
    this.firstName = firstName;
    this.surName = surName;
    this.skills = skills;
}
Developer.prototype.greet = function(){
    var skillsStr = this.skills.toString();

    console.log(`Hi, I'm ${this.firstName} ${this.surName}. My strongest skills are ${skillsStr}.`);
}


//сега лесно създаваме обектите от тип Developer:
let developer1 = new Developer("Ivan", "Ivanov",
["HTML", "CSS", "JavaScript"]
);
let developer2 = new Developer("Petar", "Petrov",
["Python"]
);


developer2.greet();

