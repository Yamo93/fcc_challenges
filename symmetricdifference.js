function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    arr1.forEach(elem => {
      if (arr2.indexOf(elem) === -1) {
        newArr.push(elem);
      }
    });
  
    arr2.forEach(elem => {
      if (arr1.indexOf(elem) === -1) {
        newArr.push(elem);
      }
    });
    
    return newArr;
  }