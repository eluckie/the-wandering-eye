# The Wandering Eye

#### By E. Luckie ☀️

#### This application will act as an interactive photo portfolio - with a twist. Users are able to view a digital zine, play a puzzle game with select photos from the collection, and browse additional photos.

<!-- ### Table of Contents

_{add clickable or dropdown}_ -->


## Technologies Used

* React
* Redux
* JSX
* HTML
* CSS
* JavaScript
* Markdown
* Webpack
* npm
* Framer Motion
* Canva
* Git
<!-- * NoSQL backend -->
<!-- * Firebase hosting -->

## Setup/Installation Requirements

1. Clone this repository to your desktop
2. Navigate to the top level of this directory called ``the-wandering-eye``
3. Run the code ``npm install`` in your terminal to install the necessary packages and plug-ins
4. Run the code ``npm run start`` in your terminal to start the application and open the project in your web browser


## Description

This webpage acts as an interactive photo portfolio for my personal landscape photographs. From the navbar on each page, users are able to navigate to the ``home``, ``zine``, ``play``, or ``about`` pages. On the home page, if you click on the site's logo, it will also take you to the ``browse`` page - a current work-in-progress.

<!-- [Click here](https://eluckie.github.io/_______/) to view the live version of this webpage. -->

#### Zine
>* has clickable options to view the video or pages version of the digital zine
>* clicking **video** loads & automatically starts playing the video version of the digital zine
>* clicking **pages** loads the zine in flipbook format. click on the right of the photo to flip to the next page, the left to flip to the previous
>* _NOTE: default is showing 2 pages at a time but if the window is resized smaller than the size of the doubled zine pages, it will display one page at a time_ 

#### Play
>* on first visit, only a clickable color palette will display. choose a color to begin a game
>* the game will randomize difficulty between 3x3, 4x4, 5x5, or 6x6
>* to start a new game, click on a new color on the color palette. to choose a different randomized difficulty, click on the same color again
>* user clicks on two tiles to switch their positions until all tiles are in the proper spot & the game is finished
>* on game finish, the entire full photo is revealed as well as the amount of turns it took to complete
>* **high scores board coming soon**

#### About
>* learn more information about me and my photos
>* clicking **me** displays a small blurb about me including links to my virtual resume as well as my github profile
>* clicking **photos** displays a small blurb about my photos including a link to instagram to see more
>* _if you hover over my selfie, it turns me into a radiating eyeball._ move your cursor after to see the reverse effect

#### Browse
>* **coming soon**


## Gameplay

#### select game
![play landing page](./src//img//choosegame.png)

#### game start
![start of game with jumbled tiles](./src/img/gamestart.png)

#### select a tile
![jumbled tiles with one tile selected](./src/img/turn1.png)

#### select a second tile to swap
_when in the correct position, tile has inner border_\
![jumbled tiles with selected tiles switched](./src/img/turn2.png)

#### on game win
![full photo of green lizard from jumbled tiles](./src/img/gamewin.png)


## Zine View

#### video
![screenshot of zine selection page showing video player](./src/img/video.png)

#### pages
![screenshot of zine selection page showing clickable zine](./src/img/pages.png)


## About
#### the wandering eye feature

https://github.com/eluckie/the-wandering-eye/assets/121265815/8a52db70-36e0-45a5-93d0-462a81ad553f


## Diagrams

#### Site Diagram
![site diagram](./src/img/capstone-site-diagram.png)

#### Component Diagram
![component diagram](./src/img/capstone-component-diagram.png)

#### Landing Pages
![diagram of landing pages for home, zine, play, and about me pages](./src/img/capstone-landing-pages.png)


## Known Bugs

* No known bugs.


## Stretch Plans
* create webapi to browse photos (NoSQL)
* add sliding puzzle game
* add high scores board for games
* user upload to create custom sliding puzzles on demand
* custom domain
<!-- * EASTER EGG - hidden onClick that does annoying little window.alert popup -->


## License

MIT License

Copyright (c) 2023 Luckie

__________

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
