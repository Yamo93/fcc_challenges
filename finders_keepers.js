function findElement(arr, func) {
    let num = 0;
    
    for (let i = 0; i < arr.length; i++) {
      let result = func(arr[i]);
      if (result) {
        num = arr[i];
        break;
      }
    }
    return num === 0 ? undefined : num;
  
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);