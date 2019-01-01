const assert = require('assert')  

class Workout{
  start(){
    return 'Workout started!';
  }
}

class User{
  startWorkout(){
    const workout = new Workout();
    return workout.start();
  }  
}

//tests

function createNewUser(){
  return new User();
}

user = createNewUser();

assert.deepEqual(user.startWorkout(), 'Workout started!');
