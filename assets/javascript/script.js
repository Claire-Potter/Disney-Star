/* jshint esversion: 6 */
// https://www.sitepoint.com/simple-javascript-quiz/ referenced and edited for const declarations
// Create constants for button event listeners and the character area in the html.
const generateButton = document.getElementById('generate-character');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const confirmButton = document.getElementById('confirm-button');
// Create constants for disneyCharacters images files, the area for the character value to return to 
//and the area for the character image to return to.
const characterImages = 'assets/images/disneyCharacters/';
const characterArea = document.getElementById('character');
const imageCharacter = document.getElementById('character-image-area');
let selectedCharacter = 0;

/**Characters array with objects to populate html with when functions are called.
 */

const characters = [{
    character: 'Elena',
    characterImageArea: 'elena.PNG',
  },
  {
    character: 'Pluto',
    characterImageArea: 'pluto.PNG',
  },
  {
    character: 'Grumpy',
    characterImageArea: 'grumpy.PNG',
  },
  {
    character: 'Moana',
    characterImageArea: 'moana.PNG',
  },
  {
    character: 'Olaf',
    characterImageArea: 'olaf.PNG',
  },
  {
    character: 'Bo Peep',
    characterImageArea: 'boPeep.PNG',
  },
  {
    character: 'Lightening McQueen',
    characterImageArea: 'lighteningMcQueen.PNG',
  },
  {
    character: 'Simba',
    characterImageArea: 'simba.PNG',
  },
  {
    character: 'Yoda',
    characterImageArea: 'yoda.PNG',
  },
  {
    character: 'Ant Man',
    characterImageArea: 'antMan.PNG',
  },
  {
    character: 'Jack Skellington',
    characterImageArea: 'jackSkellington.PNG',
  },
  {
    character: 'Ariel',
    characterImageArea: 'ariel.PNG',
  },
  {
    character: 'Mike Wazowski',
    characterImageArea: 'mikeWazowski.PNG',
  },
  {
    character: 'Marie',
    characterImageArea: 'marie.PNG',
  },
  {
    character: 'Venom',
    characterImageArea: 'venom.PNG',
  },
  {
    character: 'Goofy',
    characterImageArea: 'goofy.PNG',
  },
  {
    character: 'Black Widow',
    characterImageArea: 'blackWidow.PNG',
  },
  {
    character: 'Alice',
    characterImageArea: 'alice.PNG',
  },
  {
    character: 'Mickey Mouse',
    characterImageArea: 'mickeyMouse.PNG',
  },
  {
    character: 'Hulk',
    characterImageArea: 'hulk.PNG',
  },
  {
    character: 'Mary Poppins',
    characterImageArea: 'maryPoppins.PNG',
  },
  {
    character: 'Woody',
    characterImageArea: 'woody.PNG',
  },
  {
    character: 'Tinker-bell',
    characterImageArea: 'tinkerBell.PNG',
  },
  {
    character: 'Captain Marvel',
    characterImageArea: 'captainMarvel.PNG',
  },
  {
    character: 'Anna',
    characterImageArea: 'anna.PNG',
  },
  {
    character: 'Daisy Duck',
    characterImageArea: 'daisyDuck.PNG',
  },
  {
    character: 'R2 D2',
    characterImageArea: 'r2D2.PNG',
  },
  {
    character: 'Sulley',
    characterImageArea: 'sulley.PNG',
  },
  {
    character: 'Forky',
    characterImageArea: 'forky.PNG',
  },
  {
    character: 'Mulan',
    characterImageArea: 'mulan.PNG',
  },
  {
    character: 'Wall-E',
    characterImageArea: 'wallE.PNG',
  },
  {
    character: 'Cheshire Cat',
    characterImageArea: 'cheshireCat.PNG',
  },
  {
    character: 'Darth Vader',
    characterImageArea: 'darthVader.PNG',
  },
  {
    character: 'Pinocchio',
    characterImageArea: 'pinocchio.PNG',
  },
  {
    character: 'Spider Man',
    characterImageArea: 'spiderMan.PNG',
  },
  {
    character: 'Hercules',
    characterImageArea: 'hercules.PNG',
  },
  {
    character: 'Rex',
    characterImageArea: 'rex.PNG',
  },
  {
    character: 'Cinderella',
    characterImageArea: 'cinderella.PNG',
  },
  {
    character: 'Han Solo',
    characterImageArea: 'hanSolo.PNG',
  },
  {
    character: 'Captain America',
    characterImageArea: 'captainAmerica.PNG',
  },
  {
    character: 'Chip',
    characterImageArea: 'chip.PNG',
  },
  {
    character: 'Elsa',
    characterImageArea: 'elsa.PNG',
  },
  {
    character: 'Piglet',
    characterImageArea: 'piglet.PNG',
  },
  {
    character: 'Thanos',
    characterImageArea: 'thanos.PNG',
  },
  {
    character: 'Dumbo',
    characterImageArea: 'dumbo.PNG',
  },
  {
    character: 'Stitch',
    characterImageArea: 'stitch.PNG',
  },
  {
    character: 'Rapunzel',
    characterImageArea: 'rapunzel.PNG',
  },
  {
    character: 'Lotso',
    characterImageArea: 'lotso.PNG',
  },
  {
    character: 'Doc McStuffins',
    characterImageArea: 'docMcStuffins.PNG',
  },
  {
    character: 'BB-8',
    characterImageArea: 'bb8.PNG',
  },
  {
    character: 'Tigger',
    characterImageArea: 'tigger.PNG',
  },
  {
    character: 'Belle',
    characterImageArea: 'belle.PNG',
  },
  {
    character: 'Aladdin',
    characterImageArea: 'aladdin.PNG',
  },
  {
    character: 'Black Panther',
    characterImageArea: 'blackPanther.PNG',
  },
  {
    character: 'Vampirina',
    characterImageArea: 'vampirina.PNG',
  },
  {
    character: 'Bambi',
    characterImageArea: 'bambi.PNG',
  },
  {
    character: 'Kermit',
    characterImageArea: 'kermit.PNG',
  },
  {
    character: 'Baymax',
    characterImageArea: 'baymax.PNG',
  },
  {
    character: 'Stormtrooper',
    characterImageArea: 'stormtrooper.PNG',
  },
  {
    character: 'Aurora',
    characterImageArea: 'aurora.PNG',
  },
  {
    character: 'Peter Pan',
    characterImageArea: 'peterPan.PNG',
  },
  {
    character: 'Iron Man',
    characterImageArea: 'ironMan.PNG',
  },
  {
    character: 'Jasmine',
    characterImageArea: 'jasmine.PNG',
  },
  {
    character: 'Grogu',
    characterImageArea: 'grogu.PNG',
  },
  {
    character: 'Tiana',
    characterImageArea: 'tiana.PNG',
  },
  {
    character: 'Thor',
    characterImageArea: 'thor.PNG',
  },
  {
    character: 'Buzz Lightyear',
    characterImageArea: 'buzzLightyear.PNG',
  },
  {
    character: 'Beast',
    characterImageArea: 'beast.PNG',
  },
  {
    character: 'Snow White',
    characterImageArea: 'snowWhite.PNG',
  },
  {
    character: 'Donald Duck',
    characterImageArea: 'donaldDuck.PNG',
  },
  {
    character: 'Merida',
    characterImageArea: 'merida.PNG',
  },
  {
    character: 'Eeyore',
    characterImageArea: 'eeyore.PNG',
  },
  {
    character: 'Jessie',
    characterImageArea: 'jessie.PNG',
  },
  {
    character: 'Pocahontas',
    characterImageArea: 'pocahontas.PNG',
  },
  {
    character: 'Minnie Mouse',
    characterImageArea: 'minnieMouse.PNG',
  },
];

