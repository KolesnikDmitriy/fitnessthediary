const User = require('./User');
const assert = require('assert');

function newUser() {
  return new User();
}
function testUserCanStartWorkout() {
  user = newUser();
  res = user.startWorkout();
  assert.deepEqual(res, 'Workout started!');
}

function testUserCanEndWorkout() {
  user = newUser();
  user.endWorkout();
  res = user.endWorkout();
  assert.deepEqual(res, 'Workout complited!');
}

function runTests() {
  testUserCanStartWorkout();
  testUserCanEndWorkout();
}

runTests();
