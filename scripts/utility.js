function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    document.getElementById(elementId).classList.remove('hidden')
}


// add bg color by id

function setBgColorById(elementId){
    document.getElementById(elementId).classList.add('bg-orange-500')
}
function removeBgColor(elementId){
    document.getElementById(elementId).classList.remove('bg-orange-500');
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const randomAlphabet = alphabetString.split('');
    // console.log(randomAlphabet)

    // get random index

    const randomIndex = Math.random()*25;
    const index = Math.round(randomIndex)

    const alphabet = randomAlphabet[index];
    return alphabet;
}

// update-score
function updateScore(){
        const currentScore = getTextElementValueById('score-field');
        const updatedScore = currentScore + 1;
        setValueById('score-field', updatedScore);
        setValueById('final-score', updatedScore)
        console.log(currentScore);
}

function updateLife(){
    const currentLife = getTextElementValueById('life-field');
    const updatedLife = currentLife -1;
    setValueById('life-field', updatedLife);

    if(updatedLife < 1){
        gameOver();
    }
}



function getTextElementValueById(elementId){
    const elementTextField = document.getElementById(elementId);
    const elementText = elementTextField.innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
}

function setValueById(elementId, points){
    const elementTextField = document.getElementById(elementId);
    elementTextField.innerText = points;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    // console.log(currentAlphabet)
    return text;
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('end-screen');
    const currentAlphabet = getElementTextById('current-alphabet');
    console.log(currentAlphabet);
    removeBgColor(currentAlphabet);
}

// function resetColor(){
//     const currentAlphabet = getElementTextById('current-alphabet');
//     console.log(currentAlphabet);
//     removeBgColor('current-alphabet');
// }