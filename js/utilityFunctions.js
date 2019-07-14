/*
  utilityFunction.js: This file contains all the logical functions used in the
  application
*/

/*
  shuffle(array): This function shuffle's the elements in the array. This is
  used to shuffle questions avoiding them to populate them in the same order
  the level is selected
  URL: https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
*/
function shuffle(array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
  
	return array;

};
