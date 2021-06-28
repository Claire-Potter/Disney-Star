// Generate Character Name

/** Fetches character and character image chosen by the user and stored in local storage
 * Populates the Character Name and Character logo areas with this information.
 * Default name and image set incase user does not select a character or if there is an error storing or retrieving the data.
 * Code for using local storage found on https://www.w3schools.com/html/html5_webstorage.asp and edited for purpose.
 * Code to add as innerHTML found on https://stackoverflow.com/questions/4321380/how-to-get-the-inner-html-value and edited for purpose.
 */

if (localStorage.getItem('character') && (localStorage.getItem('characterImageArea'))) {
    document.getElementById('character-name').innerHTML = localStorage.getItem('character');
    document.getElementById('character-logo').innerHTML = localStorage.getItem('characterImageArea');
} else {

    document.getElementById('character-name').innerHTML = 'DisneyStar';
    document.getElementById('character-logo').innerHTML = `<img src= 'assets/images/site-images/disney-icon.jpg' alt = 'DisneyStar' >`;
}

// Quiz Section //

// Create constants for html input within the quiz

const questionNumbers = document.getElementById('questionNumber');
const writtenQuestions = document.getElementById('written-question');
const pictureOne = document.getElementById('picture-one');
const pictureTwo = document.getElementById('picture-two');
const pictureThree = document.getElementById('picture-three');
const pictureFour = document.getElementById('picture-four');
const pictureQuestions = document.getElementById('picture-questions');
const audioQuestions = document.getElementById('audio-question');
const answerOptions = document.getElementById('answerArea');
const pictureQuestionsFile = 'assets/images/pictureQuestions/';

/**Questions and Answers array with objects to populate html with when function is called
 */

