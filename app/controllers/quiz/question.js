import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

// setupController needed to pass the param to the model?
// In case the question index is needed to update the quiz service with the answer

export default Controller.extend({
  quiz: service(),

  quiz_length: Ember.computed.alias('quiz.length'),

  all_questions: Ember.computed('quiz_length', function(){
    const limit = this.get('quiz_length');
    let questions_array = [];

    for (var i = 1; i < limit; i++) {
      questions_array.push(i);
    }

    return questions_array;
  })
});
