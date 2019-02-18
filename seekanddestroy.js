// Solution 1
function destroyer(arr) {

    let args = Array.from(arguments);
    args.splice(0, 1);
    let array = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (args.indexOf(arr[i]) === -1) {
        array.push(arr[i]);
      }
    }
    
    return array;
  
  }
  
  // Solution 2
  function destroyer(arr) {
    let args = Array.from(arguments);
    args.splice(0, 1);
    
    return arr.filter(elem => args.indexOf(elem) === -1);
  }

  destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // [1, 5, 1]
  destroyer([3, 5, 1, 2, 2], 2, 3, 5); // [1]