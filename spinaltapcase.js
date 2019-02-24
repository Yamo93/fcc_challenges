function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    let regex = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    return str.replace(regex, '-').toLowerCase();
    
  }

  
//   console.log(spinalCase('This Is Spinal Tap')); // should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap")); // should return "this-is-spinal-tap".
//   console.log(spinalCase("The_Andy_Griffith_Show")); // should return "the-andy-griffith-show".
//   console.log(spinalCase("Teletubbies say Eh-oh")); // should return "teletubbies-say-eh-oh".
//   console.log(spinalCase("AllThe-small Things")); // should return "all-the-small-things".