function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
var remainingGuesses = 8;
document.querySelector('.right-side .gusses span').innerHTML = 8;
// Colors Shapes Fruites Animals
let dicationary = [['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black', 'brown'], ['square', 'triangle', 'rectangle', 'circle', 'ellipse', 'rhombus', 'trapezoid', 'chevron', 'pentagon', 'hexagon', 'septagon', 'octagon'], ['apple', 'orange', 'lemon', 'lime', 'pear', 'watermelon', 'grape', 'grapefruit', 'cherry', 'banana', 'cantaloupe', 'mango', 'strawberry', 'tomato'], ['bat', 'bear', 'beaver', 'cat', 'cougar', 'crab', 'leech', 'lion', 'lizard', 'monkey', 'moose', 'mouse', 'rabbit', 'rat', 'shark', 'sheep', 'skunk', 'squid', 'tiger', 'turkey', 'turtle', 'weasel', 'whale', 'wolf']];
let theRandomArray = getRandomInt(0, dicationary.length);
let theSecretWord = dicationary[theRandomArray][getRandomInt(0, dicationary[theRandomArray].length)];
if (theRandomArray == 0) {
    document.querySelector('.right-side .hint').innerHTML = "Hint: It's A Color";
} else if(theRandomArray == 1) {
    document.querySelector('.right-side .hint').innerHTML = "Hint: It's A Shape";
} else if(theRandomArray == 2) {
    document.querySelector('.right-side .hint').innerHTML = "Hint: It's A Fruit";
} else if(theRandomArray == 3) {
    document.querySelector('.right-side .hint').innerHTML = "Hint: It's A Animal";
}
console.log(theSecretWord);
var wordElement = document.querySelector('.word');
for (var i = 0; i < (theSecretWord.length); i++) {
    wordElement.innerHTML += '<div class="letter"></div>';
}
// function selectDifficulty
function guess(innerHTML) {
    var theClickedLetter = innerHTML;
    var theLetters = document.querySelectorAll('.word .letter');
    var currentImage = document.querySelector('img').getAttribute("src").split("/");
    currentImage = parseInt(currentImage[2].split(".")[0]);
    if (currentImage <= 7) {
        document.querySelector('.right-side .keyboard div[title="'+ theClickedLetter +'"]').className = "keyboard-letter clicked";
        if (theSecretWord.includes(theClickedLetter.toLowerCase())) {
            for (var i = 0; i < theSecretWord.length; i++) {
                if (i == theSecretWord.indexOf(theClickedLetter.toLowerCase())) {
                    // console.log("Gotcha");
                    theLetters[i].innerHTML = theClickedLetter;
                }
            }
        } else {
            // remainingGuesses -= 1;
            var currentImage = document.querySelector('img').getAttribute("src").split("/");
            currentImage = currentImage[2].split(".");
            document.querySelector('img').setAttribute("src", "assets/img/" + (parseInt(currentImage[0]) + 1) + ".jpg");
            remainingGuesses -= 1;
            document.querySelector('.right-side .gusses span').innerHTML = remainingGuesses;
        }
        console.log(theClickedLetter);
    } else {
        document.querySelector(".right-side .gusses").style.animation = "shake .5s linear 0s 1 forwards";
    }
}
