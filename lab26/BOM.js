let userPlatform = navigator.platform;



// "Linux x86_64"
// "Linux x36_64"
if( userPlatform[0].toLowerCase() === "L".toLowerCase() ){
    console.log(`Linux`);
}else if( userPlatform[0] === "W"){
    console.log(`Windows`);
}else if( userPlatform[0] === "M"){
    console.log(`Mac`);
}