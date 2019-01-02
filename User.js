const Workout = require('./Workout');

module.exports = class User{
  constructor(){
    this.workout = new Workout();
  }

  startWorkout(){ 
    return this.workout.start();
  }
  
  endWorkout(){
    return this.workout.end();
  }
}
