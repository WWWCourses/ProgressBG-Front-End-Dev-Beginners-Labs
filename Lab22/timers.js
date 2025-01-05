function greet(userName) {
    console.log(`Hello, ${userName}`);
}

const users = ['Ada', 'Pesho', 'Maria'];
let delay = 2000;

for (let i = 0; i < users.length; i++) {
    const userName = users[i];
    setTimeout(greet, delay, userName);
    delay+=2000;
}