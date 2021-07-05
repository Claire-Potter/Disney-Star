/* jshint esversion: 6 */
// Create constants for html input.
// Created whilst following the WebShala tutorial, Ids per my html.
const characterName = document.getElementById('character-name');
const characterLogo = document.getElementById('character-logo');
const questionNumbers = document.getElementById('question-number');
const writtenQuestions = document.getElementById('written-question');
const pictureOne = document.getElementById('picture-one');
const pictureTwo = document.getElementById('picture-two');
const pictureThree = document.getElementById('picture-three');
const pictureFour = document.getElementById('picture-four');
const audioQuestions = document.getElementById('audio-question');
const audioQuote = document.getElementById('audio-text');
const answersIndicatorContainer = document.getElementById('answers-indicator');
const pictureQuestionsFile = 'assets/images/pictureQuestions/';
const submitButton = document.getElementById('submit-question');
const startQuiz = document.getElementById('start-quiz');
const optionContainer = document.getElementById('option-container');
const homeBox = document.getElementById('ready-to-start');
const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const certificateBox = document.getElementById('certificate');
const certificateName = document.getElementById('certificate-name');
const resultDescriptor = document.getElementById('result-description');
const restartQuiz = document.getElementById('restart-quiz');
const timer = document.getElementById('timer');
const questionLimit = 25;
// set the initial values;
let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

/**
 * @name Generate Character Name 
 * @description - fetches stored values to populate the 
 * characterName and the characterLogo areas.
 * characterName - the html element in which the fetched.
 * character from local storage will be added.
 * characterLogo - the html element in which the fetched.
 * character image from local storage will be added.
 * Code for using local storage found on 
 * https://www.w3schools.com/html/html5_webstorage.asp and edited for purpose.
 */

if (localStorage.getItem('character') && (localStorage.getItem('character-image-area'))) {
  characterName.innerHTML = localStorage.getItem('character');
  characterLogo.innerHTML = localStorage.getItem('character-image-area');
} else {

  characterName.innerHTML = 'DisneyStar';
  characterLogo.innerHTML = `<img src= 
   'assets/images/siteImages/disneyIcon.jpg' 
   alt = 'DisneyStar' >`;
}

// Quiz Section //

// A series of tutorial videos starting from video two up until video five 
//were utilised as a guideline to create this quiz.Here is the link to the 
//second video https://www.youtube.com/watch?v=QU6z69P5BrU&t=0s. The links 
//to the additional videos are available within the about section underneath
//the above video.The videos are created by The WebShala Channel 
//https://www.youtube.com/channel/UC94lpQZvaokkIqU-TvtsGXQ.
//As far as possible I have tried to indicate which sections of code are 
//created as per the tutorial and which sections are adapted and which 
//sections are created by me.


/**Questions and Answers array to populate html with when functions are 
 * called.
 * @description quiz - an array for all quiz objects
 * q - the written question;
 * audio - the audio file to be played;
 * options[] - the answer options;
 * optionsImages[] - the images to be shown;
 * imageTitles[] - the alt for the images;
 * answer - the index of the correct answer;
 * This array was created by me. 
 * https://www.sitepoint.com/simple-javascript-quiz/ 
referenced for the structure of the array.
 */

