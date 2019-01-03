const User = require('./User');
const assert = require('assert');

function newUser() {
  return new User();
}

function withWorkout(user) {
  user.startWorkout();
  return user;
}

function testUserCanStartWorkout() {
  user = newUser();
  res = user.startWorkout();
  assert.deepEqual(res, 'Workout started!');
}

function testUserCanEndWorkout() {
  user = withWorkout(newUser());
  res = user.endWorkout();
  assert.deepEqual(res, 'Workout complited!');
}

function testUserCantEndWorkoutBeforeStart() {
  user = newUser();
  res = user.endWorkout();
  assert.deepEqual(res, "Error! Workout can't end before start");
}

function runTests() {
  testUserCanStartWorkout();
  testUserCanEndWorkout();
  testUserCantEndWorkoutBeforeStart();
}

runTests();
