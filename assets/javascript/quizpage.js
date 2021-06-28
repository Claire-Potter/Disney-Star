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
    let defaultVal = 'DisneyStar';
    let defaultImage = `<img src= ${defaultCharacterFolder}${defaultCharacter} alt = ${defaultVal} >`
    document.getElementById('character-logo').value = defaultVal;
    document.getElementById('character-name').value = defaultImage;
}

// Quiz Section //

// Create constants for html input within the quiz

const questionNumbers=document.getElementById('questionNumber');
const writtenQuestions=document.getElementById('writtenQuestion');
const pictureQuestions=document.getElementById('pictureQuestion');
const audioQuestions=document.getElementById('audioQuestion');
const answerOptions=document.getElementById('answerArea');

/**Questions and Answers array with objects to populate html with when function is called
 */

const quiz = [
    {qType: 'written',
    q: 'What year did Disneyland open?​',
    options: ['1951', '1957', '1953', '1955',],
    answer: '3',
    },
    {qType: 'written',
    q: 'Who was the first cartoon character to get a star on the Hollywood Walk of Fame?​',
    options: ['Snow White', 'Mickey Mouse', 'Donald Duck', 'Cinderella',],
    answer: '1',
    },
    {qType: 'written',
    q: 'How many brothers does Prince Hans of the Southern Isles have in Frozen?​​',
    options: ['12', '7', '15', '5',],
    answer: '0',
    },
    {qType: 'written',
    q: 'What was the name of Walt Disney’s first cartoon character?​​',
    options: ['Wynchel', 'Donald Duck', 'Oswald the Lucky Rabbit', 'Mickey Mouse',],
    answer: '2',
    },
    {qType: 'written',
    q: 'Who trained Hercules to be a hero?',
    options: ['Pygmalion', 'Philoctetes', 'Prometheus', 'Parentheses',],
    answer: '1',
    },
    {qType: 'written',
    q: 'What is the name of Ariel and Prince Eric’s daughter?​',
    options: ['Marina', 'Alanna', 'Oceana', 'Melody',],
    answer: '3',
    },
    {qType: 'written',
    q: 'What is the name of the castle in Shanghai Disneyland Park?​',
    options: ['Cinderella Dream Castle', 'Atlantis', 'The Enchanted Storybook Castle', 'Shanghai Palace of Mystery',],
    answer: '2',
    },
    {qType: 'written',
    q: 'Which Disney Princess sings “Once Upon a Dream”?​​',
    options: ['Cinderella', 'Snow White', 'Belle, Beauty and the Beast', 'Aurora, Sleeping Beauty',],
    answer: '3',
    },
    {qType: 'written',
    q: 'Emperor Kuzco turns into what animal in The Emperor’s New Groove?',
    options: ['Llama', 'Camel', 'Alpaca', 'Vicunas',],
    answer: '0',
    },
    {qType: 'picture',
    q: 'Which of these frisky felines is the beloved companion of Alice in Wonderland?',
    options: ['Tibs', 'Dinah', 'Marie', 'Toulouse',],
    optionsImages: ['tibs.gif', 'dinah.gif', 'marie.gif', 'toulouse.gif',],
    answer: '1',
    },
    {qType: 'picture',
    q: 'Disney has recently made many live action versions of our favourite Disney Movies. Which of these couples do not feature in a live action film?',
    options: ['Cinderella and Prince Charming', 'Belle and Beast', 'Princess Anna and Prince Hans', 'Aladdin and Princess Jasmine',],
    optionsImages: ['cinderellaPrinceDancing.gif', 'belleAndBeast.png', 'annaHansDance.png', 'aladdinAndJasmine.png',],
    answer: '2',
    },
    {qType: 'picture',
    q: 'This super hero is set to feature in a new full length feature coming out July 2021, select the correct hero:',
    options: ['Captain America', 'Captain Marvel', 'Black Widow', 'Thor',],
    optionsImages: ['captainAmerica.png', 'captainMarvel.png', 'blackWidow.png', 'thor.png',],
    answer: '2',
    },
    {qType: 'picture',
    q: 'The late Robin Williams voiced this beloved character who brought much comic relief to the film:',
    options: ['Baymax', 'Lightning McQueen', 'Genie', 'Mad Hatter',],
    optionsImages: ['baymax.gif', 'lightningMcqueen.gif', 'genie.png', 'madHatter.gif',],
    answer: '0',
    },
    {qType: 'picture',
    q: 'This little fellow was separated from his mama at the beginning of the movie, luckily they were reunited:',
    options: ['Dumbo', 'Thumper', 'Chip', 'Bambi',],
    optionsImages: ['dumboFlying.png', 'thumper.png', 'chip.png', 'bambi.png',],
    answer: '0',
    },
    {qType: 'picture',
    q: 'Which of these characters made quite a spectacle when he thought the sky was falling?',
    options: ['Dormouse', 'Hulk', 'Flik', 'Chicken Little',],
    optionsImages: ['dormouse.png', 'hulk.png', 'flikFlying.gif', 'chickenLittle.gif',],
    answer: '3',
    },
    {qType: 'picture',
    q: 'Which of these lovely ladies is not an official Disney Princess?',
    options: ['Merida', 'Alice', 'Cinderella', 'Elsa',],
    optionsImages: ['merida.png', 'aliceInWonderland.png', 'cinderella.png', 'elsa.png',],
    answer: '1',
    },
    {qType: 'picture',
    q: 'This friendly canine is the father of not 1 but 101 puppies:',
    options: ['Colonel', 'Perdita', 'Clip or Napoleon', 'Pongo',],
    optionsImages: ['colonel.gif', 'perdita.gif', 'clipnapoleon.gif', 'pongo.gif',],
    answer: '3',
    },
    {qType: 'audio',
    q: 'Name the film and the character heard in the following sound clip:',
    qSound: 'aBugsLifeFlick.mp3',
    options: ['Monsters, Inc - Sulley', "A Bug's Life - Flick", 'Good Dinosaur - Arlo', 'Onward - Ian',],
    answer: '',
    },
    {qType: 'audio',
    q: 'Name the film and the character heard in the following sound clip:',
    qSound: 'beautyAndTheBeastBelle.mp3',
    options: ['Sleeping Beauty - Aurora', 'Brave - Merida', 'The Princess and the Frog - Tiana', 'Beauty and the Beast - Belle',],
    answer: '3',
    },
    {qType: 'audio',
    q: 'Name the character heard in the following sound clip:',
    qSound: 'donaldDuck.mp3',
    options: ['Donald Duck', 'Goofy', 'Mickey Mouse', 'Scrooge McDuck',],
    answer: '0',
    },
    {qType: 'audio',
    q: 'Name the film and the character heard in the following sound clip:',
    qSound: 'findingNemoMerlin.mp3',
    options: ['Finding Dory - Merlin', 'Finding Nemo - Merlin', 'Shark Tale - Oscar', 'Shark Bait - Pisces',],
    answer: '1',
    },
    {qType: 'audio',
    q: 'Name the film and the character heard in the following sound clip:',
    qSound: 'frozenElsa.mp3',
    options: ['Rapunzel - Rapunzel', 'The Little Mermaid - Ariel', 'Beauty and the Beast - Belle', 'Frozen- Elsa',],
    answer: '3',
    },
    {qType: 'audio',
    q: 'Name the character heard in the following sound clip:',
    qSound: 'ironManTonyStark.mp3',
    options: ['Hawkeye aka Clint Barton', 'The Hulk aka Bruce Banner', 'Black Panther aka King TChalla', 'Iron Man aka Tony Stark',],
    answer: '3',
    },
    {qType: 'audio',
    q: 'Name the character heard in the following sound clip:',
    qSound: 'maryPoppins.mp3',
    options: ['Mary Poppins', 'Nanny McPhee', 'Maria', 'Mother Carey',],
    answer: '0',
    },
    {qType: 'audio',
    q: 'Name the film and the character heard in the following sound clip:',
    qSound: 'starWarsDarthVader.mp3',
    options: ['Star Wars: Attack of the Clones - Darth Vader', 'Star Wars: The Empire Strikes Back - Darth Vader', 'Star Wars: The Force Awakens - Darth Vader', 'Star Wars: A New Hope - Darth Vader',],
    answer: '1',
    },
]
let questionTracker = 0;
let currentQuestion;
let availableQuestions = [];
const totalQuestions = quiz.length;

/**  
* @function setAvailableQuestions - push the questions into availableQuestions array
*/
function setAvailableQuestions() {
    for(let i=0; i<totalQuestions; i++){
        console.log(i);}
}

window.onload = function(){
    setAvailableQuestions();
};