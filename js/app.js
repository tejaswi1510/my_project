/*
  app.js:This file loades all application related logic
  Author: Sai Midhil Chowdary Kari
  Email: midhilkari@gmail.com
*/

//loading loadLandingPage function on load of application
window.onload = loadLandingPage;

/*
  loadLandingPage(): Loads landing page content
  returns content in landing page of the game
*/
function loadLandingPage(){
  console.log("loading landing page content");
  loadSounds();
  var landingPageContent = createLandingPageContent();
  document.body.innerHTML = "";
  document.body.appendChild(landingPageContent);
}

/*
  loadLevelSelectionPage(): Loads level selection page of learning words &
  numbers
  returns lavel section page of learning words & numbers
*/
function loadLevelSelectionPage(){
  console.log("Loading level selection page loaded");
  var levelSelectionPage  = createLevelSelectionPage();
  document.body.innerHTML = "";
  document.body.appendChild(levelSelectionPage);
}

/*
  loadNumbersPage(): Loads numbers learning page
  loads numbers learning page
*/
function loadNumbersPage(){
  console.log("Number's learning section selected");
  var n = numbersPage();
  document.body.innerHTML = "";
  document.body.appendChild(n);
}

/*
  loadNumbersPage(): Loads words learning page
  loads words learning page
*/
function loadWordsPage(){
  console.log("Word's learning section selected");
  var w = wordsPage();
  document.body.innerHTML = "";
  document.body.appendChild(w);
}

//setting no.of levels intially as 0
window.level = 0;
/*
  loadNumbersLevelPage(): Loads numbers number of levls section
*/
function loadNumbersLevelPage(level) {
  console.log("Loading number's level content");
  var numbersLevelContent = createNumbersLevelContent(level);
  document.body.innerHTML = "";
  document.body.appendChild(numbersLevelContent);
}

/*
  loadWordsLevelPage(): Loads words number of levls section
*/
function loadWordsLevelPage(level) {
  console.log("Loading word's level content");
  var wordsLevelContent = createWordsLevelContent(level);
  document.body.innerHTML = "";
  document.body.appendChild(wordsLevelContent);
}
