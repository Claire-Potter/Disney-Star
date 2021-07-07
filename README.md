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
8. Having a limited time to answr questions would make it more interesting.
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

1. The Generate button on the home screen was moved to display within the single column view as this was more visually appealing than displaying next to the character box. An arrow either side of the character box was added to scroll between characters.
2. The original quiz was designed to display the questions as separate written, picture or audio questions. In designing the layout of the page, the three question types were included across all questions as visually it worked much better to bring life and character to the quiz.
3. Originally the score tracker was just going to be formatted as 0/25. A pop up would then say whether the user got the question right or wrong. Instead the tracker was featured at the bottom of the quiz and included an indicator per question whether the user scored correctly or incorrectly. This was combined with the colour of the question option turning green for correct or red for wrong. If wrong the correct option would then display in green.
4. A timer was added to the quiz which was not included in the original design.
5. The mobile version of the quiz pictures was going to display the four quiz pictures as a column, however with a single column display and sizing the images remaind in a grid as per the larger screen display.
6. The results page, next steps section included an additional icon back to the home page alongside the redo quiz icon and the icon to access the Disney store.


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

The quiz itself is made up of eight elements:
1. The quiz number -  the question counter is set to start at zero, as each question loads, it will be assigned a number from number 1 to 25, 25 will be the final question as this is the total number of questions available in the array.
2. The timer - 45 seconds is provide per question for the user to capture their answer. Scenarios have been customised according to wether the user answers correctly in time, incorrectly in time or runs out of time.
3. The written question - each question within the array contains a written question which will be populated here.
4. The pictures for the question - each question contains four images related to the question. Where relevant the pictures are linked to the answer options. If the user hovers over the picture, a tool-tip text pop up will display the picture name.
5. The play button will trigger the audio clip linked to the question to play. Again as far as possible, the clips are associated with the question being asked. Some written questions will ask directly as to who the character within the clip is.
6. The various answer options will populate just below the play button. The user will need to click on the answer they think is correct.
7. The next button will generate the next question. This button will show as disabled until the user has chosen an option. This will prevent the user from accessing the next question before answering the current question.
8. The score tracker at the end of the screen is used to track correct and incorrect answers given.
The quiz is populated when the get question function is called. A breakdown of some of the features has been completed below.

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

1. xxxx
    * xxxx
   
2. Txxx
     * xxxx
     
 3. xxx 
    

### User Stories Testing

![User Stories Testing]()

### Responsiveness and Compatibility

1. The site has been testing using the following browsers - Safari, Chrome, Firefox, Edge and Opera. The site is compatible and accessible across all browsers.

Please <a href="" target="_blank">click here</a> to view browser testing screenshots.

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
    * quiz.html

2. W3C CSS Jigsaw Validator

* The code for the stylesheet.css was entered into the validator and passed.

* This excludes the link to google fonts as this is an external source

1. JScript Code Validator

* The code for the following javascript scripts pages was entered into the validator passed:
    * script.js
    * quizpage.js



Please <a href="https://github.com/Claire-Potter/Disney-Star/tree/master/read-me-content/testing/validations" target="_blank">click here</a> to view the screenshots.

### Testing Accessibility

The Wave Evaluation Tool was used to test the Accessibility of the site. 


Please <a href="https://github.com/Claire-Potter/Disney-Star/tree/master/read-me-content/testing/accessibility" target="_blank">click here </a>to view the Wave Evaluation screenshots.

### Performance Testing

[Click here](https://github.com/Claire-Potter/Disney-Star/tree/master/read-me-content/testing/performance) to access Google Lighthouse performance reports.

### Deployment Testing

The website was tested end to end after deployment to ensure that the functionality, content and style matches that of the development site. It was tested across multiple screen sizes and browsers. All post-deployment testing passed
