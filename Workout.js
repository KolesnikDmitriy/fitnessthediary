module.exports = class Workout {
  constructor() {
    this.isStarted = false;
  }

  start() {
    if (this.isStarted)
      return "Error! Can't start two workouts at the same time";
    this.isStarted = true;
    return 'Workout started!';
  }

  end() {
    if (!this.isStarted)
      return "Error! Workout can't be completed before start";
    this.isStarted = false;
    return 'Workout complited!';
  }
};
