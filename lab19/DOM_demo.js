document.querySelector('.btn').addEventListener('click', getUserAge);

// function to be executed on OK click:
function getUserAge() {
    var userAge = document.querySelector('.age').value;

    // console.log( userAge === 18 );
    // console.log( userAge == 18 );

    if( userAge === 18){
        console.log(`User is 18 years old!`);
    }else if(userAge >= 18){
        console.log(`User is adult`);

    }else{
        console.log(`User is child!`);

    }
}


