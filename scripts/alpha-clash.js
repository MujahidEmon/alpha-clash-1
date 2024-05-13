function continueGame(){
    const alphabet = getRandomAlphabet();

    document.getElementById('current-alphabet').innerText = alphabet;

    setBgColorById(alphabet)

    
    
}
function playNow(){
    hideElementById('home-screen')
    hideElementById('end-screen')
    showElementById('play-ground')
    setValueById('life-field', 3);
    setValueById('score-field', 0);
    continueGame()
}

function handleButtonPress(event){
    const playerPressed = event.key;
    console.log(playerPressed)
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet)

    if(playerPressed === expectedAlphabet){
        console.log('1 point')
        removeBgColor(expectedAlphabet);
        
        updateScore()
        
        continueGame()
    }
    else{
        console.log("lost")
        updateLife()


        
    }
    
}
// function playAgain(){
//     hideElementById('end-screen')
//     showElementById('play-ground')
//     setValueById('life-field', 3);
//     setValueById('score-field', 0);
//     const currentAlphabet = getElementTextById('current-alphabet');
//     console.log(currentAlphabet);
//     removeBgColor(currentAlphabet)
//     continueGame();
// }



    document.addEventListener('keyup', handleButtonPress)
// document.getElementById('play-now-btn').addEventListener('click',playNow)