import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

// setupController needed to pass the param to the model?
// In case the question index is needed to update the quiz service with the answer

export default Controller.extend({
  quiz: service(),

  all_questions: computed('model', 'quiz.length', function(){
    const limit = this.get('quiz.length'),
          current_index = this.get('model.index');
    let questions_array = [];

    for (var i = 1; i < limit; i++) {
      const question = this.get('quiz.questions').objectAt(i),
            answer = question.answer,
            available = (answer || answer === false || current_index >= i);

      const data = {
        index: i,
        available: available
      }

      questions_array.push(data);
    }

    return questions_array;
  }),

  actions: {
    selectAnswer(index, answer) {
      const i = parseInt(index);

      this.get('quiz').selectAnswer(i, answer);
      this.transitionToRoute('quiz.question', (i + 1));
      this.notifyPropertyChange('all_questions');
    }
  }
});
