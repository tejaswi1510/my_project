/*
  gameElements.js:This file contains all reusable functions which would be
  called as per the game logic. The functions in this file contains all the
  logic to create the game content
  Author: Sai Midhil Chowdary Kari
  Email: midhilkari@gmail.com
*/

/*
  createLandingPageContent(): Loads landing page content
  This function is called on load from app.js
  This function returns intial landing page of the application
*/
function createLandingPageContent(){
  console.log("Landing page content loaded");
  var mainDiv = createDiv();

  var headerdiv = createDiv();
  headerdiv.classList.add('headerContainer');
  headerdiv.appendChild(createSpeakerIcon());
  mainDiv.appendChild(headerdiv);

  //creating title division
  var titleDiv = createDiv();
  titleDiv.classList.add('titleContainer');
  var mainHeading = createHeading1(titlesData.gameTitle);
  //Appending title division"
  titleDiv.appendChild(mainHeading);

  //Creating start button div
  var startDiv = createDiv();
  startDiv.classList.add('mainContainer');
  //creating let's ;earn button
  var loadPageButton = createButton(titlesData.gameStartButton);
  startDiv.appendChild(loadPageButton);
  loadPageButton.setAttribute('onclick','loadLevelSelectionPage()');

  mainDiv.appendChild(titleDiv);
  mainDiv.appendChild(startDiv);

  return mainDiv;
}

/*
  createLevelSelectionPage(): Loads level selection page content of
  learning words & learning numbers page
  This function returns level selection page of the application
*/
function createLevelSelectionPage(){
  console.log("Level selection page loaded");
  var levelSelectionPageDiv = createDiv();

  var headerdiv = createDiv();
  headerdiv.classList.add('headerContainer');

  //creating back button
  var backButtonDiv = createDiv();
  var levelPageBackButton = createButton(titlesData.backButton);
  backButtonDiv.classList.add('backButtonContainer');
  backButtonDiv.appendChild(levelPageBackButton);
  levelPageBackButton.setAttribute('onclick','loadLandingPage()');
  headerdiv.appendChild(backButtonDiv);

  //appending speaker to header division
  headerdiv.appendChild(createSpeakerIcon());
  levelSelectionPageDiv.appendChild(headerdiv);

  //creating learn word's button
  var levelSelectionDiv = createDiv();
  levelSelectionDiv.classList.add('levelSelectionContainer');
  var wordSelectionButton = createButton(titlesData.wordsLearningButton);
  levelSelectionDiv.appendChild(wordSelectionButton);
  wordSelectionButton.setAttribute('onclick','loadWordsPage()');

  //creating learn number's button
  var numberSelectionButton = createButton(titlesData.numbersLearningButton);
  levelSelectionDiv.appendChild(numberSelectionButton);
  numberSelectionButton.setAttribute('onclick','loadNumbersPage()');
  levelSelectionPageDiv.appendChild(levelSelectionDiv);

  return levelSelectionPageDiv;
}

/*
  numbersPage(): Loads numbers page content
  This function returns numbers page content with number of levels present in
  numbers learning selection
  The level's buttons retrieves to respective level's content on click of
  selected level
*/
function numbersPage(){
  console.log("Number's learning page loaded");
  var numbersPageDiv = createDiv();

  var headerdiv = createDiv();
  headerdiv.classList.add('headerContainer');

  //creating back button retrieving to level selection page
  var backButtonDiv = createDiv();
  var levelPageBackButton = createButton(titlesData.backButton);
  backButtonDiv.classList.add('backButtonContainer');
  backButtonDiv.appendChild(levelPageBackButton);
  levelPageBackButton.setAttribute('onclick','loadLevelSelectionPage()');
  headerdiv.appendChild(backButtonDiv);
  //appending speaker to header division
  headerdiv.appendChild(createSpeakerIcon());
  numbersPageDiv.appendChild(headerdiv);

  var numbersPageMainDiv = createDiv();
  numbersPageMainDiv.classList.add('numbersPageMainContainer');

  /*
    creating no.of levels in the application dynamically configured from
    config.js
  */
  for(var i=1; i <= config.numberOfLevels; i++) {
   var numbersPageLevelDiv = createDiv();
   numbersPageLevelDiv.classList.add('levelButtonContainer');
   var numbersPageLevelButton = createButton("Level "+i);
   numbersPageLevelDiv.appendChild(numbersPageLevelButton);
   //appending level number
   numbersPageLevelButton.setAttribute('onclick','loadNumbersLevelPage('+i+')');
   numbersPageLevelButton
   numbersPageLevelDiv.appendChild(numbersPageLevelButton);
   numbersPageMainDiv.appendChild(numbersPageLevelDiv);
   numbersPageMainDiv.appendChild(createBreakLine());
  }

  numbersPageDiv.appendChild(numbersPageMainDiv);
  return numbersPageDiv;
}

