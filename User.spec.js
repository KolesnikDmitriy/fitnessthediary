const User = require('./User');
const assert = require('assert');

function newUser() {
  return new User();
}

function withWorkout(user) {
  user.startWorkout();
  return user;
}

describe('User', () => {
  it('can start workout', () => {
    user = newUser();
    res = user.startWorkout();
    assert.deepEqual(res, 'Workout started!');
  });

  it('can end workout', () => {
    user = withWorkout(newUser());
    res = user.endWorkout();
    assert.deepEqual(res, 'Workout complited!');
  });

  it("can't end workout before start", () => {
    user = newUser();
    res = user.endWorkout();
    assert.deepEqual(res, "Error! Workout can't be completed before start");
  });

  it("can't start two workouts", () => {
    user = withWorkout(newUser());
    res = user.startWorkout();
    assert.deepEqual(res, "Error! Can't start two workouts at the same time");
  });
});
