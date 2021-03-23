function logWords() {
	console.log(`wordToGuess: ${wordToGuess}`);
	console.log(`wordToShow: ${wordToShow.join('')}`);
}

let wordToGuess = 'софиояо';
	//  wordToShow = '_o__o_o'

let wordToShow = wordToGuess.replace(/[а-я]/g,'_').split('');
// for (let i = 1; i < wordToGuess.length+1; i++) {
// 	wordToShow.push("_");
// };

function play(letter) {
	let re = new RegExp(letter,"g");

	let matches = wordToGuess.matchAll(re)

	for (const match of matches) {
		wordToShow.splice(match.index,1,letter);
	}

	// if (re.test(wordToGuess)) {
    //     for (let i = 0; i < wordToGuess.length; i++) {
    //         if (wordToGuess[i] === letter) {
    //             wordToShow_.splice(i, 1, letter);
    //         }
    //     }
    // }
}

logWords();

play('о');
logWords();

play('и');
logWords();