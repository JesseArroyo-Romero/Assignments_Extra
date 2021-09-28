'use strict'

//problemOne - Happy Numbers
//a. A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1. An example of a happy number is 19
//b. Write a method that determines if a number is happy or sad
//13, 1^2 + 3^2 = 1 + 9 = 10, 1^2 + 0^2 = 1 + 0 = 1. 
//We will use the number 13.

//Step 1: prompt the user to enter a number.
let number = prompt('Please enter a two digit number to determine if it is a happy number or not: ');

//Step 2: write a function that will determine if the number is a happy number or not. We will have to create a formula.
function isItAHappyNumber(input){
    let nextResult;
    let cond = false
    if (input != 1){
        let resultOne = input.charAt(0) ** 2
        let resultTwo = input.charAt(1) ** 2
        nextResult = resultOne + resultTwo
        if (nextResult == 1){
            cond = true;
            console.log('Yes ' + input +' is a happy number!')
        }
        else if (nextResult != 1){
            for (let i = 1; i < nextResult; i++){
                nextResult = `${nextResult}`
                resultOne = nextResult.charAt(0) ** 2
                resultTwo = nextResult.charAt(1) ** 2
                nextResult = resultOne + resultTwo 
                console.log('Yes ' + input +' is a happy number!')
            }
        }
        return true
    }
}
   
    


console.log(isItAHappyNumber(number));



