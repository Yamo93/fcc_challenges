let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
    return 'Alan' in obj && 'Jeff' in obj && 'Sarah' in obj && 'Ryan' in obj;
  }
  
  console.log(isEveryoneHere(users));