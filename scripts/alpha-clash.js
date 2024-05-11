function continueGame(){
    const alphabet = getRandomAlphabet();

    document.getElementById('current-alphabet').innerText = alphabet;

    setBgColorById(alphabet)
    
}
function playNow(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}

function handleButtonPress(event){
    const playerPressed = event.key;
    console.log(playerPressed)

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
        lifeUpdate()
        
    }
    
}
function playAgain(){
    hideElementById('end-screen')
    showElementById('play-ground')
    history.go()
}



    document.addEventListener('keyup', handleButtonPress)
// document.getElementById('play-now-btn').addEventListener('click',playNow)