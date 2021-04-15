'use strict';
        
function slojenie(a,b){
    return a + b;
}

function vychetanie(a,b){
    return a - b;
}

function umnojenie(a,b){
    return a * b;
}

function delenie (a,b){
    return a / b;
}

/**
 * функция получает два числа и осуществляет над ними математическую операцию
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation может быть "+","-","*","/".
 * @throws {Error} если выдана не предусмотренная операция, то будет выброшена ошибка.
 * @returns {number}
 */

function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case "+":
            return slojenie(arg1, arg2);
        case "-":
            return vychetanie(arg1, arg2);
        case "*":
            return umnojenie(arg1, arg2);
        case "/":
            return delenie(arg1, arg2);
        
        default:
            throw new Error ("Операция" + operation + "не предусмотрена");

    }
}
console.log(mathOperation(3,5,"+"));
console.log(mathOperation(3,5,"-"));
console.log(mathOperation(3,5,"*"));
console.log(mathOperation(3,5,"/"));
console.log(mathOperation(3,5,"lorem"));