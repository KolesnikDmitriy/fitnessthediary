const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello! This is your fitness the diary!'
  },
  methods: {
    start: () => {
      axios
        .get('http://localhost:3000/workout/start')
        .then(response => (app.message = response.data));
    },
    end: () => {
      axios
        .get('http://localhost:3000/workout/end')
        .then(response => (app.message = response.data));
    }
  }
});
