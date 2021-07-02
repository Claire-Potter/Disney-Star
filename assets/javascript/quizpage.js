/* jshint esversion: 6 */
// Generate Character Name
/** Fetches 'character' and 'character-image' data chosen by the user and stored in local storage.
 * Adds the data to the character-name and character-logo areas.
 * Default name and image set incase user does not select a character or if there is an error storing or retrieving the data.
 * Code for using local storage found on https://www.w3schools.com/html/html5_webstorage.asp and edited for purpose.
 */

 if (localStorage.getItem('character') && (localStorage.getItem('character-image-area'))) {
    document.getElementById('character-name').innerHTML = localStorage.getItem('character');
    document.getElementById('character-logo').innerHTML = localStorage.getItem('character-image-area');
 } else {
 
    document.getElementById('character-name').innerHTML = 'DisneyStar';
    document.getElementById('character-logo').innerHTML = `<img src= 'assets/images/site-images/disney-icon.jpg' alt = 'DisneyStar' >`;
 }
 
 // Quiz Section //
 /** A series of tutorial videos starting from video two up until video five were utilised as a guideline to create this quiz.
  * Here is the link to the second video https://www.youtube.com/watch?v=QU6z69P5BrU&t=0s. The links to the additional.
  * videos are available within the about section underneath the above video.
  * The videos are created by The WebShala Channel https://www.youtube.com/channel/UC94lpQZvaokkIqU-TvtsGXQ.
  * As far as possible I have tried to indicate which sections of code are created as per the tutorial and which sections are adapted
  * and which sections are created by me.
  */
 
 // Create constants for html input within the quiz.
 // Created whilst following the WebShala tutorial, Ids per my html.
 const questionNumbers = document.getElementById('question-number');
 const writtenQuestions = document.getElementById('written-question');
 const pictureOne = document.getElementById('picture-one');
 const pictureTwo = document.getElementById('picture-two');
 const pictureThree = document.getElementById('picture-three');
 const pictureFour = document.getElementById('picture-four');
 const audioQuestions = document.getElementById('audio-question');
 const answersIndicatorContainer = document.getElementById('answers-indicator');
 const pictureQuestionsFile = 'assets/images/pictureQuestions/';
 const submitButton = document.getElementById('submit-question');
 const startQuiz = document.getElementById('start-quiz');
 const optionContainer = document.querySelector('.option-container');
 const homeBox = document.getElementById('ready-to-start');
 const quizBox = document.getElementById('quiz-box');
 const resultBox = document.getElementById('result-box');
 const certificateBox = document.querySelector('.certificate');
 const resultDescriptor = document.querySelector('.result-description');
 const restartQuiz = document.querySelector('#restart-quiz');
 const questionLimit = 25;
 // set the initial values;
 let questionCounter = 0;
 let currentQuestion;
 let availableQuestions = [];
 let availableOptions = [];
 let correctAnswers = 0;
 let attempt = 0;
 
 
 /**Questions and Answers array for the quiz with objects to populate html with.
  * This was created by me. 
  * https://www.sitepoint.com/simple-javascript-quiz/ was referenced for the structure of the array.
  */
 
 const quiz = [{
       q: 'What year did Disneyland open?​',
       audio: '/assets/audio/whatADreamPlace.mp3',
       options: ['1951', '1957', '1953', '1955', ],
       optionsImages: ['disneyLand1.jpg', 'disneyLand2.jpg', 'disneyLand3.jpg', 'disneyLand4.jpg', ],
       imageTitles: ['The opening day at Disneyland', 'Mickey and Minnie Mouse with two children', 'Walt Disney at Disneyland', 'A Disneyland Parade', ],
       answer: 3,
    },
    {
       q: 'Who was the first cartoon character to get a star on the Hollywood Walk of Fame?​',
       audio: '/assets/audio/waltDisneyAsMickeyMouse.mp3',
       options: ['Snow White', 'Mickey Mouse', 'Donald Duck', 'Cinderella', ],
       optionsImages: ['snowWhite.png', 'mickeyMouse.png', 'donaldDuck.png', 'cinderellaPoor.png', ],
       imageTitles: ['Snow White', 'Mickey Mouse', 'Donald Duck', 'Cinderella', ],
       answer: 1,
    },
    {
       q: 'How many brothers does Prince Hans of the Southern Isles have in Frozen?​​',
       audio: 'assets/audio/frozenPrinceHans.mp3',
       options: ['12', '7', '15', '5', ],
       optionsImages: ['hansAnna.png', 'hansElsa.png', 'hansKristoff.png', 'hansAnnaPunch.png', ],
       imageTitles: ['Hans with Anna', 'Hans with Elsa', 'Hans with Kristoff', 'Anna punches Hans', ],
       answer: 0,
    },
    {
       q: 'What was the name of Walt Disney’s first cartoon character?​​',
       audio: 'assets/audio/uhOhICantBelieveIt.mp3',
       options: ['Ralph', 'Donald Duck', 'Oswald the Lucky Rabbit', 'Mickey Mouse', ],
       optionsImages: ['ralph.png', 'donaldDuck.png', 'oswaldTheLuckyRabbit.png', 'mickeyMouse.png', ],
       imageTitles: ['Ralph', 'Donald Duck', 'Oswald the Lucky Rabbit', 'Mickey Mouse', ],
       answer: 2,
    },
    {
       q: 'Who trained Hercules to be a hero?',
       audio: '/assets/audio/herculesIWantToBecomeAHero.mp3',
       options: ['Pygmalion', 'Philoctetes', 'Prometheus', 'Parentheses', ],
       optionsImages: ['hercules1.png', 'hercules2.png', 'hercules3.png', 'hercules4.png', ],
       imageTitles: ['A short goat man', 'A short goat man eating grapes', 'Hercules, Pegasus and the goat man', 'Hercules shooting the goat man', ],
       answer: 1,
    },
    {
       q: 'What is the name of Ariel and Prince Eric’s daughter?​',
       audio: '/assets/audio/arielTheLittleMermaid.mp3',
       options: ['Marina', 'Alanna', 'Oceana', 'Melody', ],
       optionsImages: ['daughterFriends.png', 'arielDaughter.png', 'ericDaughter.png', 'arielAndHerDaughter.png', ],
       imageTitles: ['Girl with a penguin and a walrus', 'Ariel and Eric Daughter', 'Eric and Daughter', 'Ariel and her daughter'],
       answer: 3,
    },
    {
       q: 'What is the name of the castle in Shanghai Disneyland Park?​',
       audio: '/assets/audio/mushuFromMulan.mp3',
       options: ['Cinderella Dream Castle', 'Atlantis', 'The Enchanted Storybook Castle', 'Shanghai Palace of Mystery', ],
       optionsImages: ['castleShanghai1.jpg', 'castleShanghai2.jpg', 'castleShanghai3.jpg', 'castleShanghai4.jpg', ],
       imageTitles: ['The castle at Disneyland Shanghai', 'The castle at Disneyland Shanghai', 'The castle at Disneyland Shanghai', 'The castle at Disneyland Shanghai', ],
       answer: 2,
    },
    {
       q: 'Which Disney Princess sings “Once Upon a Dream”?​​',
       audio: '/assets/audio/onceUponADreamAurora.mp3',
       options: ['Cinderella', 'Snow White', 'Belle, Beauty and the Beast', 'Aurora, Sleeping Beauty', ],
       optionsImages: ['cinderella.png', 'snowWhite.png', 'belle.png', 'aurora.png', ],
       imageTitles: ['Cinderella', 'Snow White', 'Belle, Beauty and the Beast', 'Aurora, Sleeping Beauty', ],
       answer: 3,
    },
    {
       q: 'Emperor Kuzco turns into what animal in The Emperor’s New Groove?',
       audio: '/assets/audio/kuzcoEmperorsNewGroove.mp3',
       options: ['Llama', 'Camel', 'Alpaca', 'Vicuna', ],
       optionsImages: ['kuzco1.png', 'kuzco2.png', 'kuzco3.png', 'kuzco4.png', ],
       imageTitles: ['Emperor Kuzco', 'Animal Kuzco', 'Kuzco and friend', 'Animal Kuzco', ],
       answer: 0,
    },
    {
       q: 'Which of these frisky felines is the beloved companion of Alice in Wonderland?',
       audio: '/assets/audio/aliceInWonderland.mp3',
       options: ['Tibbs', 'Dinah', 'Marie', 'Toulouse', ],
       optionsImages: ['tibbs.png', 'dinah.png', 'marie.png', 'toulouse.png', ],
       imageTitles: ['Tibbs', 'Dinah', 'Marie', 'Toulouse', ],
       answer: 1,
    },
    {
       q: 'Disney has recently made many live action versions of our favourite Disney Movies. Which of these couples do not feature in a live action film?',
       audio: '/assets/audio/annaAndHansFrozen.mp3',
       options: ['Cinderella and Prince Charming', 'Belle and Beast', 'Princess Anna and Prince Hans', 'Aladdin and Princess Jasmine', ],
       optionsImages: ['cinderellaAndPrinceDancing.png', 'belleAndBeast.png', 'annaHansDance.png', 'aladdinAndJasmine.png', ],
       imageTitles: ['Cinderella and Prince Charming', 'Belle and Beast', 'Princess Anna and Prince Hans', 'Aladdin and Princess Jasmine', ],
       answer: 2,
    },
    {
       q: 'This super hero is set to feature in a new full length feature coming out July 2021, select the correct hero:',
       audio: '/assets/audio/blackWidowTheAvengers.mp3',
       options: ['Captain America', 'Captain Marvel', 'Black Widow', 'Thor', ],
       optionsImages: ['captainAmerica.png', 'captainMarvel.png', 'blackWidow.png', 'thor.png', ],
       imageTitles: ['Captain America', 'Captain Marvel', 'Black Widow', 'Thor', ],
       answer: 2,
    },
    {
       q: 'The late Robin Williams voiced this beloved character who brought much comic relief to the film:',
       audio: 'assets/audio/aladdinGenie.mp3',
       options: ['Baymax', 'Lightning McQueen', 'Genie', 'Mad Hatter', ],
       optionsImages: ['baymax.png', 'lightningMcqueen.png', 'genie.png', 'madHatter.png', ],
       imageTitles: ['Baymax', 'Lightning McQueen', 'Genie', 'Mad Hatter', ],
       answer: 2,
    },
    {
       q: 'This little fellow was separated from his mama at the beginning of the movie, luckily they were reunited:',
       audio: 'assets/audio/dumbo.mp3',
       options: ['Dumbo', 'Thumper', 'Chip', 'Bambi', ],
       optionsImages: ['dumboFlying.png', 'thumper.png', 'chip.png', 'bambi.png', ],
       imageTitles: ['Dumbo', 'Thumper', 'Chip', 'Bambi', ],
       answer: 0,
    },
    {
       q: 'Which of these characters made quite a spectacle when he thought the sky was falling?',
       audio: 'assets/audio/chickenLittle.mp3',
       options: ['Dormouse', 'Hulk', 'Flik', 'Chicken Little', ],
       optionsImages: ['dormouse.png', 'hulk.png', 'flik.png', 'chickenLittle.jpg', ],
       imageTitles: ['Dormouse', 'Hulk', 'Flik', 'Chicken Little', ],
       answer: 3,
    },
    {
       q: 'Which of these lovely ladies is not an official Disney Princess?',
       audio: 'assets/audio/aliceFromAliceInWonderland.mp3',
       options: ['Merida', 'Alice', 'Cinderella', 'Elsa', ],
       optionsImages: ['merida.png', 'aliceInWonderland.png', 'cinderella.png', 'elsa.png', ],
       imageTitles: ['Merida', 'Alice', 'Cinderella', 'Elsa', ],
       answer: 1,
    },
    {
       q: 'This friendly canine is the father of not 1 but 101 puppies:',
       audio: 'assets/audio/pongo101Dalmatians.mp3',
       options: ['Colonel', 'Perdita', 'Clip', 'Pongo', ],
       optionsImages: ['colonel.png', 'perdita.png', 'dodger.png', 'pongo.png'],
       imageTitles: ['Colonel', 'Perdita', 'Clip', 'Pongo', ],
       answer: 3,
    },
    {
       q: 'Name the film and the character heard in the following sound clip:',
       audio: 'assets/audio/aBugsLifeFlick.mp3',
       options: ['Monsters, Inc - Sulley', "A Bug's Life - Flik", 'Good Dinosaur - Arlo', 'Onward - Ian', ],
       optionsImages: ['sulley.png', 'flik.png', 'arlo.png', 'ian.png', ],
       imageTitles: ['Monsters, Inc - Sulley', "A Bug's Life - Flik", 'Good Dinosaur - Arlo', 'Onward - Ian', ],
       answer: 1,
    },
    {
       q: 'Name the film and the character heard in the following sound clip:',
       audio: 'assets/audio/beautyAndTheBeastBelle.mp3',
       options: ['Sleeping Beauty - Aurora', 'Brave - Merida', 'The Princess and the Frog - Tiana', 'Beauty and the Beast - Belle', ],
       optionsImages: ['aurora.png', 'merida.png', 'tiana.png', 'belle.png', ],
       imageTitles: ['Sleeping Beauty - Aurora', 'Brave - Merida', 'The Princess and the Frog - Tiana', 'Beauty and the Beast - Belle', ],
       answer: 3,
    },
    {
       q: 'Name the character heard in the following sound clip:',
       audio: 'assets/audio/donaldDuck.mp3',
       options: ['Donald Duck', 'Goofy', 'Mickey Mouse', 'Pete', ],
       optionsImages: ['donaldDuck.png', 'goofy.png', 'mickeyMouse.png', 'pete.png', ],
       imageTitles: ['Donald Duck', 'Goofy', 'Mickey Mouse', 'Pete', ],
       answer: 0,
    },
    {
       q: 'Name the film and the character heard in the following sound clip:',
       audio: 'assets/audio/findingNemoMerlin.mp3',
       options: ['Finding Dory - Marlin', 'Finding Nemo - Marlin', 'Shark Tale - Oscar', 'Shark Bait - Pisces', ],
       optionsImages: ['merlinDory.png', 'merlin.png', 'sharkTaleOscar.png', 'sharkBaitPi.png', ],
       imageTitles: ['Finding Dory - Marlin', 'Finding Nemo - Marlin', 'Shark Tale - Oscar', 'Shark Bait - Pisces', ],
       answer: 1,
    },
    {
       q: 'Name the film and the character heard in the following sound clip:',
       audio: 'assets/audio/frozenElsa.mp3',
       options: ['Tangled - Rapunzel', 'The Little Mermaid - Ariel', 'Beauty and the Beast - Belle', 'Frozen- Elsa', ],
       optionsImages: ['rapunzel.png', 'ariel.png', 'belle.png', 'elsa.png', ],
       imageTitles: ['Tangled - Rapunzel', 'The Little Mermaid - Ariel', 'Beauty and the Beast - Belle', 'Frozen- Elsa', ],
       answer: 3,
    },
    {
       q: 'Name the character heard in the following sound clip:',
       audio: 'assets/audio/ironManTonyStark.mp3',
       options: ['Hawkeye aka Clint Barton', 'The Hulk aka Bruce Banner', 'Black Panther aka King TChalla', 'Iron Man aka Tony Stark', ],
       optionsImages: ['hawkeye.png', 'hulk.png', 'blackPanther.png', 'ironMan.png', ],
       imageTitles: ['Hawkeye aka Clint Barton', 'The Hulk aka Bruce Banner', 'Black Panther aka King TChalla', 'Iron Man aka Tony Stark', ],
       answer: 3,
    },
    {
       q: 'Name the character heard in the following sound clip:',
       audio: 'assets/audio/maryPoppins.mp3',
       options: ['Mary Poppins', 'Nanny McPhee', 'Maria', 'Mother Carey', ],
       optionsImages: ['maryPoppins.jpg', 'nannyMcphee.png', 'maria.png', 'motherCarey.png', ],
       imageTitles: ['Mary Poppins', 'Nanny McPhee', 'Maria', 'Mother Carey', ],
       answer: 0,
    },
    {
       q: 'Name the film and the character heard in the following sound clip:',
       audio: 'assets/audio/starWarsDarthVader.mp3',
       options: ['Star Wars: Attack of the Clones - Anakin Skywalker', 'Star Wars: The Empire Strikes Back - Darth Vader', 'Star Wars: Revenge of the Sith - Anakin Skywalker', 'Star Wars: A New Hope - Darth Vader', ],
       optionsImages: ['anakin.png', 'darthVader.png', 'anakin2.png', 'darthVader2.png', ],
       imageTitles: ['Star Wars: Attack of the Clones - Anakin Skywalker', 'Star Wars: The Empire Strikes Back - Darth Vader', 'Star Wars: Revenge of the Sith - Anakin Skywalker', 'Star Wars: A New Hope - Darth Vader', ],
       answer: 1,
    },
 ];
 
 /**  
  * @function setAvailableQuestions - push the questions into availableQuestions array.
  * Created as per the WebShala tutorial.
  */
 function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
       availableQuestions.push(quiz[i]);
    }
 }
 
 /**
  * @function getNewQuestion will set the question number, the question and the answer options
  */
 
 function getNewQuestion() {
    //set Question Number
    //Created as per the WebShala tutorial.
    questionNumbers.innerHTML = 'Question ' + (questionCounter + 1) + ' of ' + questionLimit;
 
    //set Question
    //set a random question
    //Created as per the WebShala tutorial and adapted accordingly.
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    //populate the question
    writtenQuestions.innerHTML = currentQuestion.q;
    //populate the images code and audio code created by me.
    //Tooltip code from W3 school tutorial and adapted for site 
    //https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom
    pictureOne.innerHTML = `<img src= ${pictureQuestionsFile}${currentQuestion.optionsImages['0']} alt = ${currentQuestion.imageTitles['0']}><span class='tooltiptext tooltiptext-image' id='tooltip-one'>${currentQuestion.imageTitles['0']}</span>`;
    pictureTwo.innerHTML = `<img src= ${pictureQuestionsFile}${currentQuestion.optionsImages['1']} alt = ${currentQuestion.imageTitles['1']}><span class='tooltiptext tooltiptext-image' id='tooltip-one'>${currentQuestion.imageTitles['1']}</span>`;
    pictureThree.innerHTML = `<img src= ${pictureQuestionsFile}${currentQuestion.optionsImages['2']} alt = ${currentQuestion.imageTitles['2']}><span class='tooltiptext tooltiptext-image' id='tooltip-one'>${currentQuestion.imageTitles['2']}</span>`;
    pictureFour.innerHTML = `<img src= ${pictureQuestionsFile}${currentQuestion.optionsImages['3']} alt = ${currentQuestion.imageTitles['3']}><span class='tooltiptext tooltiptext-image' id='tooltip-one'>${currentQuestion.imageTitles['3']}</span>`;
    audioQuestions.innerHTML = `<audio src= ${currentQuestion.audio} id='audio' alt='an audio clip related to the written question'></audio>`;
 
    //The below sections are created as per the WebShala tutorial.
    //get the position of questionIndex from the available question array.
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the questionIndex from the array so that the question does not reappear again.
    availableQuestions.splice(index1, 1);
    // set options.
    // get the length of options.
    const optionLen = currentQuestion.options.length;
    // push options into availableOptions Array.
    for (let i = 0; i < optionLen; i++) {
       availableOptions.push(i);
    }
    optionContainer.innerHTML = '';
    // create options in html.
    for (let i = 0; i < optionLen; i++) {
       // random option.
       const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
       // get the position of 'optonIndex' from the availableOptions Array.
       const index2 = availableOptions.indexOf(optonIndex);
       // remove the  'optonIndex' from the availableOptions Array , so that the option does not repeat.
       availableOptions.splice(index2, 1);
       const option = document.createElement('div');
       option.innerHTML = currentQuestion.options[optonIndex];
       option.id = optonIndex;
       option.className = 'option';
       optionContainer.appendChild(option);
       option.setAttribute('onclick', 'getResult(this)');
    }
    //log the available questions to the console to monitor that the above code is working.
    console.log(availableQuestions);
    questionCounter++;
    //log if the answer is correct or incorrect along with the correct answer to the console.
    console.log('correct' + correctAnswers);
 }
 
 //add an event listener to click me button to call function play() to trigger audio.
 //  addEventListener code added by me.
 audioQuestions.addEventListener('click', play);
 
 /**
  * @function play to play the audio clip assigned to the current object in the array.
  * solution to add audio found on https://stackoverflow.com/questions/9419263/how-to-play-audio.
  */
 
 function play() {
    let audio = document.getElementById('audio');
    audio.play();
 }
 
 /**
  * @function getResult gets the result answer by comparing the id of the clicked option. It then 
  sets the colour to green of the correct option and add the correct mark image. If incorrect it sets the
  colour to red and the indicator image as wrong. It will then show the correct option by adding a green colour to it.
  * code created as per the WebShala tutorial.
  */
 
 
 function getResult(element) {
    const id = parseInt(element.id);
    // get the answer by comparing the id of clicked option.
    if (id === currentQuestion.answer) {
       // set the green color to the correct option.
       element.classList.add('correct');
       // add the indicator to correct mark.
       updateAnswerIndicator('correct');
       correctAnswers++;
    } else {
       // set the red color to the incorrect option.
       element.classList.add('wrong');
       // add the indicator to wrong mark.
       updateAnswerIndicator('wrong');
 
       // if the answer is incorrect then show the correct option by adding green color the correct option.
       const optionLen = optionContainer.children.length;
       for (let i = 0; i < optionLen; i++) {
          if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
             optionContainer.children[i].classList.add('correct');
          }
       }
 
    }
    attempt++;
    unclickableOptions();
 }
 
 
 /** 
  * @function unclickableOptions makes all the options unclickable once the user selects an option.
  * created as per the WebShala tutorial.
  */
 
 function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
       optionContainer.children[i].classList.add('already-answered');
    }
 }
 
 /** 
  * @function answersIndicator creates a div in the html to be able to add whether the answer is correct or wrong (upateAnswerIndocator). This is
  * within the score area of the html to track answers.
  * created as per the WebShala tutorial.
  */
 
 function answersIndicator() {
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = questionLimit;
    for (let i = 0; i < totalQuestion; i++) {
       const indicator = document.createElement('div');
       answersIndicatorContainer.appendChild(indicator);
    }
 }
 
 /** 
  * @function updateAnswerIndicator adds a correct answer indicator or incorrect answer indicator to the answersIndicatorContainer
  * to display when the answer is clicked to track answers.
  * created as per the WebShala tutorial.
  */
 
 function updateAnswerIndicator(markType) {
    answersIndicatorContainer.children[questionCounter - 1].classList.add(markType);
 }
 
 //add  an event listener to submit button to trigger next question
 // addEventListener code added by me.
 submitButton.addEventListener('click', nextQuestion);
 
 /**
  * @function nextQuestion calls the next logical question number and the next random question to be displayed.
  * It also ends the question if the final question has been reached and calls the results page.
  * created as per the WebShala tutorial.
  */
 
 function nextQuestion() {
    if (questionCounter === questionLimit) {
       quizOver();
    } else {
       getNewQuestion();
    }
 }
 
 /**
  * @function quizOver ends the quiz when the last question is reached and calls the results box to display results
  * of the quiz.
  * created as per the WebShala tutorial.
  */
 
 function quizOver() {
    // hide quiz Box
    quizBox.classList.add('hide');
    // show result Box
    resultBox.classList.remove('hide');
    // calculate and add the quiz results
    quizResult();
 }
 
 /**
  * @function quizResult calls add the innerHTML to the results page to display the quiz results.
  * It also ends the question if the final question has been reached and calls the results page.
  * created as per the WebShala tutorial and adapted for the site.
  */
 
 function quizResult() {
    resultBox.querySelector('.total-question').innerHTML = questionLimit;
    resultBox.querySelector('.total-correct').innerHTML = 'You scored ' + correctAnswers + ' /';
    if (localStorage.getItem('character')) {
       document.getElementById('certificate-name').innerHTML = 'Awarded to our very own ' + localStorage.getItem('character');
    } else {
       document.getElementById('certificate-name').innerHTML = 'DisneyStar';
    }
    resultTypeCalculation();
 }
 
 /**
  * @function resultTypeCalculation calculate the result based on the percentage of questions answered correctly and setup page display
  * accordingly. Most of this code is adapated code written by me.
  */
 
 function resultTypeCalculation() {
    const percentage = (correctAnswers / questionLimit) * 100;
    if (percentage <= 100 && percentage >= 80) {
       resultBox.querySelector('.result-type').innerHTML = 'You are a Disney Star';
       certificateBox.classList.add('top');
       certificateBox.classList.remove('second');
       certificateBox.classList.remove('third');
       certificateBox.classList.remove('fourth');
       certificateBox.classList.remove('last');
       resultDescriptor.innerHTML = '<p>Mickey Mouse would be proud of you! You truly are a Disney genius.<br>Not only do you know your Disney characters, but you know The Avengers and Star Wars characters too.</p>';
    } else if (percentage <= 79 && percentage >= 60) {
       resultBox.querySelector('.result-type').innerHTML = 'You are a Disney Wizz';
       certificateBox.classList.add('second');
       certificateBox.classList.remove('top');
       certificateBox.classList.remove('third');
       certificateBox.classList.remove('fourth');
       certificateBox.classList.remove('last');
       resultDescriptor.innerHTML = '<p> Well done, you did great! You certainly are knowledgeable about all things Disney..<br>Why not take another try? I bet that you will ace it.</p>';
    } else if (percentage <= 59 && percentage >= 40) {
       resultBox.querySelector('.result-type').innerHTML = 'You are a Disney Average Joe';
       certificateBox.classList.add('third');
       certificateBox.classList.remove('top');
       certificateBox.classList.remove('second');
       certificateBox.classList.remove('fourth');
       certificateBox.classList.remove('last');
       resultDescriptor.innerHTML = '<p>Not too bad! You are half way there to becoming a true Disney champion.<br>I am sure that you learnt a thing or two whilst completing the quiz too.</p>';
    } else if (percentage <= 39 && percentage >= 20) {
       resultBox.querySelector('.result-type').innerHTML = 'You are a Disney Novice';
       certificateBox.classList.add('fourth');
       certificateBox.classList.remove('top');
       certificateBox.classList.remove('second');
       certificateBox.classList.remove('third');
       certificateBox.classList.remove('last');
       resultDescriptor.innerHTML = '<p>We all have to begin somewhere<br>I am glad to see that you do know certain fun facts about your favourite Disney characters <br> Brush up on your knowledge and try again.</p>';
    } else if (percentage <= 19 && percentage >= 0) {
       resultBox.querySelector('.result-type').innerHTML = 'You are a Disney Wannabe';
       certificateBox.classList.add('last');
       certificateBox.classList.remove('top');
       certificateBox.classList.remove('second');
       certificateBox.classList.remove('third');
       certificateBox.classList.remove('fourth');
       resultDescriptor.innerHTML = '<p>Well done for trying but I am affraid that you have a long way to go.<br>This time it was a bit of a flop. Come back when you are ready to try again.</p>';
    } else {
       resultBox.querySelector('.result-type').innerHTML = '';
       certificateBox.classList.remove('top');
       certificateBox.classList.remove('second');
       certificateBox.classList.remove('third');
       certificateBox.classList.remove('fourth');
       certificateBox.classList.remove('last');
       resultDescriptor.innerHTML = '';
    }
 }
 
 //eventListener code added by me.
 restartQuiz.addEventListener('click', tryAgainQuiz);
 
 /**
  * @function resetQuiz resets the initial quiz values.
  * created as per WebShala tutorial.
  */
 function resetQuiz() {
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
 }
 
 /**
  * @function tryAgainQuiz resets the quiz page for the quiz to be taken again. Calls the functions to reset various quiz areas.
  * created as per WebShala tutorial.
  */
 function tryAgainQuiz() {
    // hide the resultBox
    resultBox.classList.add('hide');
    // show the quizBox
    quizBox.classList.remove('hide');
    resetQuiz();
    setup();
    resultTypeCalculation();
 }
 
 
 // Start of Quiz//
 // Add an event listener to the submit button to trigger the start of the quiz.
 //addEventListener code added by me.
 startQuiz.addEventListener('click', setup);
 
 /**
  * @function setup first the available questions are set in the availableQuestions array and then the getNewQuestion function is called.
  * The correct answers indicators are added. The html quiz page is setup to display the quiz.
  * created as per WebShala tutorial.
  */
 
 function setup() {
    homeBox.classList.add('hide');
    quizBox.classList.remove('hide');
    setAvailableQuestions();
    getNewQuestion();
    // to create answers indicator
    answersIndicator();
 
 }