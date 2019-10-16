# Tic Tac Toe game
A Tic-Tac-Toe game UI, a simple Javascript web applicationcan at the most have 9 moves. The logic for player moves is as follows: Each player goes by pressing on an empty space on the board to mark it with an x or an o. The first person to get 3 x’s or o’s in a row, vertically, horizontally or diagonally, wins. We’ll use the java script.
## Demo:
 <a href=https://saera1988.github.io/projects-sarah></a>

### Screenshots:
here is some screenshots
#### home page
image goes here

#### game board
image goes here

#### winning/draw screen
image goes here

## Responsive web design
One of the must-have feature that every project should have is a mobile friendly website.
### Screenshots:
#### board
image goes here
#### winning / draw screen
image goes here 
# Technology involved:
1. HTML
⋅⋅* building elements and layout of tic-tac-toe board.
2. CSS:
⋅⋅* customise, style and animation to the page .
3. JavaScript/jQuery: 
⋅⋅* To add functionality and logic and animations.
4. git
##  story about your development process
1) Thinking about the idea of the project .
2) Design the wireframe .
3) build the HTML file .
4)Work on the design using scc and link it with HTML
5)Start with the logic by breaking down the requirment in†o small proplems to solve one by one useing several function .
6)Build the code begaining with the clickBoard to fill the board game ,then checkwining after that show resuilt and finaly reseat the game .
## problems and solving strategy:
1) faceing issue with wining condation , trying to compare two array wining array and player array was so hard to implemented.But i manage to over come this issue by creating winOption function that
iterate via for loop and compare the content of the array with the value of the ussers and send the outcome to the gameover game function that will show the winner  in allart  and calculate the score
## Describe how it is work (logic behind )
1) first thing to do is create a simple html markup for the website
with following elements:
* head with all page informations
* linked to css file and javascript file to implement the setting
* header with name the logo of the web page and header
* main container wraps all of divs  elements, that takes part in tic tac toe game.
* table which is responsible for displaying a game board to user at the beginning of each game. This way we enable user to make moves.
* footer containing copyright and some contact informations
2) After that creat styles sheet with css
3)Next build the logic behind this game using  JavaScript,using 5 function
* startGame(): to run the game
* ClickBoard():to handle the interaction each time user  click on the board element will be send to the function to fill the boared
* gameOver() :to end the game by showing alart with the name of the winner and the score. also it will reverts everything back to the beginning .
* checkWin():to check  all  the possible result of Tic Tac Toe game and then send the result to gameover() function .
## Features:
* free online game Render a game board in the browser
* Visually display which side won if a player gets three in a row, or show a draw if neither player wins
* Keep track of multiple game rounds with a win, lose and tie counter
## How to play?
the game start as soon as the page loaded, 1st player will be O's player who make the move by clicking in the one of the table cells,  after that 2nd player take the turn .until on of the player achived the winning condation ,which is
## Status:
Project is:  finished,but it can be improved !
## Inspiration:
Add here credits. Project inspired by..., based on...
## List unsolved problems :
* Involve Audio in the  game as them for the web page
## Further improvements:
* Allow players to customize their tokens (X, O, name, picture, etc)
* Create an AI opponent for computer to play.
* make the site fully responsive so that it is playable from a mobile phone
* Allow 2 players to play online with each other using any means such as WebSockets, Firebase, or other 3rd-party services.