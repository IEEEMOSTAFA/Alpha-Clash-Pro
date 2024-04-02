// function play(){
//     // step - 1: hide the home screen . to hide the screen add the class hidden to the home section

//        const homeSection = document.getElementById('home-screen')
//        homeSection.classList.add('hidden');
//     //    console.log(homeSection.classList);

//     // show the playground 
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);

// }
// function handleKeyboardButtonPress() {
//     console.log('button pressed');
// }
// // capture keyboard key press 
// document.addEventListener('keyup',handleKeyboardButtonPress)

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);
    // -----------------stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }
     
    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


    // check right or wrong key pressed:
    if(playerPressed === expectedAlphabet){
        console.log('You got a point');

//----------------------------------------------- increasing system
const currentScore = getTextElementValueById('current-score');
console.log(currentScore);
const updatedScore = currentScore + 1;
setTextElementValueById('current-score',updatedScore);
// -------------------------------------------------------------------
        // console.log('You have pressed correctly',expectedAlphabet);
    //    update Score:
    // 1.get the current score
   
    
    // 4.
    // const currentScore = getTextElementValueById('current-score');
     // 2.increase the score by 1
     const newScore = currentScore + 1;
     // 3.show the update score

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You are fail');
        // st-1: get the current life number 
        // st-2: reduce the life count
        // st-3: display the updated life count

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);

        // ----------------------------------------stop playing system
        if(updatedLife === 0){
            gameOver();
        }

        // -------------------------------------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
        // -------------------------------------------------------------------
    }
   
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);

function continueGame() {

    // step -1::  generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}
function gameOver(){
hideElementById('play-ground');
showElementById('final-score');
// update final score
// get the final score
const lastScore = getTextElementValueById('current-score');
console.log(lastScore);
setTextElementValueById('last-score',lastScore);

// clear the last selected alphabet highlight
const currentAlphabet = getElementTextById('current-alphabet');
// console.log(currentAlphabet);
removeBackgroundColorById(currentAlphabet);
}

function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();

    // reset score and life:
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
}