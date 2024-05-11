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
    const currentScoreElement = document.getElementById('score-field');
    const scoreText = currentScoreElement.innerText
    const currentScore = parseInt(scoreText);
    
    const scoreUpdate = currentScore + 1;
    console.log(scoreUpdate)
    currentScoreElement.innerText = scoreUpdate;
    document.getElementById('final-score').innerText = scoreUpdate;
}

// update life
function lifeUpdate(){
    const lifeField = document.getElementById('life-field');
    const lifeFieldText = lifeField.innerText;
    const life = parseInt(lifeFieldText);

    const lifeScore = life-1;

    lifeField.innerText = lifeScore;

    if(lifeScore<1){
        hideElementById('play-ground');
        showElementById('end-screen');
    }
}

// function endGame(){
    
// }