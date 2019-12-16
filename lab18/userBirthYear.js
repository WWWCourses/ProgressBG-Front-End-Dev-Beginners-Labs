var btnOK = document.querySelector('.btnOK');
btnOK.addEventListener('click', getUserBirthYear)

function getUserBirthYear() {
    let userBirthYear = document.querySelector('.birthYears>input').value;
    console.log(`userBirthYear: ${userBirthYear}`);

    let currentYear = 2019;
    console.log( typeof(userBirthYear) );


    console.log(currentYear + userBirthYear); // note the BUG!
}