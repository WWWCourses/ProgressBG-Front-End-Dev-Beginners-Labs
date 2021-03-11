let str = '359';

let re = /^\+?359/; // from 0 times till endlesss

if ( re.test(str) ){
	console.log(`Yes`);
}else{
	console.log(`No`);
}

// /a/ => 'a'
// /ab/ => 'ab'
//[ab]/ => 'a', 'b'
//[abc]/ => /a/, /b/, /c/