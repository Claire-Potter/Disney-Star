// Wait for the DOM to finish loading before running any of the functions on the page
document.addEventListener("DOMContentLoaded");

// Create constants for button event listeners
const generateButton = document.getElementById('generateCharacter');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

let selectedCharacter = 0;
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

function generateCharacter() {

}

function prevItem() {
}

function nextItem() {
}