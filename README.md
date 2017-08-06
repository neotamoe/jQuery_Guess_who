# jQuery Guess Who Assignment
This assignment was done in week 2 of in class instruction at Prime Digital Academy (week 8 of a 20 week total program).  The
assignment was done in class in a small group with three other students coding together to reinforce learning related to jQuery.  This 
repo was forked from the original repository.

## Original Assignment Instructions
You will be creating a little pick-the-person game with HTML, CSS, and jQuery!

### Display Profile Pictures

On document load, append four (or more!) divs on to the DOM with jQuery, each containing an image from each member of your groups GitHub profile. As an example, the below HTML would produce Huck's GitHub profile picture where huckbee is Huck's GitHub username.

```
<img src='https://github.com/huckbee.png' alt='Profile image of Huck'>
```
Consider that each div needs to know which person it is. HINT: Look into jQuery's .data method.

### Start the Game

Prompt the player to pick one of the people by displaying a randomly selected name.

Here is a handy function to generate a random number given a minimum and maximum.

```
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
```

### Game Logic

* If the player clicks on the correct person, give them a success message.
* Prompt the player to pick another person randomly and let them keep playing.
* If they pick the wrong person, let them know.
