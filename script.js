const buttons = document.querySelectorAll('button');
const current = document.querySelector('.current');
const previous = document.querySelector('.previous');
let currentValue = 0;
let previousValue = 0;
let finalValue = null;
let operator = null;


function operate(x, y, operation) {
    if (operation === '+') return x + y
    else if (operation === '-') return x - y
    else if (operation === '×') return x * y
    else if (operation === '÷') return x / y
    else if (operation === '%') return x % y
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        if (button.id === 'number') {
            currentValue = Number(currentValue + button.innerText);
            // Display update below here
            current.innerText = currentValue;
        } 
        
        else if (button.id === 'operator') {
            if ((operator !== null) && (currentValue === 0)) {
                currentValue = 0;
            } else if (operator === null) {
                previousValue = currentValue + finalValue;
                currentValue = 0;
                operator = button.innerText;
                // Display update below here
                previous.innerText += current.innerText + `${button.innerText}`;
                current.innerText = currentValue;
            } else {
                previousValue = operate(previousValue, currentValue, operator);
                currentValue = 0;
                operator = button.innerText;
                // Display update below here
                previous.innerText = current.innerText + `${button.innerText}`;
                current.innerText = currentValue;
            }
        } 
        
        else if (button.id === 'decimal'){
            currentValue.toString().includes('.') ? currentValue : currentValue += '.';
            // Display update below here
            current.innerText = currentValue;
        }
        
        else if (button.id === 'equals') {
            if (operator === null) {
                currentValue;
            } else {
                finalValue = operate(previousValue, currentValue, operator);
                currentValue = 0;
                previousValue = 0;
                operator = null;
                // Display update below here
                current.innerText = finalValue;
                previous.innerText = null;
            }
        } 
        
        else if (button.id === 'delete') {
            currentValue = Number(currentValue.toString().slice(0, -1));
            current.innerText = currentValue;
        } 

        
        else if (button.id === 'clear') {
            currentValue = 0;
            previousValue = 0;
            finalValue = null;
            operator = null;
            current.innerText = 0;
            previous.innerText = null;
        } 
    });
});

