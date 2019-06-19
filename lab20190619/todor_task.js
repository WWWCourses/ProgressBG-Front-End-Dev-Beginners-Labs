var balanceAll=[];
var allAcounts = [];
function BankAccount(name,balance){
    this.name = name;
    this.balance = balance;
    this.withdraw = function(money){
        this.balance = this.balance - money;
    }
    this.deposit = function(money){
        this.balance = this.balance + money;
    }

    balanceAll.push(this.balance);

    allAcounts.push(this);
}

var peshoAccount = new BankAccount(`Pesho`,1000)
var mariaAccount = new BankAccount(`Maria`,1300)
console.log(`Pesho balance : ${peshoAccount.balance}`);
console.log(`Maria balance : ${mariaAccount.balance}`);

peshoAccount.deposit(500);
mariaAccount.withdraw(100);
console.log(`Pesho balance : ${peshoAccount.balance}`);
console.log(`Maria balance : ${mariaAccount.balance}`);


let iepAllPeopleFullBalance = 0;
for (let i = 0; i < allAcounts.length; i++) {
    iepAllPeopleFullBalance +=  allAcounts[i].balance;
}
console.log(`IEP: All people balance : ${iepAllPeopleFullBalance}`);


var allPeopleFullBalance = 0;
for (let i = 0; i < balanceAll.length; i++) {
    allPeopleFullBalance += balanceAll[i];
}
console.log(`All people balance : ${allPeopleFullBalance}`);

// DONE
// DA POKAJA KOLKO PARI IMAT VSICHKI  ????????????????????????????????????????
// ONGOING
// KAK SLED WITHDRAW I DEPOSIT DA SE OPRAVQT STOINOSTITE ??????????????????????????????????