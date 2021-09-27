'use strict'

//problemOne
//Reverse a string
//a. Write code that takes a string as input and returns the string reversed
//b. i.e. “Hello” will be returned as “olleH”

//Step 1: create a string
let str = 'Hello'

//Step 2: reverse the string 'Hello' so it will print out as 'olleh'
function reverseAWord(string){
    let wordReversed = '';
    for (let i = string.length - 1; i >= 0; i--){
        wordReversed += string[i];
    }
    return wordReversed
}

//Step 3: print to console. result = 'olleh'
console.log(reverseAWord(str));




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
let stringNeedsCompress = 'hhhheeeeeeeellllllooooo'
let result = ''; //this will be the compressed string
let counter = 0; //this will be used as our counter

for (let i = 0; i < stringNeedsCompress.length; i++){ //as long as 'i' is less than the length of the string, it will continue looping and adding 'i' by 1 each loop.
    counter++
    if (stringNeedsCompress[i] != stringNeedsCompress[i + 1]){      //conditional statement. if 'i' starts out at 0 in the string and is NOT equal to the 'i' + 1 then the counter will increment each loop by 1.
        result += stringNeedsCompress[i] + counter; // adding the index of the string to the counter and saving it to the variable called result
        counter = 0;
    }
}
console.log(result);




//BONUS CHALLENGE: Palindrome
//a. A word, phrase, or sequence that reads the same backward as forward i.e. madam
//b. Write code that takes a user input and checks to see if it is a Palindrome and reports the result
//Step 1: Lets create a variable and prompt the user to enter a palindrome.
let word = prompt('Please enter a word to check if its a palindrome: ');

//Step 2: Now we need to check if the word that the user put in is actually a palindrome. We will need to iterate through the entire length of the string
function palindromeCheck(pali){
    let paliWord = '';
    for (let i = pali.length - 1; i >= 0; i--){ //This line of code will start at the last letter of the word from the user and work its way to the first letter
        paliWord += pali[i]; //this is saving the word letter by letter into 'paliWord'
    }
    if (paliWord === pali){
        alert(pali + ' Yes! That is a palindrome!')
    }
    else if(paliWord != pali){
        console.log('That is not a palindrome')
    }
    
    return paliWord
}

console.log(palindromeCheck(word))