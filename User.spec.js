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
  assert.deepEqual(res, "Error! Workout can't be completed before start");
}

function testUserCantStartTwoWorkouts() {
  user = withWorkout(newUser());
  res = user.startWorkout();
  assert.deepEqual(res, "Error! Can't start two workouts at the same time");
}

function runTests() {
  testUserCanStartWorkout();
  testUserCanEndWorkout();
  testUserCantEndWorkoutBeforeStart();
  testUserCantStartTwoWorkouts();
}

runTests();