const quiz = [{
    q: 'What year did Disneyland open?​',
    audio: '/assets/audio/whatADreamPlace.mp3',
    options: ['1951', '1957', '1953', '1955', ],
    optionsImages: ['disneyLand1.jpg', 'disneyLand2.jpg', 'disneyLand3.jpg',
      'disneyLand4.jpg',
    ],
    imageTitles: ['The opening day at Disneyland',
      'Mickey and Minnie Mouse with two children', 'Walt Disney',
      'A Parade',
    ],
    audioText: 'Well, here we are. Boy, what a dream place! Ah, smell that' +
      ' air. Mm-mm, look at those trees.',
    answer: 3,
  },
  {
    q: 'Who was the first cartoon character to get a star on the' +
      ' Hollywood Walk of Fame?​',
    audio: '/assets/audio/waltDisneyAsMickeyMouse.mp3',
    options: ['Snow White', 'Mickey Mouse', 'Donald Duck', 'Cinderella', ],
    optionsImages: ['princess.png', 'mM.png', 'dD.png',
      'poorPrincess.png',
    ],
    imageTitles: ['Snow White', 'Mickey Mouse', 'Donald Duck', 'Cinderella', ],
    audioText: 'Well, I\'m, uh, Mickey Mouse. You know? Mickey Mouse? I hope' +
      ' you\'ve heard of me. I hope.',
    answer: 1,
  },
  {
    q: 'How many brothers does Prince Hans of the Southern Isles' +
      ' have in Frozen?​​',
    audio: 'assets/audio/frozenPrinceHans.mp3',
    options: ['12', '7', '15', '5', ],
    optionsImages: ['hansAnna.png', 'hansElsa.png', 'hansKristoff.png',
      'hansAnnaPunch.png',
    ],
    imageTitles: ['Hans with Anna', 'Alongside Elsa', 'Next to Kristoff',
      'Getting punched',
    ],
    audioText: 'As thirteenth in line in my own kingdom, I didn\'t stand' +
      ' a chance. I knew I would have to marry into the throne somewhere.',
    answer: 0,
  },
  {
    q: 'What was the name of Walt Disney’s first cartoon character?​​',
    audio: 'assets/audio/uhOhICantBelieveIt.mp3',
    options: ['Ralph', 'Donald Duck', 'Oswald the Lucky Rabbit',
      'Mickey Mouse',
    ],
    optionsImages: ['ralph.png', 'dD.png', 'oswaldTheLuckyRabbit.png',
      'mM.png',
    ],
    imageTitles: ['Ralph', 'Donald Duck', 'Oswald the Lucky Rabbit',
      'Mickey Mouse',
    ],
    audioText: 'Uh-oh! I can\'t believe it!',
    answer: 2,
  },
  {
    q: 'Who trained Hercules to be a hero?',
    audio: '/assets/audio/herculesIWantToBecomeAHero.mp3',
    options: ['Pygmalion', 'Philoctetes', 'Prometheus', 'Parentheses', ],
    optionsImages: ['hercules1.png', 'hercules2.png', 'hercules3.png',
      'hercules4.png',
    ],
    imageTitles: ['A short goat man', 'Eating grapes',
      'Hercules and Pegasus with the character', 'Getting shot from a bow',
    ],
    audioText: 'I want to become a hero, a true hero.',
    answer: 1,
  },
  {
    q: 'What is the name of Ariel and Prince Eric’s daughter?​',
    audio: '/assets/audio/arielTheLittleMermaid.mp3',
    options: ['Marina', 'Alanna', 'Oceana', 'Melody', ],
    optionsImages: ['daughterFriends.png', 'arielDaughter.png',
      'ericDaughter.png', 'arielAndHerDaughter.png',
    ],
    imageTitles: ['Sitting with a penguin and a walrus', 'the daughter',
      'Eric holding her', 'with Ariel'
    ],
    audioText: 'I don\'t see how a world that makes such wonderful' +
      ' things could be bad.',
    answer: 3,
  },
  {
    q: 'What is the name of the castle in Shanghai Disneyland Park?​',
    audio: '/assets/audio/mulan.mp3',
    options: ['Cinderella Dream Castle', 'Atlantis',
      'The Enchanted Storybook Castle', 'Shanghai Palace of Mystery',
    ],
    optionsImages: ['castleShanghai1.jpg', 'castleShanghai2.jpg',
      'castleShanghai3.jpg', 'castleShanghai4.jpg',
    ],
    imageTitles: ['The castle at Disneyland Shanghai',
      '', '', '',
    ],
    audioText: 'You shouldn\'t have to go. There are plenty of young' +
      ' men to fight for China.',
    answer: 2,
  },
  {
    q: 'Which Disney Princess sings “Once Upon a Dream”?​​',
    audio: '/assets/audio/onceUponADreamAurora.mp3',
    options: ['Cinderella', 'Snow White', 'Belle, Beauty and the Beast',
      'Aurora, Sleeping Beauty',
    ],
    optionsImages: ['cinderella.png', 'snowWhite.png', 'belle.png',
      'aurora.png',
    ],
    imageTitles: ['Cinderella', 'Snow White', 'Belle, Beauty and the Beast',
      'Aurora, Sleeping Beauty',
    ],
    audioText: 'I know you. I walked with you once upon a dream.',
    answer: 3,
  },
  {
    q: 'Emperor Kuzco turns into what animal in The Emperor’s New Groove?',
    audio: '/assets/audio/kuzcoEmperorsNewGroove.mp3',
    options: ['Llama', 'Camel', 'Alpaca', 'Vicuna', ],
    optionsImages: ['kuzco1.png', 'kuzco2.png', 'kuzco3.png', 'kuzco4.png', ],
    imageTitles: ['Emperor', 'Animal', 'Kuzco and friend',
      '',
    ],
    audioText: 'Boom, bam, baby! Let\'s get to the grub.' +
      ' I am one hungry king of the world.',
    answer: 0,
  },
  {
    q: 'Which of these frisky felines is the beloved companion of' +
      ' Alice in Wonderland?',
    audio: '/assets/audio/aliceInWonderland.mp3',
    options: ['Tibbs', 'Dinah', 'Marie', 'Toulouse', ],
    optionsImages: ['tibbs.png', 'dinah.png', 'marie.png', 'toulouse.png', ],
    imageTitles: ['Tibbs', 'Dinah', 'Marie', 'Toulouse', ],
    audioText: 'No, no, no. I\'m through with rabbits.',
    answer: 1,
  },
  {
    q: 'Disney has recently made many live action versions of our favourite' +
      ' Disney Movies. Which of these couples do not feature in a live' +
      ' action film?',
    audio: '/assets/audio/annaAndHansFrozen.mp3',
    options: ['Cinderella and Prince Charming', 'Belle and Beast',
      'Princess Anna and Prince Hans', 'Aladdin and Princess Jasmine',
    ],
    optionsImages: ['cinderellaAndPrinceDancing.png', 'belleAndBeast.png',
      'annaHansDance.png', 'aladdinAndJasmine.png',
    ],
    imageTitles: ['Cinderella and Prince Charming', 'Belle and Beast',
      'Princess Anna and Prince Hans', 'Aladdin and Princess Jasmine',
    ],
    audioText: 'I mean, it\'s crazy. -What? -We finish each other\'s...' +
      ' -Sandwiches.',
    answer: 2,
  },
  {
    q: 'This super hero is set to feature in a new full length feature coming' +
      ' out July 2021, select the correct hero:',
    audio: '/assets/audio/blackWidowTheAvengers.mp3',
    options: ['Captain America', 'Captain Marvel', 'Black Widow', 'Thor', ],
    optionsImages: ['captainAmerica.png', 'captainMarvel.png', 'blackWidow.png',
      'thor.png',
    ],
    imageTitles: ['Captain America', 'Marvel', 'Black Widow', 'Thor', ],
    audioText: 'Gentlemen, you might want to step inside in a minute.' +
      ' It\'s going to get a little hard to breathe.',
    answer: 2,
  },
  {
    q: 'The late Robin Williams voiced this beloved character who brought much' +
      ' comic relief to the film:',
    audio: 'assets/audio/aladdinGenie.mp3',
    options: ['Baymax', 'Lightning McQueen', 'Genie', 'Mad Hatter', ],
    optionsImages: ['baymax.png', 'lightningMcqueen.png', 'genie.png',
      'madHatter.png',
    ],
    imageTitles: ['Baymax', 'Lightning McQueen', 'Genie', 'Mad Hatter', ],
    audioText: 'The ever impressive, the long contained, the often imitated,' +
      ' but never duplicated... Genie of the Lamp!',
    answer: 2,
  },
  {
    q: 'This little fellow was separated from his mama at the beginning of the' +
      ' movie, luckily they were reunited:',
    audio: 'assets/audio/dumbo.mp3',
    options: ['Dumbo', 'Thumper', 'Chip', 'Bambi', ],
    optionsImages: ['dumboFlying.png', 'thumper.png', 'chip.png', 'bambi.png', ],
    imageTitles: ['Dumbo', 'Thumper', 'Chip', 'Bambi', ],
    audioText: 'Poor little guy. There he goes, without a friend in the world.' +
      ' Nobody to turn to.',
    answer: 0,
  },
  {
    q: 'Which of these characters made quite a spectacle when he thought' +
      ' the sky was falling?',
    audio: 'assets/audio/chickenLittle.mp3',
    options: ['Dormouse', 'Hulk', 'Flik', 'Chicken Little', ],
    optionsImages: ['dormouse.png', 'hulk.png', 'flik.png',
      'chickenLittle.jpg',
    ],
    imageTitles: ['Dormouse', 'Hulk', 'Flik', 'Chicken Little', ],
    audioText: 'The sky is falling! The sky is falling!',
    answer: 3,
  },
  {
    q: 'Which of these lovely ladies is not an official Disney Princess?',
    audio: 'assets/audio/aliceFromAliceInWonderland.mp3',
    options: ['Merida', 'Alice', 'Cinderella', 'Elsa', ],
    optionsImages: ['brave.png', 'wonderland.png', 'glassSlipper.png',
      'frozen.png',
    ],
    imageTitles: ['Merida', 'Alice', 'Cinderella', 'Elsa', ],
    audioText: 'In this world, perhaps. But in my world the books would be' +
      ' nothing but pictures.',
    answer: 1,
  },
  {
    q: 'This friendly canine is the father of not 1 but 101 puppies:',
    audio: 'assets/audio/pongo101Dalmatians.mp3',
    options: ['Colonel', 'Perdita', 'Clip', 'Pongo', ],
    optionsImages: ['colonel.png', 'perdita.png', 'dodger.png', 'pongo.png'],
    imageTitles: ['Colonel', 'Perdita', 'Clip', 'Pongo', ],
    audioText: 'I wish we could walk on the snow. -No, son, we can\'t leave' +
      ' tracks.',
    answer: 3,
  },
  {
    q: 'Name the film and the character heard in the following sound clip:',
    audio: 'assets/audio/aBugsLifeFlick.mp3',
    options: ['Monsters, Inc - Sulley', 'A Bug\'s Life - Flik',
      'Good Dinosaur - Arlo', 'Onward - Ian',
    ],
    optionsImages: ['sulley.png', 'flik.png', 'arlo.png', 'ian.png', ],
    imageTitles: ['Monsters, Inc - Sulley', 'A Bug\'s Life - Flik',
      'Good Dinosaur - Arlo', 'Onward - Ian',
    ],
    audioText: 'Hello, princess! My, aren\'t you looking lovely this morning' +
      ' Not, of course, that you would need a telescope to see that.',
    answer: 1,
  },
  {
    q: 'Name the film and the character heard in the following sound clip:',
    audio: 'assets/audio/beautyAndTheBeastBelle.mp3',
    options: ['Sleeping Beauty - Aurora', 'Brave - Merida',
      'The Princess and the Frog - Tiana', 'Beauty and the Beast - Belle',
    ],
    optionsImages: ['aurora.png', 'brave.png', 'tiana.png', 'belle.png', ],
    imageTitles: ['Sleeping Beauty - Aurora', 'Brave - Merida',
      'The Princess and the Frog - Tiana', 'Beauty and the Beast - Belle',
    ],
    audioText: 'I didn\'t mean any harm.',
    answer: 3,
  },
  {
    q: 'Name the character heard in the following sound clip:',
    audio: 'assets/audio/donaldDuck.mp3',
    options: ['Donald Duck', 'Goofy', 'Mickey Mouse', 'Pete', ],
    optionsImages: ['dD.png', 'goofy.png', 'mM.png',
      'pete.png',
    ],
    imageTitles: ['Donald Duck', 'Goofy', 'Mickey Mouse', 'Pete', ],
    audioText: 'And a very merry Christmas to you!',
    answer: 0,
  },
  {
    q: 'Name the film and the character heard in the following sound clip:',
    audio: 'assets/audio/findingNemoMerlin.mp3',
    options: ['Finding Dory - Marlin', 'Finding Nemo - Marlin',
      'Shark Tale - Oscar', 'Shark Bait - Pisces',
    ],
    optionsImages: ['merlinDory.png', 'merlin.png',
      'sharkTaleOscar.png', 'sharkBaitPi.png',
    ],
    imageTitles: ['Finding Dory', 'Nemo',
      'Shark Tale - Oscar', 'Shark Bait - Pisces',
    ],
    audioText: 'I have to get out. I have to find my son.' +
      ' I have to tell him how old sea turtles are!',
    answer: 1,
  },
  {
    q: 'Name the film and the character heard in the following sound clip:',
    audio: 'assets/audio/frozenElsa.mp3',
    options: ['Tangled - Rapunzel', 'The Little Mermaid - Ariel',
      'Beauty and the Beast - Belle', 'Frozen- Elsa',
    ],
    optionsImages: ['rapunzel.png', 'ariel.png', 'belle.png', 'elsa.png', ],
    imageTitles: ['Tangled - Rapunzel', 'The Little Mermaid - Ariel',
      'Beauty and the Beast - Belle', 'Frozen- Elsa',
    ],
    audioText: 'A kingdom of isolation and it looks like I\'m the queen.',
    answer: 3,
  },
  {
    q: 'Name the character heard in the following sound clip:',
    audio: 'assets/audio/ironManTonyStark.mp3',
    options: ['Hawkeye aka Clint Barton', 'The Hulk aka Bruce Banner',
      'Black Panther aka King T\'Challa', 'Iron Man aka Tony Stark',
    ],
    optionsImages: ['hawkeye.png', 'hulk.png', 'blackPanther.png',
      'ironMan.png',
    ],
    imageTitles: ['Hawkeye - Clint Barton', 'The Hulk - Bruce Banner',
      'Black Panther - King T\'Challa', 'Iron Man aka Tony Stark',
    ],
    audioText: 'They say the best weapon is one you never have to' +
      ' fire. I respectfully disagree. I prefer the weapon you only' +
      ' have to fire once.',
    answer: 3,
  },
  {
    q: 'Name the character heard in the following sound clip:',
    audio: 'assets/audio/maryPoppins.mp3',
    options: ['Mary Poppins', 'Nanny McPhee', 'Maria', 'Mother Carey', ],
    optionsImages: ['maryPoppins.jpg', 'nannyMcphee.png', 'maria.png',
      'motherCarey.png',
    ],
    imageTitles: ['Mary Poppins', 'Nanny McPhee', 'Maria', 'Mother Carey', ],
    audioText: 'Practically perfect people never permit sentiment to muddle' +
      ' their thinking.',
    answer: 0,
  },
  {
    q: 'Name the film and the character heard in the following sound clip:',
    audio: 'assets/audio/starWarsDarthVader.mp3',
    options: ['Star Wars: Attack of the Clones - Anakin Skywalker',
      'Star Wars: The Empire Strikes Back - Darth Vader',
      'Star Wars: Revenge of the Sith - Anakin Skywalker',
      'Star Wars: A New Hope - Darth Vader',
    ],
    optionsImages: ['anakin.png', 'darthVader.png', 'anakin2.png',
      'darthVader2.png',
    ],
    imageTitles: ['Attack of the Clones', 'The Empire Strikes Back',
      'Revenge of the Sith', 'A New Hope',
    ],
    audioText: 'No. I am your father.',
    answer: 1,
  },
];