/*
  createNumbersLevelContent(): Loads levl content of numbers lerning section
  This function returns content of each level selected
*/
function createNumbersLevelContent(level) {

  console.log("Number's level content created");

  //toggling music from levelUp music to background music
  if(speakerImage === 'speakerOn'){
      sounds.levelUp.pause();
      sounds.levelUp.currentTime = 0.0;
      sounds.game.loop = true;
      sounds.game.play();
    }

  var numbersLevelPageDiv = createDiv();

  var headerdiv = createDiv();
  headerdiv.classList.add('headerContainer');

  //creating back button
  var backButtonDiv = createDiv();
  var levelPageBackButton = createButton(titlesData.backButton);
  backButtonDiv.classList.add('backButtonContainer');
  backButtonDiv.appendChild(levelPageBackButton);
  levelPageBackButton.setAttribute('onclick','loadNumbersPage()');
  headerdiv.appendChild(backButtonDiv);

  //appending speaker to header division
  headerdiv.appendChild(createSpeakerIcon());
  numbersLevelPageDiv.appendChild(headerdiv);

  var questionAnswerContainer = createDiv();

  //craating question container
  var questionContainer= createDiv();
  questionContainer.classList.add('questionContainer');
  //updating the question
  updateNumberQuestion(level, questionContainer);

  //creating answer container
  var answerContainer = createDiv();
  answerContainer.classList.add('answerContainer');
  //creating text input field to get answer from the user
  var answerInputField = createTextInput();
  answerInputField.setAttribute('id', 'answerInput');
  answerContainer.appendChild(answerInputField);

  var result = createDiv();
  result.setAttribute('id', 'result');
  answerContainer.appendChild(result);

  //creating check button
  var check = createButton(titlesData.check);
  //calling function to cheeck if answer entered is correct or not
  check.setAttribute('onclick','checkNumbersAnswerEntered('+level+')');
  answerContainer.appendChild(check);

  questionAnswerContainer.appendChild(questionContainer);
  questionAnswerContainer.appendChild(answerContainer);
  numbersLevelPageDiv.appendChild(questionAnswerContainer);

  return numbersLevelPageDiv;
}

/*
  creating empty arrays of current question and questoins asked into which
  questions are to be loaded upon exection of the application
*/
var numbersQuestionsAsked = [];
var numbersCurrentQuestion = {};

/*
  updateNumberQuestion(): This function updates questions of the numbers
  section. It loads questions for respective level's and moves the user to next
  level upon completion of current level's questions
*/
function updateNumberQuestion(level, questionEle) {
  var questionsLeft = false;
  /*
  shuffling question present in the numbersQuestions arrray to avoid questions
  presenting in the same order repeatedly
  */
  var shuffledNumbersQuestions = shuffle(numbersQuestions);
  for(var i=0; i< shuffledNumbersQuestions.length; i++) {
    if(shuffledNumbersQuestions[i].level === level &&
      !numbersQuestionsAsked.includes(shuffledNumbersQuestions[i].questionId)) {
      numbersCurrentQuestion = shuffledNumbersQuestions[i];
      numbersQuestionsAsked.push(shuffledNumbersQuestions[i].questionId);
      questionsLeft = true;
      break;
    }
  }

  if(!questionsLeft) {
    questionsLeft = [];
    numbersLevelClearedAnimation(level);
    return;
  }

  var quescontainer = createDiv(numbersCurrentQuestion.question);
  questionEle.innerHTML = '';
  questionEle.appendChild(quescontainer);
}

