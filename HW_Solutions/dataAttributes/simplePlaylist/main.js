function filterList(list, filterValue) {
	// show an item if filterValue === "all" or item's genre === filterValue
	list.forEach(item => {
		if(item.dataset.genre === filterValue || filterValue==="all"){
			item.style.display="block";
		}else{
			item.style.display="none";
		}
	});
}

let dom = {
	'trackList': document.querySelector('.track-list'),
	'trackListItems': document.querySelectorAll('.track-list>li'),
	'genreOptions':document.querySelector('.genre-options'),
	'audioPlayer':document.querySelector('.audio-player'),
}

// base URL to be used in SoundCloud's iframe
let baseAudioPlayerURL = "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks"

// filter track items by genre selected with a radio input
dom.genreOptions.addEventListener('change',function (e) {
	filterList(dom.trackListItems, e.target.value);
})

// play track on click - this is just a simple demo using Sound Cloud embeded player.
dom.trackList.addEventListener('click', function(e){
	// we need to process only click event on 'LI' elements
	if(e.target.nodeName!=="LI"){ return };

	let trackId = e.target.dataset.id;

	dom.audioPlayer.src = `${baseAudioPlayerURL}/${trackId}&auto_play=true`;
})





