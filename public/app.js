const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello! This is your fitness the diary!'
  },
  methods: {
    start: () => {
      app.message = app.message + '!';
    }
  }
});
