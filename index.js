const inquirer = require('inquirer');
const { add, subtract, multiply, divide } = require('./operations');
const operation = ''

function calculator() {
    inquirer.prompt(
        [
            
            {
                name: 'number1',
                message: 
                    `
                    ==============
                    = CALCULATOR = 
                    ==============
                    Inform number 1:`
            },
            {
                name: 'number2',
                message: 
                    `
                    Inform number 2:`
            },
            {
                name: 'operation',
                message:
                    `
                    ================================
                    1 - SUM
                    2 - SUBTRACT
                    3 - MULTIPLY
                    4 - DIVIDE
                    ================================
                    Inform the type of operation:`
            }
        ]

    ).then((answers) => {
        switch (answers.operation) {
            case '1':
                add(parseFloat(answers.number1), parseFloat(answers.number2));
                break;
            case '2':
                subtract(parseFloat(answers.number1), parseFloat(answers.number2));
                break;
            case '3':
                multiply(parseFloat(answers.number1), parseFloat(answers.number2));
                break;
            case '4':
                divide(parseFloat(answers.number1), parseFloat(answers.number2));
                break;
            default:
                console.log(` 
                =========================================================
                ${answers.operation} is invalid option, please try again!`);
                    calculator();
                break;
        }
    }).catch((err) => console.log(err));

}

calculator();