/*
  numbersLevelClearedAnimation(): This function creates leveUp page & toggles
  music from background music to levelUP music and returns button to move to
  next level
  returns LeveledUp page
*/
function numbersLevelClearedAnimation(level){

  document.body.innerHTML="";
  var nextLevelDiv = createDiv();
  nextLevelDiv.classList.add('levelClearedContainer');
  var subDiv = createDiv();
  subDiv.classList.add('levelClearedSubContainer');
  var nextLevel = createHeading1(titlesData.leveledUp);
  //creating button to move to next level
  var nextLevelButton = createButton(titlesData.nextLevel);
  nextLevelButton.setAttribute('onclick','loadNumbersLevelPage('+(level+1)+')');
  subDiv.appendChild(nextLevel);
  subDiv.appendChild(nextLevelButton);

  nextLevelDiv.appendChild(subDiv);
  nextLevelDiv.classList.add('won');
  //toggling music from bakground music to levelUP music
  if(speakerImage === 'speakerOn'){
      sounds.game.pause();
      sounds.game.currentTime = 0.0;
      sounds.levelUp.loop = true;
      sounds.levelUp.play();
    }
  document.body.appendChild(nextLevelDiv);


}

/*
  checkNumbersAnswerEntered(): This function checks if the answer entered by the
  user is correct or not and returns next question if it is correct and
  displays "Wrong" if it is not
*/
function checkNumbersAnswerEntered(level){
  console.log("Checking answer entered");
  var enteredName = document.getElementById('answerInput').value;
  var result = document.getElementById('result');
  if(enteredName.toLowerCase() === numbersCurrentQuestion.answer){
    result.innerHTML = "Correct Answer";
    console.log("Entered answer is correct!");
    document.getElementById('answerInput').value = "";
    var question = document.getElementsByClassName('questionContainer')[0];
    updateNumberQuestion(level, question);
  } else {
    result.innerHTML = titlesData.wrongAnswer;
    console.log("Entered answer is wrong!");
    //wrongAnswer();

  }
}

/*
  wordsPage(): Loads words page content
  This function returns words page content with number of levels present in
  words learning selection
  The level's buttons retrieves to respective level's content on click of
  selected level
*/
function wordsPage(){
  console.log("Word's learning page loaded");
  var wordsPageDiv = createDiv();

  var headerdiv = createDiv();
  headerdiv.classList.add('headerContainer');

  //creating back button
  var backButtonDiv = createDiv();
  var levelPageBackButton = createButton(titlesData.backButton);
  backButtonDiv.classList.add('backButtonContainer');
  backButtonDiv.appendChild(levelPageBackButton);
  levelPageBackButton.setAttribute('onclick','loadLevelSelectionPage()');
  headerdiv.appendChild(backButtonDiv);
  //appending speaker icon
  headerdiv.appendChild(createSpeakerIcon());
  wordsPageDiv.appendChild(headerdiv);

  var wordsPageMainDiv = createDiv();
  wordsPageMainDiv.classList.add('wordsPageMainContainer');
  /*var wordsPagePara = createPara("This is words page");
  wordsPageMainDiv.appendChild(wordsPagePara);*?

  /*
    creating no.of levels in the application dynamically configured from
    config.js
  */
  for(var i=1; i <= config.numberOfLevels; i++) {
   var wordsPageLevelDiv = createDiv();
   wordsPageLevelDiv.classList.add('levelButtonContainer');
   //creating level's button's
   var wordsPageLevelButton = createButton("Level "+i);
   wordsPageLevelDiv.appendChild(wordsPageLevelButton);
   //routing to level content
   wordsPageLevelButton.setAttribute('onclick','loadWordsLevelPage('+i+')');
   wordsPageLevelDiv.appendChild(wordsPageLevelButton);
   wordsPageMainDiv.appendChild(wordsPageLevelDiv);
   wordsPageMainDiv.appendChild(createBreakLine());
  }

  wordsPageDiv.appendChild(wordsPageMainDiv);
  return wordsPageDiv;
}

/*
  createWordsLevelContent(): Loads level content of words lerning section
  This function returns content of each level selected
  returns words no.of levels page
*/
function createWordsLevelContent(level) {
  console.log("Word's level content created");

  //toggling music from levelUp to background music
  if(speakerImage === 'speakerOn'){
      sounds.levelUp.pause();
      sounds.levelUp.currentTime = 0.0;
      sounds.game.loop = true;
      sounds.game.play();
    }

  var wordsLevelPageDiv = createDiv();

  var headerdiv = createDiv();
  headerdiv.classList.add('headerContainer');

  //creating back button
  var backButtonDiv = createDiv();
  var levelPageBackButton = createButton(titlesData.backButton);
  backButtonDiv.classList.add('backButtonContainer');
  backButtonDiv.appendChild(levelPageBackButton);
  levelPageBackButton.setAttribute('onclick','loadWordsPage()');
  headerdiv.appendChild(backButtonDiv);

  //appending speaker icon to header container
  headerdiv.appendChild(createSpeakerIcon());
  wordsLevelPageDiv.appendChild(headerdiv);

  //creating question scontainer
  var questionContainer= createDiv();
  questionContainer.classList.add('questionContainer');
  updateWordQuestion(level, questionContainer);

  //creating answer container
  var answerContainer = createDiv();
  answerContainer.classList.add('answerContainer');
  var answerInputField = createTextInput();
  answerInputField.setAttribute('id', 'answerInput');
  answerContainer.appendChild(answerInputField);
  var result = createDiv();
  result.setAttribute('id', 'result');
  answerContainer.appendChild(result);

  //creating check button
  var check = createButton(titlesData.check);
  check.setAttribute('onclick','checkWordsAnswerEntered('+level+')');

  answerContainer.appendChild(check);

  wordsLevelPageDiv.appendChild(questionContainer);
  wordsLevelPageDiv.appendChild(answerContainer);

  return wordsLevelPageDiv;
}


