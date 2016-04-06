import Ember from 'ember';

export default Ember.Component.extend({
  score: 0,

  up(score, movieId) {
    const newScore = this.set(`score`, this.score + 1);
    return fetch(`http://tiny-tn.herokuapp.com/collections/movies/${this.movieId}`, {
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify({score: newScore})
    }).then((r) => r.json())
    .then((updates) => {
      Object.assign(this.score, updates);
    });
  },
  down(score) {
    const newScore = this.set(`score`, this.score - 1);
    return fetch(`http://tiny-tn.herokuapp.com/collections/movies/${this.movieId}`, {
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify({score: newScore})
    }).then((r) => r.json())
    .then((updates) => {
      Object.assign(this.score, updates);
    });
  },
})