const quiz = [{
        q: 'What year did Disneyland open?​',
        audio: '/assets/audio/aBugsLifeFlick.mp3',
        options: ['1951', '1957', '1953', '1955', ],
        optionsImages: ['', '', '', '', ],
        answer: '3',
    },
    {
        q: 'Who was the first cartoon character to get a star on the Hollywood Walk of Fame?​',
        audio: '/assets/audio/aBugsLifeFlick.mp3',
        options: ['Snow White', 'Mickey Mouse', 'Donald Duck', 'Cinderella', ],
        optionsImages: ['', '', '', '', ],
        answer: '1',
    },
    {
        q: 'How many brothers does Prince Hans of the Southern Isles have in Frozen?​​',
        audio: 'assets/audio/aBugsLifeFlick.mp3',
        options: ['12', '7', '15', '5', ],
        optionsImages: ['', '', '', '', ],
        answer: '0',
    },
    {
        q: 'What was the name of Walt Disney’s first cartoon character?​​',
        audio: 'assets/audio/aBugsLifeFlick.mp3',
        options: ['Wynchel', 'Donald Duck', 'Oswald the Lucky Rabbit', 'Mickey Mouse', ],
        optionsImages: ['', '', '', '', ],
        answer: '2',
    },
    {
        q: 'Who trained Hercules to be a hero?',
        audio: '/assets/audio/aBugsLifeFlick.mp3',
        options: ['Pygmalion', 'Philoctetes', 'Prometheus', 'Parentheses', ],
        optionsImages: ['', '', '', '', ],
        answer: '1',
    },
    {
        q: 'What is the name of Ariel and Prince Eric’s daughter?​',
        audio: '/assets/audio/aBugsLifeFlick.mp3',
        options: ['Marina', 'Alanna', 'Oceana', 'Melody', ],
        optionsImages: ['', '', '', '', ],
        answer: '3',
    },
    {
        q: 'What is the name of the castle in Shanghai Disneyland Park?​',
        audio: '/assets/audio/aBugsLifeFlick.mp3',
        options: ['Cinderella Dream Castle', 'Atlantis', 'The Enchanted Storybook Castle', 'Shanghai Palace of Mystery', ],
        optionsImages: ['', '', '', '', ],
        answer: '2',
    },
    {
        q: 'Which Disney Princess sings “Once Upon a Dream”?​​',
        audio: '/assets/audio/aBugsLifeFlick.mp3',
        options: ['Cinderella', 'Snow White', 'Belle, Beauty and the Beast', 'Aurora, Sleeping Beauty', ],
        optionsImages: ['', '', '', '', ],
        answer: '3',
    },
    {
        q: 'Emperor Kuzco turns into what animal in The Emperor’s New Groove?',
        audio: '/assets/audio/aBugsLifeFlick.mp3',
        options: ['Llama', 'Camel', 'Alpaca', 'Vicunas', ],
        optionsImages: ['', '', '', '', ],
        answer: '0',
    },
    {
        q: 'Which of these frisky felines is the beloved companion of Alice in Wonderland?',
        audio: '/assets/audio/aBugsLifeFlick.mp3',
        options: ['Tibs', 'Dinah', 'Marie', 'Toulouse', ],
        optionsImages: ['tibbs.png', 'dinah.png', 'marie.png', 'toulouse.png', ],
        answer: '1',
    },
    {
        q: 'Disney has recently made many live action versions of our favourite Disney Movies. Which of these couples do not feature in a live action film?',
        audio: '/assets/audio/aBugsLifeFlick.mp3',
        options: ['Cinderella and Prince Charming', 'Belle and Beast', 'Princess Anna and Prince Hans', 'Aladdin and Princess Jasmine', ],
        optionsImages: ['cinderellaAndPrinceDancing.png', 'belleAndBeast.png', 'annaHansDance.png', 'aladdinAndJasmine.png', ],
        answer: '2',
    },
    {
        q: 'This super hero is set to feature in a new full length feature coming out July 2021, select the correct hero:',
        audio: '/assets/audio/aBugsLifeFlick.mp3',
        options: ['Captain America', 'Captain Marvel', 'Black Widow', 'Thor', ],
        optionsImages: ['captainAmerica.png', 'captainMarvel.png', 'blackWidow.png', 'thor.png', ],
        answer: '2',
    },
    {
        q: 'The late Robin Williams voiced this beloved character who brought much comic relief to the film:',
        audio: 'assets/audio/aBugsLifeFlick.mp3',
        options: ['Baymax', 'Lightning McQueen', 'Genie', 'Mad Hatter', ],
        optionsImages: ['baymax.png', 'lightningMcqueen.png', 'genie.png', 'madHatter.png', ],
        answer: '0',
    },
    {
        q: 'This little fellow was separated from his mama at the beginning of the movie, luckily they were reunited:',
        audio: 'assets/audio/aBugsLifeFlick.mp3',
        options: ['Dumbo', 'Thumper', 'Chip', 'Bambi', ],
        optionsImages: ['dumboFlying.png', 'thumper.png', 'chip.png', 'bambi.png', ],
        answer: '0',
    },
    {
        q: 'Which of these characters made quite a spectacle when he thought the sky was falling?',
        audio: 'assets/audio/aBugsLifeFlick.mp3',
        options: ['Dormouse', 'Hulk', 'Flik', 'Chicken Little', ],
        optionsImages: ['dormouse.png', 'hulk.png', 'flik.png', 'chickenLittle.jpg', ],
        answer: '3',
    },
    {
        q: 'Which of these lovely ladies is not an official Disney Princess?',
        audio: 'assets/audio/aBugsLifeFlick.mp3',
        options: ['Merida', 'Alice', 'Cinderella', 'Elsa', ],
        optionsImages: ['merida.png', 'aliceInWonderland.png', 'cinderella.png', 'elsa.png', ],
        answer: '1',
    },
    {
        q: 'This friendly canine is the father of not 1 but 101 puppies:',
        audio: 'assets/audio/aBugsLifeFlick.mp3',
        options: ['Colonel', 'Perdita', 'Clip', 'Pongo', ],
        optionsImages: ['colonel.png', 'perdita.png', 'dodger.png', 'pongo.png', ],
        answer: '3',
    },
    {
        q: 'Name the film and the character heard in the following sound clip:',
        audio: 'assets/audio/beautyAndTheBeastBelle.mp3',
        options: ['Monsters, Inc - Sulley', "A Bug's Life - Flick", 'Good Dinosaur - Arlo', 'Onward - Ian', ],
        optionsImages: ['', '', '', '', ],
        answer: '1',
    },
    {
        q: 'Name the film and the character heard in the following sound clip:',
        audio: 'assets/audio/beautyAndTheBeastBelle.mp3',
        options: ['Sleeping Beauty - Aurora', 'Brave - Merida', 'The Princess and the Frog - Tiana', 'Beauty and the Beast - Belle', ],
        optionsImages: ['', '', '', '', ],
        answer: '3',
    },
    {
        q: 'Name the character heard in the following sound clip:',
        audio: 'assets/audio/donaldDuck.mp3',
        options: ['Donald Duck', 'Goofy', 'Mickey Mouse', 'Scrooge McDuck', ],
        optionsImages: ['', '', '', '', ],
        answer: '0',
    },
    {
        q: 'Name the film and the character heard in the following sound clip:',
        audio: 'assets/audio/findingNemoMerlin.mp3',
        options: ['Finding Dory - Merlin', 'Finding Nemo - Merlin', 'Shark Tale - Oscar', 'Shark Bait - Pisces', ],
        optionsImages: ['', '', '', '', ],
        answer: '1',
    },
    {
        q: 'Name the film and the character heard in the following sound clip:',
        audio: 'assets/audio/frozenElsa.mp3',
        options: ['Rapunzel - Rapunzel', 'The Little Mermaid - Ariel', 'Beauty and the Beast - Belle', 'Frozen- Elsa', ],
        optionsImages: ['', '', '', '', ],
        answer: '3',
    },
    {
        q: 'Name the character heard in the following sound clip:',
        audio: 'assets/audio/ironManTonyStark.mp3',
        options: ['Hawkeye aka Clint Barton', 'The Hulk aka Bruce Banner', 'Black Panther aka King TChalla', 'Iron Man aka Tony Stark', ],
        optionsImages: ['', '', '', '', ],
        answer: '3',
    },
    {
        q: 'Name the character heard in the following sound clip:',
        audio: 'assets/audio/maryPoppins.mp3',
        options: ['Mary Poppins', 'Nanny McPhee', 'Maria', 'Mother Carey', ],
        optionsImages: ['', '', '', '', ],
        answer: '0',
    },
    {
        q: 'Name the film and the character heard in the following sound clip:',
        audio: 'assets/audio/starWarsDarthVader.mp3',
        options: ['Star Wars: Attack of the Clones - Darth Vader', 'Star Wars: The Empire Strikes Back - Darth Vader', 'Star Wars: The Force Awakens - Darth Vader', 'Star Wars: A New Hope - Darth Vader', ],
        optionsImages: ['', '', '', '', ],
        answer: '1',
    },
]

