module.exports = class Workout {
  constructor() {
    this.isStarted = false;
  }

  start() {
    this.isStarted = true;
    return 'Workout started!';
  }

  end() {
    if (!this.isStarted) return "Error! Workout can't end before start";
    this.isStarted = false;
    return 'Workout complited!';
  }
};
