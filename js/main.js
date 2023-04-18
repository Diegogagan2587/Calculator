console.log('javascript file is working properly');

const calcButtonsContainer = document.getElementById('CalcButtonsContainer');
calcButtonsContainer.addEventListener('click',addElementsToScreen);

function addElementsToScreen(e){
    console.log(e.target);
    let screenText = document.getElementById('screenCalculator').querySelector('p').innerText;
    let buttonText = e.target.innerText;
    console.log(screenText,buttonText);
    screenText += buttonText;
    return document.getElementById('screenCalculator').querySelector('p').innerText = screenText;
}