/**  
 * @function setAvailableQuestions - push the questions into 
 * availableQuestions array in which questions which
 * have not been asked are added to and removed from once asked.
 */

//Created as per the WebShala tutorial.

function setAvailableQuestions() {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
}

/**
 * @function getNewQuestion will set the question number, the question
 *  and the answer options.
 * @description questionIndex - randomised question from the availableQuestions
 * array after populating the html with the relevant array objects, it is
 * removed from the array.
 * @description availableOptions - array in which options for the 
 * question are added to and removed from once asked.
 * @description optonIndex - randomised option from the 
 * array after populating the html, it is removed from the array.
 */

function getNewQuestion() {
  //set Question Number
  //Created as per the WebShala tutorial.
  questionNumbers.innerHTML = 'Question ' + (questionCounter + 1) +
    ' of ' + questionLimit;

  //set Question
  //set a random question
  //Created as per the WebShala tutorial and adapted accordingly.
  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  //populate the question
  writtenQuestions.innerHTML = currentQuestion.q;
  //populate the images code and audio code created by me.
  //Tooltip code from W3 school tutorial and adapted for site 
  //https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom
  pictureOne.innerHTML = `<img src= 
   ${pictureQuestionsFile}${currentQuestion.optionsImages['0']}
    alt = ${currentQuestion.imageTitles['0']}
   ><span class='tooltiptext tooltiptext-image' id='tooltip-one'>
   ${currentQuestion.imageTitles['0']}</span>`;
  pictureTwo.innerHTML = `<img src=
    ${pictureQuestionsFile}${currentQuestion.optionsImages['1']}
     alt = ${currentQuestion.imageTitles['1']}
   ><span class='tooltiptext tooltiptext-image' id='tooltip-one'>
   ${currentQuestion.imageTitles['1']}</span>`;
  pictureThree.innerHTML = `<img src= 
   ${pictureQuestionsFile}${currentQuestion.optionsImages['2']}
    alt = ${currentQuestion.imageTitles['2']}
   ><span class='tooltiptext tooltiptext-image' id='tooltip-one'>
   ${currentQuestion.imageTitles['2']}</span>`;
  pictureFour.innerHTML = `<img src= 
   ${pictureQuestionsFile}${currentQuestion.optionsImages['3']} 
   alt = ${currentQuestion.imageTitles['3']}
   ><span class='tooltiptext tooltiptext-image' id='tooltip-one'>
   ${currentQuestion.imageTitles['3']}</span>`;
  audioQuestions.innerHTML =`<audio src= ${currentQuestion.audio}
    id='audio' alt='${currentQuestion.audioText}'></audio>`;
  audioQuote.innerHTML = `<h2>'${currentQuestion.audioText}'</h2>`;

  //The below sections are created as per the WebShala tutorial.
  //get the position of questionIndex from the available question array.
  const index1 = availableQuestions.indexOf(questionIndex);
  //remove the questionIndex from the array so that the question does 
  //not reappear again.
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
    const optonIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];
    // get the position of 'optonIndex' from the availableOptions Array.
    const index2 = availableOptions.indexOf(optonIndex);
    // remove the  'optonIndex' from the availableOptions Array ,
    // so that the option does not repeat.
    availableOptions.splice(index2, 1);
    const option = document.createElement('button');
    option.innerHTML = currentQuestion.options[optonIndex];
    option.id = optonIndex;
    option.className = 'option';
    optionContainer.appendChild(option);
    option.setAttribute('onclick', 'getResult(this)');
    option.setAttribute('keypress', 'enterKey(event)');

    option.addEventListener('keydown', enterKey);

    function enterKey(event) {
      if (event.key === 'Enter') {
        getResult();
      }
    }

    //disable the submitButton so that the user cannot move passed the
    // question until answered. Code added by me.
    submitButton.disabled = true;
  }



  questionCounter++;

  //set the seconds to 45 seconds and set the timer interval

  let sec = 45;
  let time = setInterval(myTimer, 1000);

  //Timer Function

  //I got the code for the timer from 
  // https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz
  // and this has been adapted for the site by me. The if else scenarios
  // have been added by me and indicate what to do if the user answers in time
  // and gets the answer correct, answers in time but gets the answer wrong,
  // or does not answer in time.

  // constants used by the myTimer function.

  const timer = document.getElementById('timer');
  const imageZero = document.getElementById('0');
  const imageOne = document.getElementById('1');
  const imageTwo = document.getElementById('2');
  const imageThree = document.getElementById('3');

  /** 
   * @function myTimer - sets a 45 second count per question.
   *  This will update the timer div with the countdown. 
   * 
   */

  function myTimer() {
    timer.innerHTML = sec + ' sec left';
    sec--; {
      // if the user answers correctly and in time, the message will 
      //display that they beat the timer. The style of the timer dive will be
      // updated accordingly.
      if (imageZero == document.querySelector('.option.correct.already-answered') ||
        imageOne == document.querySelector('.option.correct.already-answered') ||
        imageTwo == document.querySelector('.option.correct.already-answered') || imageThree ==
        document.querySelector('.option.correct.already-answered')) {
        clearInterval(time);
        timer.innerHTML = 'You beat the timer!';
        timer.classList.add('in-time');
        // if the user answers incorrectly but in time, the message will 
        //display that they answered in time but they got it wrong. The style
        // of the timer dive will be updated accordingly.
      } else if (imageZero == document.querySelector('.option.wrong.already-answered') || imageOne ==
        document.querySelector('.option.wrong.already-answered') ||
        imageTwo == document.querySelector('.option.wrong.already-answered') || imageThree ==
        document.querySelector('.option.wrong.already-answered')) {
        clearInterval(time);
        timer.innerHTML =
          'You answered in time, but you got it wrong';
        timer.classList.add('wrong-time');
        // if the user does not answer in time, an alert message will display
        // that they did not answer in time and the quizOver function
        // will be called.
      } else if (sec == -1) {
        clearInterval(time);
        //SweetAlert used to format the alert

        Swal.fire({
          title: 'Time is Up!',
          text: 'Oh dear, you did not beat the timer!',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        quizOver();
      } else {}
    }
  }
}

//add an event listener to click me button to call function play() to trigger
// audio.
//  addEventListener code added by me.
audioQuestions.addEventListener('click', play);

/**
 * @function to play the audio clip assigned to the current object in the
 * array. 
 * Audio - the audio file to be played.
 * Solution to add audio found on 
// https://stackoverflow.com/questions/9419263/how-to-play-audio.
 */

function play() {
  let audio = document.getElementById('audio');
  audio.play();
}

/**
 * @function getResult gets the result answer by comparing the id of the
 *  clicked option. It then sets the colour to green of the correct option and
 *  add the correct mark image. If incorrect it sets the
 colour to red and the indicator image as wrong. It will then show the correct
  option by adding a green colour to it. Code created as per the WebShala tutorial.
 * 
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
    // if the answer is incorrect then show the correct option by adding
    // green color the correct option.
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
      if (parseInt(optionContainer.children[i].id) ===
        currentQuestion.answer) {
        optionContainer.children[i].classList.add('also-correct');
      }
    }
  }
  attempt++;
  unclickableOptions();
}

/** 
 * @function unclickableOptions makes all the options unclickable once the 
 * user selects an option. Created as per the WebShala tutorial and adapted by me.
 */

function unclickableOptions() {
  const optionLen = optionContainer.children.length;
  for (let i = 0; i < optionLen; i++) {
    optionContainer.children[i].classList.add('already-answered');
    //when the options class already-answered has been added, re-enable the
    // submitButton to access the next question.
    submitButton.disabled = false;
  }
}

/** 
 * @function answersIndicator creates a div in the html to be able to add
 *  whether the answer is correct or wrong (upateAnswerIndicator). This is
 * within the score area of the html to track answers. 
 * Created as per the WebShala tutorial.
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
 * @function updateAnswerIndicator adds a correct answer indicator or 
 * incorrect answer indicator to the answersIndicatorContainer
 * to display when the answer is clicked to track answers.
 * Created as per the WebShala tutorial.
 */

function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter - 1].
  classList.add(markType);
}

