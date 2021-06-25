// Create constants for button event listeners and the character area in the html
const generateButton = document.getElementById('generateCharacter');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const generateArea = document.getElementById('characterGenerate');
const submitButton = document.getElementById('submitButton');
// Create constants for disneyCharacters images files, the area for the character value to return to and the area for the character image to return to
const characterImages = 'assets/images/disneyCharacters/';
const characterArea = document.getElementById('character');
const imageCharacter = document.getElementById('characterImageArea');

let selectedCharacter = 0;
// Characters array with objects to populate html with when functions are called
const characters = [{
        character: 'Aladdin',
        characterImageArea: 'aladdin.PNG',

    },
    {
        character: 'Elena',
        characterImageArea: 'elena.PNG',

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
        character: 'Winnie the Pooh',
        characterImageArea: 'winnieThePooh.PNG',

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
        character: 'Pluto',
        characterImageArea: 'pluto.PNG',

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
 * Uses a 'for' loop to iterate through the characters array. 
 * Populates the html layout for the character and the image by selecting the correct objects in the characters array.
 */
function generateCharacter() {
    for (let i = 0; i < characters.length; i++) {

        let x = characters[selectedCharacter];
        characterArea.innerHTML = `<h3> ${x.character} </h3>`;
        imageCharacter.innerHTML = `<img src= ${characterImages}${x.characterImageArea} alt = ${x.character} >`;
    }
}

//Event Listener added to previous button to return to previous character image. It calls the function prevItem.
prevButton.addEventListener('click', prevItem);

/**
 * @function prevItem - utilises an if/else statement. If the current selectedCharacter is the first object in the array, then don't action anything else   
 * call the generateCharacter function and populate with the character before selectedCharacter.
 * Continue through the generateCharacter iteration of objects.
 */

function prevItem() {
    if (selectedCharacter == characters[0]) {
  
} else {
        generateCharacter(characters[selectedCharacter--]);
    }
};
//Event Listener added to next button to go to next character image. It calls the function nextItem.
nextButton.addEventListener('click', nextItem);

/**
 * @function nextItem - utilises an if/else statement. If the current selectedCharacter is the last object in the array, then don't action anything else   
 * call the generateCharacter function and populate with the character after selectedCharacter.
 * Continue through the generateCharacter iteration of objects.
 */
function nextItem() {
    if (selectedCharacter == characters.length) {

    } else {
        generateCharacter(characters[selectedCharacter++]);
    }
};
