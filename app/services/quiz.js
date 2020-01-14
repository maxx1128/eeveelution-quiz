import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { computed, set } from '@ember/object';
import questions from './../data/questions';
import results_data from './../data/results';

export default Service.extend({
  cookies: service(),

  init(){
    this._super(...arguments);

    let cookies = this.cookies;

    this.answers = {};

    if (cookies.exists('winner')) { this.set('winner', cookies.read('winner')); }
    if (cookies.exists('completed')) { this.set('completed', cookies.read('completed')); }
  },

  current_question: 1,

  length: computed('questions_data', function(){
    return parseInt(this.questions_data.length);
  }),

  progress: computed('current_question', 'length', function() {
    return this.current_question / this.length;
  }),

  completed: computed('current_question', 'questions_data', function(){
    return (this.current_question === this.questions_data.length);
  }),

  all_questions: computed('length', function(){
    const limit = this.length;
    let questions_array = [];

    for (var i = 1; i < limit; i++) {
      const available = (i <= this.current_question);

      const data = {
        index: i,
        available: available
      }

      questions_array.push(data);
    }

    return questions_array;
  }),

  results: computed('answers', function(){
    const answers = this.answers;
    let results = {};

    for (var key in answers) {
      const answer = answers[key];

      results[answer] ? results[answer]++ : results[answer] = 1;
    }

    return results;
  }),

  winner: computed('results', function(){
    const results = this.results;
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
          question = this.questions_data.objectAt(i),
          answers = this.answers;
    let current_question = parseInt(this.current_question);

    set(question, 'answer', answer);
    set(answers, i, answer);

    if (i === current_question) { this.incrementProperty('current_question'); }

    this.notifyPropertyChange('all_questions');
    this.notifyPropertyChange('results');
  },

  questions_data: questions,
  answers_data: results_data
});