//add  an event listener to submit button to trigger next question
// addEventListener code added by me.
submitButton.addEventListener('click', nextQuestion);

/**
 * @function nextQuestion calls the next logical question number and
 *  the next random question to be displayed.
 * It also ends the question if the final question has been reached 
 * and calls the results page.
 * Created as per the WebShala tutorial and adjusted by me.
 */

function nextQuestion() {
  if (questionCounter === questionLimit) {
    quizOver();
  } else {
    getNewQuestion();
    // remove the timer styling so that default style displays for the 
    //next question
    timer.classList.remove('wrong-time');
    timer.classList.remove('in-time');
    //scroll to the top of the screen when the next question loads.
    scroll(0, 0);
  }
}

/**
 * @function quizOver ends the quiz when the last question is reached and
 *  calls the results box to display results of the quiz.
 * created as per the WebShala tutorial.
 */

function quizOver() {
  // hide quiz Box and End Quiz button
  quizBox.classList.add('hide');
  // show result Box
  resultBox.classList.remove('hide');
  // calculate and add the quiz results
  quizResult();
  // remove the timer styling so that default style displays for the next
  // question
  timer.classList.remove('wrong-time');
  timer.classList.remove('in-time');
  //scroll to the top of the screen when the result section loads.
  scroll(0, 0);
}