/*
  creating empty arrays of current question and questoins asked into which
  questions are to be loaded upon exection of the application
*/
var wordsQuestionsAsked = [];
var wordsCurrentQuestion = {};

/*
  updateWordQuestion(): This function updates questions of the words
  section. It loads questions for respective level's and moves the user to next
  level upon completion of current level's questions
*/
function updateWordQuestion(level, questionEle) {

  var questionsLeft = false;
  var shuffledWordsQuestions = shuffle(wordsQuestions);
  for(var i=0; i< shuffledWordsQuestions.length; i++) {
    if(shuffledWordsQuestions[i].level === level &&
      !wordsQuestionsAsked.includes(shuffledWordsQuestions[i].questionId)) {
      wordsCurrentQuestion = shuffledWordsQuestions[i];
      wordsQuestionsAsked.push(shuffledWordsQuestions[i].questionId);
      questionsLeft = true;
      break;
    }
  }

  if(!questionsLeft) {
    questionsLeft = [];
    wordsLevelClearedAnimation(level);
    //loadWordsLevelPage(level+1);
    return;
  }

  var quescontainer = createDiv(wordsCurrentQuestion.question);
  questionEle.innerHTML = '';
  questionEle.appendChild(quescontainer);
  if(wordsCurrentQuestion.imageUrl!=""){
    var imageDiv = createDiv();
    imageDiv.classList.add('imageContainer');
    var image = createImage("Image Not Found", wordsCurrentQuestion.imageUrl);
    imageDiv.appendChild(image);
    questionEle.appendChild(imageDiv);
  }
}

/*
  wordsLevelClearedAnimation(): This function creates leveUp page & toggles
  music from background music to levelUP music and returns button to move to
  next level
  returns leveledUp page
*/
function wordsLevelClearedAnimation(level){

  document.body.innerHTML="";
  var nextLevelDiv = createDiv();
  nextLevelDiv.classList.add('levelClearedContainer');

  var subDiv = createDiv();
  subDiv.classList.add('levelClearedSubContainer');
  var nextLevel = createHeading1(titlesData.leveledUp);
  var nextLevelButton = createButton(titlesData.nextLevel);
  nextLevelButton.setAttribute('onclick','loadWordsLevelPage('+(level+1)+')');
  subDiv.appendChild(nextLevel);
  subDiv.appendChild(nextLevelButton);

  nextLevelDiv.appendChild(subDiv);
  nextLevelDiv.classList.add('won');
  if(speakerImage === 'speakerOn'){
      sounds.game.pause();
      sounds.game.currentTime = 0.0;
      sounds.levelUp.loop = true;
      sounds.levelUp.play();
    }
  document.body.appendChild(nextLevelDiv);
}

/*
  checkWordsAnswerEntered(): This function checks if the answer entered by the
  user is correct or not and returns next question if it is correct and
  displays "Wrong" if it is not
*/
function checkWordsAnswerEntered(level){
  console.log("Checking answer entered");
  var enteredName = document.getElementById('answerInput').value;
  var result = document.getElementById('result');
  if(enteredName.toLowerCase() === wordsCurrentQuestion.answer){
    result.innerHTML = "Correct Answer";
    //clearing entered answer before moving to next question
    document.getElementById('answerInput').value = "";
    console.log("Entered anser is correct");
    var question = document.getElementsByClassName('questionContainer')[0];
    updateWordQuestion(level, question);
  } else {
    result.innerHTML = titlesData.wrongAnswer;
    console.log("Entered answer is wrong!!");

  }
}
