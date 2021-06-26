/** Fetches character and character image chosen by the user and stored in local storage
 * Populates the Character Name and Character logo areas with this information.
 * Default name and image set incase user does not select a character or if there is an error storing or retrieving the data.
 */

 if (localStorage.getItem('character') && (localStorage.getItem('characterImageArea'))) {
    document.getElementById('character-name').innerHTML = localStorage.getItem('character');
    document.getElementById('character-logo').innerHTML = localStorage.getItem('characterImageArea');
} else {
    let defaultVal = 'DisneyStar';
    let defaultImage = `<img src= ${defaultCharacterFolder}${defaultCharacter} alt = ${defaultVal} >`
    document.getElementById('character-logo').innerHTML = defaultVal;
    document.getElementById('character-name').innerHTML = defaultImage;
}