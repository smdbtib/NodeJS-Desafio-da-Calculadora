function add(number1, number2 ){
    return console.log (`
                    =====================
                    1 - SUM
                    The sum is equal: ${number1 + number2} `);
}

function subtract(number1, number2){
    return console.log (`
                    =====================
                    2 - SUBTRACT
                    The subtract is equal: ${number1 - number2} `);
}

function multiply(number1, number2){
    return console.log (`
                    =====================
                    3 - MULTIPLY
                    The multiply is equal: ${number1 * number2} `);
}

function divide(number1, number2){
    return console.log (`
                    =====================
                    4 - DIVIDE
                    The divide is equal: ${number1 / number2} `);
}

module.exports = {add, subtract, multiply, divide}