# Disney Star

A fun Disney quiz, appropriate for the Disney expert or the Disney novice. Take some time to test your Disney knowledge and learn something new in the process. If you are a Disney fan, taking this quiz is a must!

![disney-star-mockup](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/disney-star-mockup.png)

<a href="https:/" target="_blank">Click Here</a> to access the site.


## Table of Contents

<!-- Start Document Outline -->

* [UX Design](#ux-design)

	* [Primary Persona](#primary-persona)
	* [User Stories](#user-stories)
	* [Strategy](#strategy)
		* [High-level Business Goals](#high-level-business-goals)
		* [Value](#value)
		* [Why is this site so special?](#why-is-this-site-so-special)
		* [Trade-offs](#trade-offs)
	* [Scope](#scope)
	* [Structure](#structure)
		* [Information Architecture](#information-architecture)
	* [Skeleton](surface)
	* [Surface](#surface)
* [Technologies](#technologies)
* [Features](#features)
* [Testing](#testing)
	* [Features Testing](#features-testing)
	* [Bugs and Issues](#bugs-and-issues)
	* [User Stories Testing](#user-stories-testing)
	* [Responsiveness and Compatibility](#responsiveness-and-compatibility)
	* [Code Validation](#code-validation)
	* [Testing Accessibility](#testing-accessibility)
	* [Performance Testing](#performance-testing)
	* [Deployment Testing](#deployment-testing)
* [Deployment](#deployment)
	* [Development Interface](#development-interface)
	* [Maintaining Code](#maintaining-code)
	* [Page Deployment](#page-deployment)
	* [How to Fork the Repository](#how-to-fork-the-repository) 
* [References](#references)
	* [Code](#code)
	* [Content](#content)
	* [Design Elements and Media](#design-elements-and-media)
* [Acknowledgments](#acknowledgments)

<!-- End Document Outline -->
# UX Design

## Primary Persona

A Disney lover. Enjoys all things Disney, the movies, the music, the parks, the characters and the merchandise. Wants to test her Disney knowledge as well as have a fun time doing so.

![An image of the details of the primary persona, name, personality, interests and tech preferences](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/primary-persona.PNG)

### User Stories

- Primary User

1. Loves Disney characters and has her favourites, would like to choose a Disney character to plays as.
2. The quiz will need to cover a range of genres within Disney to engage her.
3. A mixed media quiz to keep her interested - a mixture of written, images and audio.
4. The quiz should provide accurate answers when prompted to ensure she can learn more about Disney while taking it.
5. Any feedback and recommendations would be useful.
6. The questions and answers should be correct - nothing worse than seeing errors in a quiz.
7. Include a score tracker to accuratley track and calculate end score.
8. Having a limited time to answer questions would make it more interesting.
9. Fun award for knowledge given at the end of the quiz makes it worth her time.
10. Relevant and vibrant images are a must.
11. Audio tracks to play clearly when prompted.

- Secondary User: Quiz Owner

1. Simple website layout.
2. Aligned to Disney look and feel.
3. Ability to add new questions in a simple way
when required.
4. Ability to set the amount of questions asked.
5. Ability to update images when required.
6. Needs to easily understand at a high level which code does what so comments throughout are important.
7. Aims to keep the user engaged, so a way for the user to redo the quiz is a must, questions should generate randomly to make it a bit harder and more exciting.
8. This would be the minimum viable product for the site owner so the ability to add on and grow from here would be great.
9. A link back to the Disney store to open on a new page, to direct the user to view Disney products, as the site is using the Disney name.


## Strategy

I have taken some time to answer the following high-level strategic questions:

 1. Is the content culturally appropriate? 

	The content needs to be aimed at an English speaking person. Someone who is social media savvy and used to completing online quizzes or playing online games. It is aimed at young adults who enjoy the Disney theme, it can be played by children, however with adult assistance as some questions are a bit too difficult for kids.

 2. Is the content relevant? 
 

 - All of the content revolves around the Disney theme.
 - Questions based on the Disney franchises the Avengers and Star Wars are also included.
 - Images are of Disney characters or Disneyland theme parks.
 - Appropriate images are shown per question.
 - Images for certificates are themed according to the user's result.
 - All questions are based on Disney and included Disney movies, Disney characters, Disney theme parks, the Avengers and Star Wars.
 - Only where appropriate a small amount of images of non-Disney characters are used to compare a Disney film to other films. The correct answer is the Disney film.
 - All audio clips are of Disney characters and are matched as closely as possible to the questions asked. Some questions are not regarding the audio clip, so the clip does not affect the ability to answer.

 3. Can we track and catalogue the content in an intuitive way? 

 - The content needs to be easily accessible. The website should be readable on any device in particular a mobile phone  as many people don't have access to a desktop or a laptop.
 - As a user progresses through the site, they will first be introduced to the theme and then immediately engaged by asking to select their own character. They will then proceed to the quiz site, and asked if they are ready to take the quiz. Once the quiz begins all 25 questions are asked one after another and generated in a random order. The score is clearly tracked at the bottom. After the last question the user is taken to the results page and presented with their result, customised to how they did on the quiz. All content is presented in a logical order making it easy for the user to journey through the site.

 4. Is the technology appropriate?  
	 
	 The site is written in HTML, CSS and Javascript. Majority of the code is completed in Javascript to ensure that the site responds to the user's prompts and allows the user to directly engage. 
The target audience, will be able to access the website across all devices and the screen  would render accordingly.

### High-level Business Goals

 - Create a fun and user friendly website based on the Disney brand.
 - All content to be relevant to the Disney brand.
 - The user needs to be able to interact with the site.
 - To be utilised by young adults for entertainment purposes.

### Value

The value of this quiz lies in it's customisation and the use of the Disney content.
Through allowing a user to customise/choose their own Disney character right at the start of the quiz it is drawing them into the Disney world and allowing them to become a part of it.
Once the quiz begins, familiar and well-loved characters are displayed throughout all of the questions. Not only can the user see their favourite characters but audio clips allow them to hear them too. The user can learn more about Disney and it's various franchises through taking the quiz. The site connects to the user through their love of Disney and their memories of various Disney movies from throughout their lives. The results page once again uses customisation to engage personally with the user and reinforces that they are a part of the Disney family.

### Why is this site so special?


 - The consistency and simplicity of the pages - all linking back to the Disney theme.
 - The flow from one section to another through easy to find site buttons, consistantly styled. 
 - Consistent layout, colours, visual aids and messaging. 
 - The use of Disney characters really engages with a user's inner child and sense of nostalgia.
 - The quiz provides a challenge to the user to be able to improve their knowledge. It also allows the user to take a walk down memory lane as they rememeber their favourite Disney movies.


### Trade-offs

Using the trade-off process to rank the importance and feasibility of the opportunities I have decided:

1. To go ahead with 6/7 of the opportunities.
2. For the ability to create your own character, I will instead create a selection of characters for the user to choose from.
3. As this is a minimum viable product, only the initial Disney Quiz will be included. Adding additional Disney games would be a future opportunity.

![Table depicting the Importance rating vs. the Feasibility rating per Opportunity](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/trade-offs-table.PNG)
   

## Scope
For the primary user, to provide them with a fun and interactive quiz. A reliable website that can be utilised across multiple devices, receive user input and update accordingly. 

For the secondary user, a simple site that is easy to manage daily and update when necessary.

### Feature Trade Off

 <a href="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/feature-trade-off.pdf" target="_blank">Feature Trade Off Table</a>


This site will be developed as a minimum viable product. Future releases could include additional functionality depending on the success of the first release. This could be the ability to add new games or quizzes to the site on an ongoing basis.

### Release One

#### Functional Requirements

1. Responsive interface
2. Navigation via site buttons
3. Array of questions with assigned images, audio clip and answer options as well as correct answer
4. Generate questions ramdomly
5. Do not reask the same questions
6. Time limit per question
7. Compulsory answer per question
8. Ability to update questions
9. Ability to set the number of questions asked
10. Display correct images per question
11. Assign correct audio clip per question and allow the user to play
12. Display the question answer options in a random order
13. If the answer is correct, mark the option box green. If the answer is incorrect, mark the option box red and display correct answer in green
14. Only allow user to select one option
15. Keep a score tracker with correct and wrong answers given to reflect in the end calculation
16. Calculate results based on a percentage range and display content based on range achieved
17. Allow user to choose their own character from character name and character images array
18. Allow user to scroll back and fourth between the various characters available in the array
19. Display character chosen across site pages
20. Create buttons for the user to navigate with across the site. Use these buttons as event triggers
21. Only display page sections when relevant, otherwise hide the section
22. Generate next question when user clicks the event trigger Next
23. Reset the quiz when the user chooses to redo the quiz
24. When quiz begins setup the page and question appropriately
25. When the quiz ends, setup the page and calculate the results to display
26. Include a link back to the home page
27. Include a link to the Disney Store to open in a new tab
28. Footer fixed to bottom of the page
29. Multi-page website
30. Appropriatly styled elements
31. Auto-scroll to the top of the page when the screen changes and between questions

#### Content Requirements

1. Relevant quiz questions
2. Appropriate images per question
3. Appropriate images for the site
4. Appropriate audio clips per question
5. Customised results displayed based on how many questions were answered correctly
6. Allow user to choose their own character from character images
7. Allow user to redo the quiz, return to home or go to the Disney store

#### Delivery Constraints

1. Skill - Developer is learning HTML and CSS which affects her efficiency. This is the developer's first time working in javascript so this presents a learning curve
2. Time - limited time to complete and deliver the site


## Structure
Development conventions and best practice have been applied as far as possible to ensure that user expectations are met. The breakdown of the structure is available further down in this document within the features section.

### Information Architecture

![Site Hierarchy ](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/skeleton.PNG)
![Site Hierarchy Two ](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/skeleton2.PNG)

## Skeleton 

### Desktop Wireframes

1. <a href="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/wireframes/home-screen.PNG" target="_blank">Home Page</a>
2. <a href="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/wireframes/quiz-text-based.PNG" target="_blank">Quiz text-based</a>
3. <a href="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/wireframes/quiz-audio-based.PNG" target="_blank">Quiz audio-based</a>
4. <a href="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/wireframes/quiz-picture-based.PNG" target="_blank">Quiz picture-based</a>
5. <a href="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/wireframes/quiz-completion.PNG">Quiz completion</a>


### Mobile Wireframes


1. <a href="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/wireframes/mobile-home-screen.PNG" target="_blank">Home Page</a>
2. <a href="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/wireframes/quiz-text-based-mobile.PNG" target="_blank">Quiz text-based</a>
3. <a href="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/wireframes/quiz-audio-based-mobile.PNG">Quiz audio-based</a>
4. <a href="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/wireframes/quiz-picture-based-mobile.PNG">Quiz picture-based</a>
5. <a href="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/wireframes/quiz-completion-mobile.PNG">Quiz completion</a>

## Surface

As this is a Disney themed site it was essential that Disney specific colours were used. I found the following colour palette which I used for the site:

![Disney colour palette used for site design](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/disney-palette.PNG)

I prefer a clean and simple design rather than busy. I wanted to create a space in which the Disney images could really speak for themselves. All images were chosen specifically for the sections they were added to and those used with questions were aligned to the question content. Where possible they are all formatted to have a dark blue border with a border-radius of 5%. The width of the various page sections was aligned over both pages and adjusted per screen size. The font was set as default Satisfy for headings, as this has a very Disney look about it  and as Raleway for text as this was a suggested pairing, with Sans serif as a backup for both. It was important to create a fluid feeling across the site pages to provide continuity. The quiz page itself generates the various quiz questions in the same format. 

![Disney Green ](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/disney-green.PNG)

The green colour chosen to indicate correct answers was aligned again to the Disney theme and is called Disney green. A shadow is added to all buttons when clicked to provide the user of the sensation of pressing down on a button. Please review the below document discussing the design elements used throughout the site.

<a href="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/disney-quiz-design.pdf" target="_blank">Disney Star design</a>

### Design Differences

1. The Disney Logo was changed to include a wand image on either side.
The Generate button on the home screen was moved to display within the single column view as this was more visually appealing than displaying next to the character box. An arrow either side of the character box was added to scroll between characters.
2. The character name area background-colour was changed to our Disney dark blue to prevent it from looking like an input area.
3. The character name and logo was moved to be included in the header on the right hand side and centred for mobile.
4. The original quiz was designed to display the questions as separate written, picture or audio questions. In designing the layout of the page, the three question types were included across all questions as visually it worked much better to bring life and character to the quiz.
5. Originally the score tracker was just going to be formatted as 0/25. A pop up would then say whether the user got the question right or wrong. Instead the tracker was featured at the bottom of the quiz and included an indicator per question whether the user scored correctly or incorrectly. This was combined with the colour of the question option turning green for correct or red for wrong. If wrong the correct option would then display in green.
6. A timer was added to the quiz which was not included in the original design.
7. An End quiz button was added to allow the user to end the quiz at any stage.
8. The mobile version of the quiz pictures was going to display the four quiz pictures as a column, however with a single column display and sizing the images remaind in a grid as per the larger screen display.
9. The audio clip section now includes a written version of the quote. Added to improve the site accessibility.
10. The results page, next steps section included an additional icon back to the home page alongside the redo quiz icon and the icon to access the Disney store.


## Technologies

The following languages were used to create the website:

1. HTML
2. CSS
3. JavaScript

Other technologies:

1. Lucidchart - https://lucid.app/lucidchart
 	* To create the persona and wireframes.
2. Gitpod
	* Platform used to develop and test site.
3. Github
	* Platform used to host repository and deployed site.
4. Google Fonts
	* Used for typography
5. Font Awesome
	* Used for Icons
6. Free Formatter
	* Used to format html, css and javascript code.
7. Markdown Monster
	* Used to edit Markdown
8. Google Chrome DevTools
	* To continuously test and check code
9. SweetAlert2
       * Used to style the timer alert.


# Features

The Disney Star site consists of the following Features:

* [Features](#features)
	* [Character Generator](#character-generator)
	    * [Choosing a character](#choosing-a-character)
	* [Quiz welcome](#quiz-welcome)
	* [Character Logo](#character-logo)
	* [Quiz](#quiz)
	    * [Random questions](#random-questions)
	    * [Pictures and Audio](#picture-and-audio)
	    * [Question options](#question-options)
	    * [Timer](#timer)
	    * [Disable Next Button](#disable-next-button)
	    * [Answer Results](#answer-results)
	    * [Score tracking](#score-tracking)
	 * [Results](#results)
	 * [Next Steps](#next-steps)
	 * [Features Left to Implement](#features-left-to-implement)
	    
## Character Generator

   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/character-generator.PNG" 
     alt="character generator" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 


The purpose of the character generator is to allow the user to select their own character to complete the quiz as. This really makes them a part of the Disney theme and allows them to choose their favourite character.

To begin the process the user will click on the generate button. This will call the generate character function. What this does is populate the character name and image area with the first character within the characters array.

   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/generate-character.PNG" 
     alt="generate character" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 


 **Choosing a character**

<img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/next-character.PNG" 
     alt="next character" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

 - The user will then have the option to click the next character icon. The user can scroll through all of the characters within the array until the last item. 
 
 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/previous-character.PNG" 
     alt="previous character" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

- The previous character icon will allow the user to scroll back through the array until the first character in the array. This allows the user to view all of the characters and be able to then return to previous options if they wish to select them.

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/submit.PNG" 
     alt="submit" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

- Once the user is happy with their character they will click submit to continue on to the quiz. The submit button will follow the hyperlink to open the next page - quiz.html. It also acts as an event listener. It will save the selected character name and selected character logo to local storage.It will then fetch the saved data, ready to repopulate it when triggered to.

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/get-character.PNG" 
     alt="get-character" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
   
## Quiz Welcome

   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/welcome-page.PNG" 
     alt="quiz welcome page" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
    
The welcome page is the first section from the quiz page to display. It includes a lovely image of Mickey Mouse and asks the user if they are ready to proceed creating a bit of anticipation. When the Yes button is clicked, the setup for the start of the quiz is triggered.

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/start-quiz.PNG" 
     alt="start-quiz" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            ">
            
  The setup function works as follows:
  
   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/setup.PNG" 
     alt="setup" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
            
## Character Logo
   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/character-logo.PNG" 
     alt="character-logo" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

The first element on the quiz page is the character name and logo section. Through JavaScript the character name and image saved from the home page into local storage are called and set to populate the inner html of the character area on the quiz page. This ensures continuity and customisation of the user's experience.

## Quiz

   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/quiz.PNG" 
     alt="quiz-image" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

The quiz itself is made up of ten features:
1. The quiz number -  the question counter is set to start at zero, as each question loads, it will be assigned a number from number 1 to 25, 25 will be the final question as this is the total number of questions available in the array.
2. The timer - 45 seconds is provide per question for the user to capture their answer. Scenarios have been customised according to wether the user answers correctly in time, incorrectly in time or runs out of time.
3. An End Quiz button is included to enable the user to end the quiz if they want to. This will return them to the quiz welcome page.
4. The written question - each question within the array contains a written question which will be populated here.
5. The pictures for the question - each question contains four images related to the question. Where relevant the pictures are linked to the answer options. If the user hovers over the picture, a tool-tip text pop up will display the picture name.
6. The play button will trigger the audio clip linked to the question to play. Again as far as possible, the clips are associated with the question being asked. Some written questions will ask directly as to who the character within the clip is.
7. The various answer options will populate just below the play button. The user will need to click on the answer they think is correct.
8. The next button will generate the next question. This button will show as disabled until the user has chosen an option. This will prevent the user from accessing the next question before answering the current question.
9. The score tracker at the end of the screen is used to track correct and incorrect answers given.
The quiz is populated when the get question function is called. A breakdown of some of the features has been completed below.
10. When the next question loads, it will automatically scroll to the top of the screen to see the top of the question. This is particularly useful on smaller mobile screens.

**Random Questions**

   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/random-questions.PNG" 
     alt="randomise questions" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

- Utilising Math.random() the questions will be populated from the array in a random order. This means that if the user repeats the quiz, they will not have the same order of questions. If the array contained more questions than the number of questions asked, the user would then answer a different mixture of questions each time the quiz is taken.

   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/remove-question.PNG" 
     alt="remove-question" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

To prevent a question from being re-asked, it is removed from the questions array through a splice, once it has been asked within the quiz.

	
 **Pictures and Audio**

   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/array-option.PNG" 
     alt="an array option" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/picture-audio-population.PNG" 
     alt="pictures and audio population" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

- The pictures and audio options, as seen in the above quiz image, are taken from the associated question within the array and populated within the html page through JavaScript. A play function is then called when the user clicks the play button to play the audio clip.

**Question Options**

   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/options.PNG" 
     alt="question options" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

 - The options are fetched from the questions array and added to an available options array to be added to the html. The random calculation is then used to make sure the options are added in a random order. Once an option has been added, it is removed from the available options array through a splice to make sure it is not used again. Each option is then populated within the html page.

**Timer**

   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/fixed-timer.PNG" 
     alt="question options" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

 - A timer has been added to the quiz. This provides the user with 45 seconds to answer each question, making the quiz a bit more exciting. The timer has been fixed so that it moves with the user as they scroll through the quiz.
 - If the user answers the quiz question correctly and in time, the timer message will display as the below image and the user can move on to the next question:

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/correct-beat-timer.PNG" 
     alt="question options" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
	    
- If the user answers the quiz question incorrectly but in time, the timer message will display as the below image and the user can move on to the next question:

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/incorrect-beat-timer.PNG" 
     alt="question options" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
	    
- If the user runs out of time before answering, an alert will display and the quiz will be over. The user will be re-directed to the results page:

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/alert-time-out.PNG" 
     alt="question options" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

- The code used to setup the timer and run it is as follows:

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/timer.PNG" 
     alt="question options" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

- An End Quiz button displays directly underneath the timer and allows the user to end the quiz at any time.

**Disable Next Button**

   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/disable-next.PNG" 
     alt="question options" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

The next button (submit button) is disabled during the getNewQuestion function to ensure that the user cannot move on th the next question without answering.


**Answer Results**
   
   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/answer-correct.PNG" 
     alt="correct answer" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
 
 If an answer is correct, the background-colour of the chosen option will change to green through an animation.
 
   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/answer-incorrect.PNG" 
     alt="incorrect-answer" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

If an answer is incorrect, the background-colour of the chosen option will change to red through an animation. At the same time, the correct answer will be marked in green.

The user is prevented from choosing more than one option per question by making the options unclickable once an answer is selected. At this point, the next button (submit button) is enabled as the user can move on to the next question now that they have answered.

The get results function is responsible for performing the above actions and calling the unclickable options function:

  <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/get-results.PNG" 
     alt="get results" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
            
   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/unclickable-options.PNG" 
     alt="unclickable options" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            ">
            
            
 
**Score Tracking**

  <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/score-tracker.PNG" 
     alt="the score tracker" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

 - The score tracker keeps track of the result of every question. If the question is answered correctly, it will be marked as correct with a green background colour if answered incorrectly it will be marked as wrong with a red background colour.
 
   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/answers-indicator.PNG" 
     alt="answers indicator code" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

	
## Results

  <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/results.PNG" 
     alt="results" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
	
The results page is the final page to display once the quiz is over. The results are calculated and the correct results options are displayed according to the percentage of correct answers achieved. The total score achieved out of the total number of questions asked will display first. This is followed by their results title. Example, if the user answered 80 to 100 percent of the questions correctly, they will be called a Disney Star. A small blurb about their achievement will then display. The certificate area contains a picture-background which is relevant to their score achieved. Their character name is then populated within the certificate, tying right back to the beginning when the user selected their character.

The results are calculated as a percentage and the html is setup to display only the relevant text and pictures for the percentage range that the score falls within

  <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/results-percentage.PNG" 
     alt="results percentage" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
 
 This is then called through the quiz result function, to generate the rest of the html for the page with the results data.
   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/quiz-result.PNG" 
     alt="quiz results" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
 
 When the last question is asked, the quiz over function will end the quiz and setup for the result section to display in the html and trigger the quiz results function.
 
   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/quiz-over.PNG" 
     alt="quiz over" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
 
 ## Next Steps

  <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/next-steps.PNG" 
     alt="next steps" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

 The next steps section will invite the user to either re-do the quiz, this will take them back to the start of the quiz section and reset the quiz results, go back to Disney Star Home, this will take them to the Disney Star home page to re-select their character and begin again or to visit the Disney Store, this will open the Disney Store site as a new page for the user to explore further.
 
 The quiz is reset as follows when the user selects to redo the quiz:
 
<img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/read-me-images/features/restart-quiz.PNG" 
     alt="restart quiz" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 


  ## Features Left to Implement
-   Various options could be chosen for the quiz, for example, many more questions could be added, so that whenever the quiz runs, a new selection of questions are asked.
-   Each time the user redoes the quiz, they could be given less time to answer each question, thereby increasing the challenge.
-   Depending on the success of the quiz, additional Disney themed games could be added to the site. These games would be coded in html, css and JavaScript. Some options could be:
	- Disney themed word search
	- Disney themed rock paper scissors
	- Disney themed hangman 


# Testing

### Features Testing

Please access the Disney Star testing pack to view full testing of the site features.

<a href="https://github.com/Claire-Potter/Disney-Star/tree/master/read-me-content/testing/test-scenarios">Disney Star testing pack</a>

### Bugs and Issues

The following issues were experienced during the course of development:

1. Event listener to wait for the DOM content to be loaded
    * I originally wanted to add an event listener per page to wait for all DOM content to be loaded before user can interact. However, as my event listeners were 'clicks' of buttons to trigger the character generation or the quiz, having the DOM content even listener additionally prevented the click from triggering the JavaScript code. I therefore removed the DOM content event listener.
   
2. Generate Next character in the array.
     * When I tried to use the next icon to generate the next character in the array within the Character Generate feature, it would not go past the second character. I had my formula wrong an was not looking at the entire characters.length. Once resolved and corrected I could scroll through all characters in the array up to and including the last character.
     
 3. Saving the character name and character image to local storage and then fetching them to repopulate in a new element caused some issues.
 	* I could not get them to populate within the character name and logo elements on the same page when moving between page sections. It kept on populating with the previous character selected, then the default name and image or as undefined. I eventually created a separate html page and a separate JavaScript file for the quiz.page and I was able to successfully populate the name and logo with the saved character name and character image from local storage.
 
 4. As this was my first time creating a quiz using JavaScript I followed a YouTube tutorial on how to create a quiz. The reason I chose this particular tutorial was because it randomised the questions and it included a score tracker which were two features I wanted to include.
	 *  I followed the video step by step and recreated the code within my JavaScript file. Many times the code would not work for me as it had done within the tutorial. I had to then take extra time to check the alignment to my own html elements, my own quiz array and other code I already had created within my JavaScript file. Carefully updating and linking in the code from the tutorial through each step was required to ensure that it worked. Even though the tutorial provided me with certain functions and guidance, I also added extra customisation to include additional features such as the timer, ensuring that the next button was disabled until the user had answered, my event listeners, customisation of inner html, adding additional if else scenarios to customise outcomes of the timer and the results and the function to play the audio. I had to keep testing to ensure that what I added didn't break anything in the code, which it did plenty. It was a major learning exercise to understand exactly what each function did and exactly how it did it to be able to customise it as I did and eliminate all errors along the way. Through disabling functions into small sections, using console.log to visualise what each section was doing, I was able to incorporate all of my changes
    

### User Stories Testing

- Primary User

1. Loves Disney Characters and has her favourites, would like to choose a Disney character to plays as.

Outcome: Passed
The Character Generator feature enables the user to achieve this. 

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/choose-character.PNG" 
     alt="choose-character" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

2. The quiz will need to cover a range of genres within Disney to engage her.

Outcome: Passed
The Disney quiz includes questions on Disney characters, modern and classic Disney, Pixar, Star Wars, The Avengers, Disney Theme Parks, Disney Images and Audio clips. 


3. A mixed media quiz to keep her interested - a mixture of written, images and audio.

Outcome: Passed
The Disney quiz includes a written question, pictures and audio

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/mixed-media.PNG" 
     alt="mixed media quiz" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
	    
4. The quiz should provide accurate answers when prompted to ensure she can learn more about Disney while taking it.

Outcome: Passed
If answered incorrectly, the correct answer will display.

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/answers.PNG" 
     alt="correct answer shown" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
	    
5. Any feedback and recommendations would be useful.

Outcome: Passed
The results feature provides feedback on how the user did, what they should do to improve (if necessary) and provides them with next steps.

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/results.PNG" 
     alt="results" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

6. The questions and answers should be correct - nothing worse than seeing errors in a quiz.

Outcome: Passed
All answers have been double checked. All images and audio clips match the question being asked. Image captions and answer options have been checked and aligned. JavaScript code has been tested and passed to ensure that the correct options display per question and the correct answer is marked as right.

7. Include a score tracker to accurately track and calculate end score.

Outcome: Passed
The score is accurately tracked per question and the end results are calculated correctly.

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/score-tracker.PNG" 
     alt="the score tracker" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 


8. Having a limited time to answer questions would make it more interesting.

Outcome: Passed
A timer has been added to the quiz to make sure that the user only has 45 seconds per question to answer.

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/fixed-timer.PNG" 
     alt="the timer" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

9. Fun Award for knowledge given at the end of the quiz makes it worth her time.

Outcome: Passed

The results include a fun title, descriptor and certificate made out to the chosen Disney character. This is presented to the user at the end of the quiz.

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/results-display.PNG" 
     alt="results presented to the user" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
	    
10. Relevant and vibrant images are a must.

Outcome: Passed

All images used on the site are Disney themed or related to the question. They have been specifically chosen to reflect the Disney characters and have been sized appropriately to ensure the quality is good.

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/mickey-friends7.png" 
     alt="mickey mouse and friends image example" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

11. Audio tracks to play clearly when prompted.

Outcome: Passed

The audio clips only play when user prompts. The audio quality is clear and understandable.

- Secondary User: Quiz Owner

1. Simple website layout.

Outcome: Passed
The website design is clean and simple whilst en-capturing the Disney spirit. Navigation is clear to follow as appropriate buttons are presented to take the user to the next step at all points.

2. Aligned to Disney look and feel.

Outcome: Passed
The colour palette utilised, the font and all images have been aligned to the Disney theme.

3. Ability to add new questions in a simple way
when required.

Outcome: Passed
Questions can be added to the question array as follows:
*   Access the quizpage.js file found in assets/javascript
* The array has been created as a const named quiz and is located near the beginning of the script.
* Each object within the array has been created with the written question, the audio file title the answer options, the image file title, the image titles and the answer.
* To add a new question, make sure the associated images and audio are uploaded to the assets/images/picture questions and the assets/audio files.
* Copy and paste the last quiz object again at the end of the array and replace the content with the new question content.
* Update total questions number to the new length of questions
* Save changes and the JavaScript code will include the new question as part of the questions array.

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/questions-array.PNG" 
     alt="the quiz array" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 


4. Ability to set the amount of questions asked.

Outcome: Passed
The number of questions asked can be easily increased or decreased by updating the const quizlimit number within the quizpage.js file:

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/question-numbers.PNG" 
     alt="number of questions asked" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 


5. Ability to update images when required.

Outcome: Passed
The images can be updated within the assets/images/ - various image folders per site section. Keep the same file name to replace an image and it will be automatically replaced within the site. New images can be uploaded here and referenced in the relevant area they are being added to.

6. Needs to easily understand at a high level which code does what so comments throughout are important.

Outcome: Passed
Relevant comments have been added across the site files to provide context to the code.

7. Aims to keep the user engaged, so a way for the user to redo the quiz is a must, questions should generate randomly to make it a bit harder and more exciting.

Outcome: Passed
All questions and options generate randomly through the JavaScript code. Once the quiz has ended the user is presented with the option to redo the quiz. The quiz is then reset for the user to take again.

 <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/random-questions.PNG" 
     alt="code to make questions random" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
            
   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/redo-quiz.PNG" 
     alt="the redo quiz link" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 
            
   <img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/restart-quiz.PNG" 
     alt="the code to restart the quiz" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

8. This would be the minimum viable product for the site owner so the ability to add on and grow from here would be great.

Outcome: Passed
Various growth opportunities are available to the site owner as presented in the features yet to be implemented section.

9. A link back to the Disney store to open on a new page, to direct the user to view Disney products, as the site is using the Disney name.

Outcome: Passed
This has been included within the next steps section.

<img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/user-story-testing/next-steps.PNG" 
     alt="the link to the Disney store within the next steps section" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 


### Responsiveness and Compatibility

1. The site has been tested using the following browsers - Safari, Chrome, Firefox, Edge and Opera. The site is compatible and accessible across all browsers.

Please <a href="https://github.com/Claire-Potter/Disney-Star/tree/master/assets/read-me-content/testing/browser-testing" target="_blank">click here</a> to view browser testing screenshots.

2. Devices and Screen Sizes

* The site was tested using the Responsively App as well as the Google Chrome device tool bar. The site has been setup to render effectively across multiple screen sizes and devices. I have tested using the following device displays:

* Responsively App:

    * 5K Display 5120 * 2880
    * 4K Display 3840 * 2160
    * MacBook Pro 16 inch 3072 * 1920
    * MacBook Pro 15 inch 2880 * 1800
    * MacBook Pro 13 inch 2560 * 1600
    * Laptop with HiDPi Screen 1440 * 900
    * Laptop 1400 * 1000
    * MacBook Air 1440 * 900
    * Laptop with MDPi Screen 1280 * 800
    * Generic Laptop 1280 * 950
    * iPad Pro 1024 * 1366
    * Kindle Fire HDX 800 * 1280
    * iPad 768 * 1024
    * Microsoft Lumia 550 640 * 360
    * Blackberry Playbook 600 * 1024
    * Nokia N9 480 * 854
    * iPhone 6/7/8 Plus 414 * 736
    * iPhone 6/7/8 375 * 667
    * Galaxy S 5 360 * 640
    * iPhone 4 320 * 480
    * JioPhone 2 240 * 320
    * Responsive Mode - change the screen width to test various sizes

* Google Chrome device tool bar:

    * Galaxy Note 3
    * Galaxy Note II
    * Galaxy S III
    * KindleFire HDX
    * LG Optimus L70
    * Laptop with HiDPI screen
    * Laptop with MDPI screen
    * Laptop with touch
    * Microsoft Lumia 550
    * Microsoft Lumia 950
    * Moto G4
    * Galaxy S5
    * Pixel 2
    * Pixel 2 XL
    * iPhone 5/SE
    * iPhone 6/7/8
    * iPhone 6/7/8 Plus
    * iPhone X
    * iPad
    * iPad Pro
    * Surface Duo
    * Galaxy Fold
    * Responsive Mode


### Code Validation

1. W3C HTML Code Validator

* The code for the following html pages was entered into the validator and all pages passed:
    * index.html
    * quiz.html (two warnings were received regarding missing headings - however these are added to the sections through javascript.)

2. W3C CSS Jigsaw Validator

* The code for the stylesheet.css was entered into the validator and passed.

* This excludes the link to google fonts as this is an external source

1. JScript Code Validator

* The code for the following javascript scripts pages was entered into the validator passed:
    * script.js
    * quizpage.js (a not that getResult variable was not used however it is called when the javascript adds it to the html. It also warns about the Sweet Alert alert not being declared but this has been added as per the SweetAlert2 guide. )



Please <a href="https://github.com/Claire-Potter/Disney-Star/tree/master/read-me-content/testing/validations" target="_blank">click here</a> to view the screenshots.

### Testing Accessibility

The Wave Evaluation Tool was used to test the Accessibility of the site. 
I had to make some changes to make sure I could pass the accessibility testing as best as possible.

Across the pages I received a warning regarding missing headings:

<img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/accessibility/example-changes/skipped-heading.PNG" 
     alt="skipped heading example" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

I went through the errors and made sure that the correct header level was added, or that the heading like styling was removed.

I received multiple warnings about redundant alt text. As far as possible I went through and removed redundant text. This posed a challenge within the quiz, as the quiz images have the same title as the quiz options. In most cases this is the character name. I have to have it repeating because the user needs to be able to see which character is shown in the picture as well as be able to read the various options. I managed to cut the warnings down from about 11 to 5.

<img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/accessibility/example-changes/redundant-alt-text.PNG" 
     alt="redundant text" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

<img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/accessibility/example-changes/example-redundant-text.PNG" 
     alt="redundant text" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

<img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/accessibility/example-changes/remove-redundant-text.PNG" 
     alt="redundant text" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 

The final warning was received was with regards to the audio clip. A transcript of the audio clip is required. As I do not have transcripts I have instead included the quote from the sound clip on the page so that it can also be seen and read. The accessibility warning is still there, but a visual solution is at least now available.

<img src="https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/testing/accessibility/example-changes/include-sound-clip-quote.PNG" 
     alt="audio clip quote example" 
     style="display:block; 
            float:none; 
            margin-left:auto; 
            margin-right:auto;
            "> 



Please <a href="https://github.com/Claire-Potter/Disney-Star/tree/master/read-me-content/testing/accessibility" target="_blank">click here </a>to view the Wave Evaluation screenshots.

### Performance Testing

[Click here](https://github.com/Claire-Potter/Disney-Star/tree/master/read-me-content/testing/performance) to access Google Lighthouse performance reports.

### Deployment Testing

The website was tested end to end after deployment to ensure that the functionality, content and style matches that of the development site. It was tested across multiple screen sizes and browsers. All post-deployment testing passed.

# Deployment

## Development Interface

This website was developed on Gitpod using the Code Institute student template with changes frequently committed to git then pushed onto GitHub from the Gitpod terminal.

The deployed version of the website is the master.

## Maintaining Code

To maintain the code the following actions are taken:

1. Log into GitHub
2. Go to the repositories tab at the top of the screen
3. Click on the repository named Disney-Star

![repositories](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/repositories.PNG)

4. Once in the repository select the green icon GitPod to open the code on GitPod

![open-code-gitpod](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/open-code-gitpod.PNG)

5. Gitpod will load
6. The Disney Star Master will open
7. The Disney Star folders and files will be visible on the left hand side

![disney-star-files](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/disney-star-files.PNG)

8.The HTML files will be at top level and are called:

* index.html - this is the home page which has the generate character feature
* quiz.html - this is the page for the quiz feature and the results
	
9. The assets folder contains the following sub-folders:

* css
  * contains the stylesheet.css file
* images 
  * contains all images used on the site
* javascript
  * contains the javascript files script.js and quizepage.js
		
10. Open the file in which the code needs to be maintained or changed

11. Make the required changes

![changes](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/changes.PNG)

12. Select Cntrl S to save changes (the white dot against the tab in which the code was changed will now disappear)

13. In the terminal type in "python3 -m http.server" and select enter

![python3](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/python3.PNG)

14. Select to open the browser

![open-browser](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/open-browser.png)

15. The preview of the site will load to check and test changes

![view-changes](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/view-changes.PNG)

16. To save the changes back to github the following process needs to be followed:

* open a new terminal by selecting the menu icon, going to Terminal and selectiong New Terminal

![menu](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/menu.PNG)

* Add the code to gitpod by typing in "git add ." in the new terminal and press enter

![git-add](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/git-add.PNG)

* Commit the code to gitpod by typing in "git commit -m "Add a short message here" and press enter

![git-commit](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/git-commit.PNG)

* Push the code back down to github by typing in "git push" select enter

![git-push](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/git-push.PNG)

* From the github side, refresh the repository page and the commit will reflect

![change-github](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/change-github.png)

* Open the item to view the commit changes

![commit](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/commit.PNG)

			
## Page Deployment

The website was deployed on GitHub using the following steps:

1. Log into GitHub
2. Go to the repositories tab at the top of the screen
3. Click on the repository named Disney Star

![repositories](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/repositories.PNG)

4. Once in the repository, click on the settings tab on right hand side of the top menu

![settings](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/settings.PNG)

5. Click on the pages tab located in the left hand side menu

![pages](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/pages.PNG)

6. Under source, select master as the input

![master](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/master.PNG)

7. In the next input, select /root if not already selected by default

![root](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/root.PNG)

8. Click save and the url should be displayed above the source section

9. Now that the link is displayed, the website is deployed and can be accessed in the browser by clicking on the url

## How to Fork the Repository

1. To be able to fork the repository, you will need your own github and gitpod accounts with linked permissions

![updated-permissions](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/updated-permissions.png)

2. From your github home page in the search bar search for Claire-Potter
3. Under Users select the user Claire-Potter

![user-claire-potter](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/user-claire-potter.png)
4. On the repository page choose to open the Disney Star repository

![disney-star-repository](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/repositories.PNG)

5. At the top of the page on the right-hand side select to Fork the repository

![fork-own-copy](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/fork-own-copy.PNG)

6. Your own version of the repository will create

![own-version](https://github.com/Claire-Potter/Disney-Star/blob/master/read-me-content/deployment/own-version.PNG)

7. Select the green GitPod icon to open the work space on GitPod
8. Follow the steps in the Maintaining Code section above to make and save changes to your own repository


# References

## Code

### General Queries

The following were used for any general queries or guidance required:

1. Code Institute LMS
2. W3Schools - https://www.w3schools.com/
3. Stack Overflow - https://stackoverflow.com/
4. JSDoc - https://devhints.io/jsdoc

### Code Adaptations

1. Code for using local storage found on 
https://www.w3schools.com/html/html5_webstorage.asp and edited for purpose. 
2. A series of tutorial videos starting from video two up until video five were utilised as a guideline to create this quiz.Here is the link to the second video is https://www.youtube.com/watch?v=QU6z69P5BrU&t=0s. The links to the additional videos are available within the about section underneath the above video.The videos are created by The WebShala Channel https://www.youtube.com/channel/UC94lpQZvaokkIqU-TvtsGXQ.As far as possible I have tried to indicate which sections of code are created as per the tutorial and which sections are adapted through comments within the code.
3. The Tooltip code is from W3 school tutorial and adapted for site https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom
4. I got the code for the timer from 
  https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz and this has been adapted for the site. 
5. The styling for the alert is from SweetAlert2 - https://sweetalert2.github.io/#download
6. Shadow code from W3 school tutorials - buttons shadows - https://www.w3schools.com/css/css3_buttons.asp
7. Solution to add audio found on 
// https://stackoverflow.com/questions/9419263/how-to-play-audio.
8. https://www.sitepoint.com/simple-javascript-quiz/ referenced and edited for const declarations and for how to return characters to inner html


## Content

The Disney brand has been utilised for this site. This site was built for educational purposes only and I do not intend to profit financially in any way through the utilisation of the Disney brand. I have provided a link back to the Disney UK store within the site.

All of the site written content was written by me apart from the following questions which were taken from this site - https://parade.com/1041219/alexandra-hurtado/disney-trivia/

* Question: What year did Disneyland open?​
Answer: 1955.​

* Question: Who trained Hercules to be a hero?​
Answer: Philoctetes/Phil.​

* Question: How many brothers does Prince Hans of the Southern Isles have in Frozen?​
Answer: 12.

* Question: Who was the first cartoon character to get a star on the Hollywood Walk of Fame?​
Answer: Mickey Mouse.

* Question: What is the name of Ariel and Prince Eric’s daughter?​
Answer: Princess Melody.​

* Question: Which Disney Princess sings “Once Upon a Dream”?​
Answer: Aurora (Sleeping Beauty).​

* Question: What is the name of the castle in Shanghai Disneyland Park?​
Answer: The Enchanted Storybook Castle.​

* Question: What was the name of Walt Disney’s first cartoon character?​
Answer: Oswald the Lucky Rabbit.​

## Design Elements and Media

1. The colour scheme utilised is from the following website:
	* https://www.schemecolor.com/classic-disney.php#download

2. The typography utilised is from Google Fonts:
	* Google Fonts - https://fonts.google.com/specimen/Satisfy?query=satisfy#pairings
	
3. The Icons utilised are from Font Awesome:
	* Font Awesome - https://fontawesome.com/

4. The following Images are from Shutterstock - https://www.shutterstock.com
	* magicWandBlue.jpg
	* congratulationsChampion.jpg
	* congratulationsOk.jpg
	* disneyIcon.jpg
	* quizIcon.jpg
	* wellDoneFlyingHigh.jpg
	* whatAFlop.jpg
	
5. The following Images are from Disney Clips - https://www.disneyclips.com/
	* MickeyFriends.png
	* mickeyQuiz.png
	* All of the images within the pictureQuestions folder unless otherwise noted 
	- https://github.com/Claire-Potter/Disney-Star/tree/master/assets/images/pictureQuestions

6. The Disneyland on opening day photos are from 
    - https://www.theatlantic.com/photo/2019/07/opening-day-disneyland-photos-1955/594655/

7. Oswald the Lucky Rabbit is from 
    - https://thedisinsider.com/2019/07/06/oswald-the-lucky-rabbit-series/

8. The Enchanted Storybook images are from 
    - https://disney.fandom.com/wiki/Enchanted_Storybook_Castle?file=Enchanted-storybook-castle-clocktower-side-shanghai-disneyland_1.jpg

9. The Nanny McPhee image is from 
    - https://www.republicworld.com/entertainment-news/hollywood-news/nanny-mcphee-returns-cast-actors-and-characters-they-play-in-film.html​
	
10. The shark bait image is from 
    - https://www.rottentomatoes.com/m/1179443-1179443-reef

11. The shark tale image is from 
    - https://cwf97.wordpress.com/2017/07/20/underrated-masterpieces-shark-tale/

12. The following images are from the Disney Store UK
    - https://www.shopdisney.co.uk/characters

All of the images within the disneyCharacters folder
   * https://github.com/Claire-Potter/Disney-Star/tree/master/assets/images/disneyCharacters

13. The mockup image in the ReadMe was created using the following site:
	* http://techsini.com/multi-mockup/index.php
	
14. The persona image of the girl in the ReadMe is from UnSplash

    * fun-young-woman.jpg

14. All of the audio clips used are from 
    - https://movie-sounds.org/disney-movie-sound-clips/


# Acknowledgements

A huge thank you to my mentor Brian Macharia. The guidance and advice that you have provided has been invaluable. I could have never completed this project without you.

Thank you to Code Institute for providing such well-thought out and put together course material and for the constant guidance and advice provided through Slack.

Finally, to my wonderful husband and children, thank you for your understanding and support through this process.

