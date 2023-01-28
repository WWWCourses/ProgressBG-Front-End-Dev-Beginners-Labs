let height = 170;
let weight = 68;
let bodyMassIndex = weight/(height**2);
let msg = `Индексът на телесна маса на човек с височина 170 см и тегло 68 кг e ${bodyMassIndex}.`;

console.log(msg);

// document.body.innerHTML = msg;
document.write(msg);