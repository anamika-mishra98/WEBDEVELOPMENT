document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.value = '';
            } else if (value === '=') {
                if (currentInput !== '' && previousInput !== '') {
                    currentInput = performCalculation(previousInput, operator, currentInput);
                    display.value = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    previousInput = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });

    function performCalculation(firstNum, operator, secondNum) {
        let result = 0;
        firstNum = parseFloat(firstNum);
        secondNum = parseFloat(secondNum);

        if (operator === '+') {
            result = firstNum + secondNum;
        } else if (operator === '-') {
            result = firstNum - secondNum;
        } else if (operator === '*') {
            result = firstNum * secondNum;
        } else if (operator === '/') {
            if (secondNum !== 0) {
                result = firstNum / secondNum;
            } else {
                alert('Cannot divide by zero');
                result = 'Error';
            }
        }

        return result.toString();
    }
});
