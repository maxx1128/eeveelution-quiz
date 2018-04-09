import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { computed, set } from '@ember/object';
import questions from './../data/questions';

export default Service.extend({
  cookies: service(),

  init(){
    this._super(...arguments);

    let cookies = this.get('cookies');

    this.answers = {};

    if (cookies.exists('winner')) { this.set('winner', cookies.read('winner')); }
    if (cookies.exists('completed')) { this.set('completed', cookies.read('completed')); }
  },

  current_question: 1,

  length: computed('questions', function(){
    return parseInt(this.get('questions').length);
  }),

  completed: computed('current_question', 'questions', function(){
    return (this.get('current_question') === this.get('questions').length);
  }),

  results: computed('answers', function(){
    const answers = this.get('answers');
    let results = {};

    for (var key in answers) {
      const answer = answers[key];

      results[answer] ? results[answer]++ : results[answer] = 1;
    }

    return results;
  }),

  winner: computed('results', function(){
    const results = this.get('results');
    let winner = {
      'name': '',
      'count': 0
    };

    for (var key in results) {
      if (results[key] > winner['count']) {
        winner['name'] = key;
        winner['count'] = results[key];
      }
    }

    return winner['name'];
  }),

  selectAnswer: function(index, answer) {
    const i = parseInt(index),
          question = this.get('questions').objectAt(i),
          answers = this.get('answers');
    let current_question = parseInt(this.get('current_question'));

    set(question, 'answer', answer);
    set(answers, i, answer);

    if (i === current_question) { this.incrementProperty('current_question'); }

    this.notifyPropertyChange('results');
  },

  questions: questions
});
