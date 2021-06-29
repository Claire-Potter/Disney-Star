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