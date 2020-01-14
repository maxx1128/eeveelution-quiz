import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
  quiz: service(),
  question: reads('quiz.current_question'),

  started_quiz: computed('question', function() {
    return this.question > 1;
  }),

  intro_text: computed('started_quiz', function(){
    return this.started_quiz ? 'Resume Quiz' : 'Start Quiz';
  })
});