/**
 * @function quizResult add the innerHTML to the results page to 
 * display the quiz results.It also ends the question if the final question
 *  has been reached and calls the results page.
 * Created as per the WebShala tutorial and adapted for the site.
 */

function quizResult() {
  resultBox.querySelector('.total-question').innerHTML = '<h2>' +
    questionLimit + '</h2>';
  resultBox.querySelector('.total-correct').innerHTML = '<h2>You scored</h2>' +
    '<h2>' + correctAnswers + '</h2>' + '<h2> / </h2>';
  if (localStorage.getItem('character')) {
    certificateName.innerHTML = localStorage.getItem('character');
  } else {
    certificateName.innerHTML =
      'DisneyStar';
  }
  resultTypeCalculation();
}

/**
 * @function resultTypeCalculation calculate the result based on the 
 * percentage of questions answered correctly and setup page display
 * accordingly.
 * @description percentage - percentage number calculated and used
 * to determine results outcome.
 * Most of this code is adapated code written by me.
 */

function resultTypeCalculation() {
  const percentage = (correctAnswers / questionLimit) * 100;
  if (percentage <= 100 && percentage >= 80) {
    resultBox.querySelector('.result-type').innerHTML = '<h2>You are a' +
      ' Disney Star</h2>';
    certificateBox.classList.add('top');
    certificateBox.classList.remove('second');
    certificateBox.classList.remove('third');
    certificateBox.classList.remove('fourth');
    certificateBox.classList.remove('last');
    resultDescriptor.innerHTML = '<p>Mickey Mouse would be proud of you! You' +
      ' truly are a Disney genius.<br>Not only do you know your Disney' +
      ' characters, but you know The Avengers and Star Wars characters' +
      ' too.</p>';
  } else if (percentage <= 79 && percentage >= 60) {
    resultBox.querySelector('.result-type').innerHTML = '<h2>You are a Disney' +
      ' Wizz</h2>';
    certificateBox.classList.add('second');
    certificateBox.classList.remove('top');
    certificateBox.classList.remove('third');
    certificateBox.classList.remove('fourth');
    certificateBox.classList.remove('last');
    resultDescriptor.innerHTML = '<p> Well done, you did great! You certainly' +
      ' are knowledgeable about all things Disney.<br>Why not take another' +
      ' try? I bet that you will ace it.</p>';
  } else if (percentage <= 59 && percentage >= 40) {
    resultBox.querySelector('.result-type').innerHTML = '<h2>You are a Disney' +
      ' Average Joe</h2>';
    certificateBox.classList.add('third');
    certificateBox.classList.remove('top');
    certificateBox.classList.remove('second');
    certificateBox.classList.remove('fourth');
    certificateBox.classList.remove('last');
    resultDescriptor.innerHTML = '<p>Not too bad! You are half way there to' +
      ' becoming a true Disney champion.<br>I am sure that you learnt a thing' +
      ' or two whilst completing the quiz too.</p>';
  } else if (percentage <= 39 && percentage >= 20) {
    resultBox.querySelector('.result-type').innerHTML = '<h2>You are a Disney' +
      ' Novice</h2>';
    certificateBox.classList.add('fourth');
    certificateBox.classList.remove('top');
    certificateBox.classList.remove('second');
    certificateBox.classList.remove('third');
    certificateBox.classList.remove('last');
    resultDescriptor.innerHTML = '<p>We all have to begin somewhere<br>I am glad' +
      ' to see that you do know certain fun facts about your favourite Disney' +
      ' characters <br> Brush up on your knowledge and try again.</p>';
  } else if (percentage <= 19 && percentage >= 0) {
    resultBox.querySelector('.result-type').innerHTML = '<h2>You are a Disney' +
      ' Wannabe</h2>';
    certificateBox.classList.add('last');
    certificateBox.classList.remove('top');
    certificateBox.classList.remove('second');
    certificateBox.classList.remove('third');
    certificateBox.classList.remove('fourth');
    resultDescriptor.innerHTML = '<p>Well done for trying but I am affraid' +
      ' that you have a long way to go.<br>This time it was a bit of a flop.' +
      ' Come back when you are ready to try again.</p>';
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
 * Created as per WebShala tutorial and adapted by me.
 */

function resetQuiz() {
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
  // remove the timer styling so that default style displays for the 
  //next question
  timer.classList.remove('wrong-time');
  timer.classList.remove('in-time');
}

/**
 * @function tryAgainQuiz resets the quiz page for the quiz to be taken again.
 * Calls the functions to reset various quiz areas.
 * Created as per WebShala tutorial and adapted by me.
 */

function tryAgainQuiz() {
  // hide the resultBox
  resultBox.classList.add('hide');
  // show the quizBox
  quizBox.classList.remove('hide');
  resetQuiz();
  setup();
  resultTypeCalculation();
  //scroll to the top of the screen when the quiz loads.
  scroll(0, 0);
}

// Start of Quiz//
// Add an event listener to the submit button to trigger the start of 
//the quiz.
//addEventListener code added by me.
startQuiz.addEventListener('click', setup);

/**
 * @function setup first the available questions are set in the 
 * availableQuestions array and then the getNewQuestion function is called.
 * The correct answers indicators are added. The html quiz page is setup 
 * to display the quiz.
 * Created as per WebShala tutorial and adapted by me.
 */

function setup() {
  homeBox.classList.add('hide');
  quizBox.classList.remove('hide');
  setAvailableQuestions();
  getNewQuestion();
  // to create answers indicator
  answersIndicator();
  //scroll to the top of the screen when the quiz loads.
  scroll(0, 0);
}

//Add an event listener for when the user selects to return to the home page
// to trigger to scroll to te top of the screen. Code added by me.

document.getElementById('home-page').addEventListener('click', scroll(0, 0));
