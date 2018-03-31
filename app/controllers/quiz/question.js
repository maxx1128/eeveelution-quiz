import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

// setupController needed to pass the param to the model?
// In case the question index is needed to update the quiz service with the answer

export default Controller.extend({
  quiz: service(),

  at_last_question: computed('quiz', function(){
    const recent_question = this.get('quiz.current_question'),
          last_question = (this.get('quiz.length') - 1);

    return (recent_question >= last_question);
  }),

  all_questions: computed('model', 'quiz.length', function(){
    const limit = this.get('quiz.length'),
          current_index = this.get('model.index');
    let questions_array = [];

    for (var i = 1; i < limit; i++) {
      const question = this.get('quiz.questions').objectAt(i),
            answer = question.answer,
            available = (i <= this.get('quiz.current_question'));

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

      if (this.get('quiz.completed')) {
        this.transitionToRoute('results'); // Later goes to results!
      } else {
        this.transitionToRoute('quiz.question', (i + 1));
        this.notifyPropertyChange('all_questions');
      }

      this.notifyPropertyChange('at_last_question');
    }
  }
});