//Set values and  constants for generating questions

let questionTracker = 0;
let currentQuestion;
let availableQuestions = [];
const totalQuestions = quiz.length;

/**  
 * @function setAvailableQuestions - push the questions into availableQuestions array
 */
function setAvailableQuestions() {
    for (let i = 0; i < totalQuestions; i++) {
        availableQuestions.push(quiz[i]);
    }
}

/**
 * @function getNewQuestion will set the question number, the question and the answer options
 */

function getNewQuestion() {
    //set Question Number
    questionNumbers.innerHTML = 'Question number ' + (questionTracker + 1) + ' of ' + quiz.length;

    //set Question
    //set a random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    let c = currentQuestion;

    writtenQuestions.innerHTML = c.q;
    pictureOne.innerHTML = `<img src= ${pictureQuestionsFile}${c.optionsImages['0']} alt = ${c.options['0']}>`;
    pictureTwo.innerHTML = `<img src= ${pictureQuestionsFile}${c.optionsImages['1']} alt = ${c.options['1']}>`;
    pictureThree.innerHTML = `<img src= ${pictureQuestionsFile}${c.optionsImages['2']} alt = ${c.options['2']}>`;
    pictureFour.innerHTML = `<img src= ${pictureQuestionsFile}${c.optionsImages['3']} alt = ${c.options['3']}>`;
    audioQuestions.innerHTML = `<audio src= ${c.audio} id='audio'></audio>`;
}
//First the available questions are sett in the availableQuestions array and then the getNewQuestion function is called

window.onload = function () {
    setAvailableQuestions();
    getNewQuestion();
}


function play() {
    var audio = document.getElementById("audio");
    audio.play();
  };