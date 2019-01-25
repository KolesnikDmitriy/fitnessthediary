host = 'https://fitnessthediary.now.sh/';

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello! This is your fitness the diary!'
  },
  methods: {
    start: () => {
      axios
        .get(`${host}workout/start`)
        .then(response => (app.message = response.data));
    },
    end: () => {
      axios
        .get(`${host}workout/end`)
        .then(response => (app.message = response.data));
    }
  }
});
