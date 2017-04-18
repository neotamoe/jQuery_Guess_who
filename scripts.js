console.log('sourcing works!');
var pictureArray = [
"<img src='https://github.com/neotamoe.png' class='user-pic' alt='Profile image of Neota' data-name='Neota'>",
"<img src='https://github.com/Mong005e.png' class='user-pic' alt='Profile image of Droo' data-name='Droo'>",
"<img src='https://github.com/karabayse.png' class='user-pic' alt='Profile image of Kara' data-name='Kara'>",
"<img src='https://github.com/benjlaud1.png' class='user-pic' alt='Profile image of Ben' data-name='Ben'>",
];

var currentName;

$(document).ready(onReady);
// onReady function to run when DOM loads
function onReady (){
  console.log('jquery works!!');
  appendPictures();
  nameGenerator();
  $('.container').on('click', '.pic-div', clickedPic);
  $('#results').on('click', '#reset-button', reset);
} //end onReady function

// appendPictures function to add pictures to the DOM
function appendPictures () {
  for (var i = 0; i < pictureArray.length; i++) {
    $('.container').append("<div class='pic-div'>" + pictureArray[i] + "</div>");
  }
}// end appendPictures

// nameGenerator function to generate a random name from the arrayOfPictureDivs
// used user-pic class to create a new array
// created variable to store random number based on the length of the array
// appended name of GitHub user to the span with id user
// appends reset button 
function nameGenerator (){
  var arrayOfPictureDivs = $('.user-pic');
  var randomGeneratedNumber = randomNumber(0,arrayOfPictureDivs.length-1);
  currentName = $(arrayOfPictureDivs[randomGeneratedNumber]).data('name');
  $('#user').append(currentName);
  $('#results').append('<button type="button" name="button" id="reset-button">Reset</button>');
} // end nameGenerator

// random number generator
function randomNumber (min ,max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

// add clickedPic function to check generated name vs clicked name, appends corresponding result message
function clickedPic () {
  console.log('clicked picture');
  var thisName = $(this).children().data('name');
  console.log(thisName);
  if (thisName===currentName) {
    $('#results').append('<p>Congratulations!</p>');
  }
  else {
    $('#results').append('<p>Incorrect. Try again.</p>');
  }
}

//resets the game to play again
function reset (){
  $('#results').empty();
  $('#user').empty();
  nameGenerator();
}
