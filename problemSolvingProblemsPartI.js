'use strict'

//problemOne
//Reverse a string
//a. Write code that takes a string as input and returns the string reversed
//b. i.e. “Hello” will be returned as “olleH”

//Step 1: create a string
let str = 'Hello'

//Step 2: reverse the string 'Hello' so it will print out as 'olleh'
//creating a function to reverse the string. Splits string, reverses the order, then puts them back together in reverse.
// H e l l o
// 1 2 3 4 5
// o l l e H
function reversestr(string){
    let splitString = string.split('');
    let reverseString = splitString.reverse('');
    let joinString = reverseString.join('')
    return joinString;
}

//Step 3: print to console. result = 'olleh'
console.log(reversestr(str));




//problemTwo
//Capitalize letter
//a. Write code that takes a string as input and capitalize the first letter of each word. Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”

//Step 1: Create a string
let capString = "hello world";

//Step 2: capitalize the lettters 'h' and 'w'
//creating a function to capitalize the required letters
function capitalizeFirstLetterOfEachWord(words){
    let separateWord = words.toLowerCase().split(' ') //separate words
    for (let i = 0; i < separateWord.length; i++){    //Create a for loop to go through string and capitalize the letter in correct place value.
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);       //takes the string and looks at index 0 of both words in the string (h and w) and changes them to uppercase.
    } 
    return separateWord.join(' ');
}

//Step 3: print to console. result = 'Hello World'
console.log(capitalizeFirstLetterOfEachWord(capString))




//problemThree
//Compress a string of characters
//a. For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"

//Step 1: Create a string
let stringNeedsCompress = 'hhhheeeelllloooohhheeelllooo'
