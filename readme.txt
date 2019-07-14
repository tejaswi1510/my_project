--------------------------------------------------------------------------------
                  Name : Sai Midhil Chowdary Kari
                    Email : midhilkari@gmail.com
--------------------------------------------------------------------------------


--------------------------------------------------------------------------------
APPLICATION NAME  :       LEARN IT
Developer         :       Sai Midhil Chowdary Kari
--------------------------------------------------------------------------------

OVERVIEW :

LEARN IT is a web app targeting age group of 4 - 9 years kids. This game tries
to train up the player's mind by taking them through different levels of
constructively increasing difficulty. This game consists of learning modules for
NUMBERS & WORDS. Each module consists of seven levels currently and the player
can get access to any level. The difficulty in questions increases with increase
in levels. The colour mix used in the game is carefully selected keeping in mind
the targeted age group for the game resulting in less strain on their eyes. This
application pre-assumes basic knowledge of mathematics and general english words.

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------


                        DIFFERENT GAME PAGES
--------------------------------------------------------------------------------

landingPage : This is the page user views when the game is loaded. The title and
the start button would be sitting in this page.

levelSelectionPage : This is the page user retrieves into when he clicks on the
"Let's Learn" button i.e, when the player starts playing game. Here in this page
the player would get option to choose from two options of learning  WORDS or
NUMBERS. Subjective to the choice of the player's selection of learning words or
numbers would be retrieved to level selection page.

levelContent : In each sections of learning, respective level related questions
would be displayed on the screen to be answered by the player. If the entered
answer is correct player would encounter the next question or else would be
getting reply of "Wrong Answer". If all the question's in a particular level are
cleared then player would be moved to next level and would face a bit more
critical questions.

--------------------------------------------------------------------------------


                            MAJOR FEATURES
--------------------------------------------------------------------------------

- Currently there are seven levels in each of the learning modules.
- A speaker button would be present on top right corner through out the game in
  the same position. It can be toggled to turn music ON or OFF.
- Number of levels can be configured from the "config.js" file directly. Change
  in number of levels in this file would reflect directly in the game. So any
  person with no knowledge about the code can configure number of levels to be
  present in the game.
- The data used in the game is loaded from a separate JS file so that the
  questions & answers data can be directly modified from the data
  file(question.js).
- The content on every button, heading, paragraph is loaded dynamically from the
  "tittlesData.js" file. SO to change any content in the page can be done
  directly form here.
- Applauding music is played after every level cleared to cheer up the user.


--------------------------------------------------------------------------------


                    TECHNICAL REFERENCES FOR DEVELOPERS
--------------------------------------------------------------------------------

- config.js : Number of levels to be present in the game can be configured from
  here.
- questions.js : All the questions & answers data is present in this file.
- app.js : All the game level logical code is present in this file.
- gameElements.js : All the logical code of the game pages content is present in
  this file. All  the logic for to get level respective content is developed
  here.
- ui.js : All the elements used in the game are generated here and are re-used
  in various parts of the code when ever required.
- titlesData.js : All the content displayed on different elements of the game
  are populated here.
- licenses.txt : All the attributions for all the content used in the game are
  present here.
- settings.js : The logic for toggling music is present in this file.

--------------------------------------------------------------------------------


                              USEFUL FUNCTIONS
--------------------------------------------------------------------------------

- loadLandingPage(): Loads the landing page content of the game. The title and
  the start button will be created in this function.
  This in turn calls createLandingPageContent() function to create aforesaid
  content.

- loadLevelSelectionPage(): Loads level selection page of learning words &
  numbers modules.
  This in turn calls createLevelSelectionPage() function to create aforesaid
  content.

- loadNumbersPage(): Loads numbers page with the all level options to be played
  by the user.
  This in turn calls numbers() function to create aforesaid
  content.

- loadWordsPage(): Loads words page with the all level options to be played
  by the user.
  This in turn calls words() function to create aforesaid
  content.

- loadNumbersLevelPage(): Loads respective level content in the numbers module.
  This in turn calls createNumbersLevelContent() function to create aforesaid
  content.

- loadWordsLevelPage(): Loads respective level content in the numbers module.
  This in turn calls createWordsLevelContent() function to create aforesaid
  content.

- updateNumberQuestion(): This function updates the questions after answering
  each question. It ensures to not repeat same questions and to levlUP user
  after answering all the questions in particular level.

- numbersLevelClearedAnimation(): This function loads the animation that is
  generated after clearing each level.

- updateWordQuestion(): This function updates the questions after answering
  each question. It ensures to not repeat same questions and to levlUP user
  after answering all the questions in particular level.

- wordsLevelClearedAnimation(): This function loads the animation that is
  generated after clearing each level.

--------------------------------------------------------------------------------
ui.js : It contains all the functions that creates elements that are used all
through the game.
- createDiv(): Creates Division.
- createPara(): Creates paragraph.
- createImage(): Creates Image.
- createTextInput(): Creates text input box.
- createButton(): Creates button.
- createBreakLine(): Creates break line.
--------------------------------------------------------------------------------

                                  NOTES
- Keeping in time constraints in mind, a very limited data & levels are included
  in this game. But, further levels & questions can be easily configured from
  the config.js & questionsData.js files by anyone with no programming knowledge.
- All the colours used in this game are developed keeping target age group
  audience in mind!!

  --------------------------------------------------------------------------------
