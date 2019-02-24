function myReplace(str, before, after) {
    let bigLetters = [];

    // if I find a letter which is uppercase, I save the letter and its index from the string as an object that is stored in an array
    str.split('').forEach((letter, index) => { if (letter == letter.toUpperCase() && letter !== ' ') { bigLetters.push({letter, index}); }});

    // I replace before with after
    let string = str.substr(0, str.indexOf(before)) + after + str.substr(str.indexOf(before) + before.length);

    // I loop through all big letters and turn the corresponding letters into uppercase in the original string
    let transformed = '';
    bigLetters.forEach(obj => {
        let bigLetter = string[obj.index].toUpperCase();
        transformed = string.substr(0, obj.index) + bigLetter + string.substr(obj.index + 1);
    });

    // return transformed string
    return transformed;
  }
  
//   console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); // should return "A quick brown fox leaped over the lazy dog"
//   console.log(myReplace("Let us go to the store", "store", "mall")); // should return "Let us go to the mall".
//   console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // should return "He is Sitting on the couch"
// console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // ."This has a spelling error".
// console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John".
// console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms".