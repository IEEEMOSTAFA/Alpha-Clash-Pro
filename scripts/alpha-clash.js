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
     
    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


    // check right or wrong key pressed:
    if(playerPressed === expectedAlphabet){
        console.log('You got a point');
    }
    else{
        console.log('You are fail');
    }
   
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);

function continueGame() {

    // step -1::  generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}