//Event Listener added to Generate button that first generates the character for the user, it will call the generateCharacter function
generateButton.addEventListener('click', generateCharacter);

/**
 * @function generateCharacter - returns the character to the constants characterArea and to the imageCharacter Area. 
 * @parameter _newCharacter is equal to the characters object from the characters array. The object is made up of the character name and the character image.
 * Populates the html layout for the character and the image by selecting the correct objects in the characters array.
 * // https://www.sitepoint.com/simple-javascript-quiz/ referenced for how to return characters to inner html.
 */

function generateCharacter(_selectedCharacter) {
  let characterName = characters[selectedCharacter];
  characterArea.innerHTML = `<h3> ${characterName.character} </h3>`;
  imageCharacter.innerHTML = `<img src= ${characterImages}${characterName.characterImageArea} alt = ${characterName.character} >`;
}


//Event Listener added to previous button to return to previous character image. It calls the function prevItem.
prevButton.addEventListener('click', prevItem);

/**
 * @function prevItem - utilises an if/else statement. If the current selectedCharacter is the first object in the array, then don't action anything else   
 * call the generateCharacter function and populate with the character before selectedCharacter.
 * Continue through the generateCharacter iteration of objects.
 */

function prevItem() {
  if (selectedCharacter == 0) {

  } else {
    generateCharacter(characters[selectedCharacter--]);
  }
}
//Event Listener added to next button to go to next character image. It calls the function nextItem.
nextButton.addEventListener('click', nextItem);

/**
 * @function nextItem - utilises an if/else statement. If the current selectedCharacter is the last object in the array, then don't action anything else   
 * call the generateCharacter function and populate with the character after selectedCharacter.
 * Continue through the generateCharacter iteration of objects.
 */
function nextItem() {
  if (selectedCharacter == characters.length - 1) {

  } else {
    generateCharacter(characters[selectedCharacter++]);
  }
}

//Event Listener added to confirm button to run the function getCharacter
confirmButton.addEventListener('click', getCharacter);

/** 
 * @function getCharacter - stores character and character image input values in localStorage.
 * @function loadCharacter - fetches stored values -will populate the characterName and the characterLogo areas in the quiz section.
 * Code for using local storage found on https://www.w3schools.com/html/html5_webstorage.asp and edited for site.
 *  Code to add as innerHTML found on https://stackoverflow.com/questions/4321380/how-to-get-the-inner-html-value and edited for site.
 */

function getCharacter() {

  let chosenCharacter = document.getElementById('character').innerHTML;
  let chosenImage = document.getElementById('character-image-area').innerHTML;

  localStorage.setItem('character', chosenCharacter);
  localStorage.setItem('character-image-area', chosenImage);
  loadCharacter();

}

function loadCharacter() {
  let chosenCharacter = localStorage.getItem('character');
  document.getElementById('character').value = chosenCharacter;

  let chosenImage = localStorage.getItem('character-image-area');
  document.getElementById('character-image-area').value = chosenImage;
}