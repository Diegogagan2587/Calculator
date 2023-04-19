//how to add the event listener /*https://youtu.be/GUTt0qKUDyU*/

console.log('javascript file is working properly');

const calcButtonsContainer = document.getElementById('CalcButtonsContainer');
calcButtonsContainer.addEventListener('click',addElementsToScreen);

function addElementsToScreen(e){
    console.log(e.target);//shows button pressed;
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
    if(buttonText == '='){
        screenText = getCalculatedResult(screenText);
    }
    return document.getElementById('screenCalculator').querySelector('p').innerText = screenText;
}

//helper functions below;
function getCalculatedResult(str){
    let result;
    let arrFromStr = str.split(/[^0-9]/);
    let operand = str.split(/[0-9]/);
    console.log('running getResult(',str,')');
    operand = operand.filter((element)=>{
        if(element && element!= '='){
            return element;
        }
    })
    arrFromStr = arrFromStr.filter((element)=>{
        if(element) {
            return element;
        }
    })
    if(operand == '+'){
        result = (+arrFromStr[0])+(+arrFromStr[1]);
    } else if(operand == '-'){
        result = (+arrFromStr[0])-(+arrFromStr[1]);
    } else if( operand == 'x'|'X'){
        result = (+arrFromStr[0])*(+arrFromStr[1]);
    } else if( operand == '/'){
        result = (+arrFromStr[0])/(+arrFromStr[1]);
    } else if(operand == '%'){
        result = (+arrFromStr[0])*(+arrFromStr[1]/100);
    }
    console.log('result = ',result);
    return result;
}