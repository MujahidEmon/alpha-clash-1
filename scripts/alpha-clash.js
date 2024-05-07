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


// document.getElementById('play-now-btn').addEventListener('click',playNow)