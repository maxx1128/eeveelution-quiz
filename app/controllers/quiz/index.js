import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
  quiz: service(),
  question: reads('quiz.current_question'),

  intro_text: computed('question', function(){
    return (this.get('question') > 1) ? 'Resume Quiz' : 'Start Quiz';
  })
});
