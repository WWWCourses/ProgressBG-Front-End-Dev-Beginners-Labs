// TASK:
// create BankAccount constructor:
//     name: string
//     balance: number
function BankAccount(name, bal) {
    this.name = name;
    this.balance = bal;
    this.withdraw = function(x) {
        this.balance = this.balance - x;
    }
}


let peshoAccount = new BankAccount('Pesho', 100);
let mariaAccount = new BankAccount('Maria', 300);

console.log( peshoAccount );
console.log( mariaAccount );


// // Advanced Tasks:
// // create methods
// peshoAccount.withdraw(10);
// peshoAccount.withdraw(10);
// mariaAccount.withdraw(20);
// console.log( peshoAccount.balance ); // 80
// console.log( mariaAccount.balance ); // 280

// // calcAllBalance:
// calcAllBalance(); // 300 + 90