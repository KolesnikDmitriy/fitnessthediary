const User = require('./User');
const assert = require('assert');

function createNewUser(){
  return new User();
}

user = createNewUser();

assert.deepEqual(user.startWorkout(), 'Workout started!');
assert.deepEqual(user.endWorkout(), 'Workout complited!');
