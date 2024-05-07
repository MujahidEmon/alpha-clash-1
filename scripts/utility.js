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

// displaying current alphabet

// function displayCurrentAlphabet(){
    
// }