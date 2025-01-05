// докато функцията alert() не приключи изпълнението си, нито един ред след нея няма да се изпълни:
// alert(`1`);// blocking

// console.log(`2`);

// // 10:30:00:100
// setTimeout(function(){
//     console.log(`1`); // 10:30:01:100
// },2000)// non-blocking

// // 10:30:00:102
// setTimeout(function(){
//     console.log(`2`);
// },4000)// non-blocking

// console.log(`3`);

// //// 10:30:01:200 => '3'
// // 10:30:03:200 => 1
// // 10:30:05:200 => 2


