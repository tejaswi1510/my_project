/*
  settings.js: This file consists of functions that handle music setting in the
  application
  Author: Sai Midhil Chowdary Kari
  Email: midhilkari@gmail.com
*/

/*
  loadSounds(): This function loades music tracks used in the application
*/
function loadSounds() {
  //Loading the music into global variable sounds
  window.sounds = {
    "game": new Audio("sounds/backgroundMusic.mp3"),
    "levelUp": new Audio("sounds/levelUp.mp3"),
  }
  //The speaker image to be shown when speaker is on
  window.musicOn = createImage('Image Not Found','images/speakerOn.svg');
  //Event handler to toggle music on click of the icon
  musicOn.onclick = toggleMusic;
  //The speaker image to be shown when speaker is off
  window.musicOff = createImage('Image Not Found','images/speakerOff.svg');
  //Event handler to toggle music on click of the icon
  musicOff.onclick = toggleMusic;
}

window.speakerImage = 'speakerOff';
/*
  toggleMusic(): This function turns music ON when the speakerOn icon is
  clicked & turns music OFF when speakerOff icon is clicked
*/
function toggleMusic(){
  //If speaker is of condition then on click make it on and start music
  if(speakerImage === 'speakerOff'){
    //Change speakerImage to speakerOn
    speakerImage = 'speakerOn';
    //Start the game music in loop
    sounds.game.loop = true;
    sounds.game.play();
    //Empty the speaker div
    document.getElementById('speaker').innerHTML = '';
    //Append music on icon
    var speakerOnDiv = createDiv();
    speakerOnDiv.classList.add('speakerCOntainer');
    document.getElementById('speaker').appendChild(musicOn);
  } else {
    //Change speakerImage to speakerOff
    speakerImage = 'speakerOff';
    //If music is turned on stop it
    //Turn off level up music if its on
    if(sounds.levelUp != undefined){
      sounds.levelUp.pause();
      sounds.levelUp.currentTime = 0.0;
    }
    //Turn off game music if its on
    if(sounds.game != undefined){
      sounds.game.pause();
      sounds.game.currentTime = 0.0;
    }
    //Clear the content in speaker container
    document.getElementById('speaker').innerHTML = '';
    //Append music off icon
    var speakerOffDiv = createDiv();
    speakerOffDiv.classList.add('speakerCOntainer');
    document.getElementById('speaker').appendChild(musicOff);

  }
}

/*
  createSpeakerIcon(): This function creates speakerON & speakerOff icons and
  turns music tracks playing when the icons were clicked
*/
function createSpeakerIcon() {
  //Creates a division to hold the speaker
  var speakerDiv = createDiv();
  //Setting an ID for easy toggling of image on music change
  speakerDiv.setAttribute('id','speaker');
  //Adding the speaker image as per the music is on or off currently
  var speakerImg = createImage('Image Not Found','images/'+speakerImage+'.svg');
  speakerImg.classList.add('headerIcon');
  //Adding event handler to toggle music when clicking on the speaker icon
  speakerImg.onclick = toggleMusic;
  //Appending the speaker image to the speaker container
  speakerDiv.appendChild(speakerImg);
  //returning the element with speaker content
  return speakerDiv;
}
