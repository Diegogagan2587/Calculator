//how to add the event listener /*https://youtu.be/GUTt0qKUDyU*/

console.log('javascript file is working properly');

const calcButtonsContainer = document.getElementById('CalcButtonsContainer');
calcButtonsContainer.addEventListener('click',addElementsToScreen);

function addElementsToScreen(e){
    console.log(e.target);
    let screenText = document.getElementById('screenCalculator').querySelector('p').innerText;
    let buttonText = e.target.innerText;
    console.log(screenText,buttonText);
    screenText += buttonText;
    if(buttonText == 'Clear'){
        screenText = '';
    }
    if(buttonText == 'Deleted'){
        screenText = document.getElementById('screenCalculator').querySelector('p').innerText;
        console.log('before remobing=',screenText)
        screenText = screenText.slice(0,-1);
        console.log('after removing last element=',screenText);
    }
    return document.getElementById('screenCalculator').querySelector('p').innerText = screenText;
}