'use strict'

let word = prompt('Please enter a word to check if its a palindrome: ');
function palindromeCheck(pali){
    let paliWord = '';
    let i = pali.length;
    while (pali[i] >= 0){
        i--
        paliWord += pali
        if (paliWord == pali){
            console.log(pali + ' Yes! That is a palindrome!')
        }
        else {
            console.log('Sorry ' + pali + ' is not a palindrome.')
        }
    }
    return paliWord
}

console.log(palindromeCheck(word))
    
