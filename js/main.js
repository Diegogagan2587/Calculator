console.log('javascript file is working properly');

const calcButtonsContainer = document.getElementById('CalcButtonsContainer');
calcButtonsContainer.addEventListener('click',addElementsToScreen);

function addElementsToScreen(e){
    console.log(e.target);
}