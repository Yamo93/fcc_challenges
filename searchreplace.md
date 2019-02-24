# Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

***

*Note*
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

***

*My Solution:*
```javascript
function myReplace(str, before, after) {
    let bigLetters = [];

    // Find a letter which is uppercase, then save the letter and its index from the string as an object that is stored in an array
    str.split('').forEach((letter, index) => { if (letter == letter.toUpperCase() && letter !== ' ') { bigLetters.push({letter, index}); }});

    // Replace before with after
    let string = str.substr(0, str.indexOf(before)) + after + str.substr(str.indexOf(before) + before.length);

    // Loop through all big letters and turn the corresponding letters into uppercase in the original string
    let transformed = '';
    bigLetters.forEach(obj => {
        let bigLetter = string[obj.index].toUpperCase();
        transformed = string.substr(0, obj.index) + bigLetter + string.substr(obj.index + 1);
    });

    // Return transformed string
    return transformed;
  }
```
