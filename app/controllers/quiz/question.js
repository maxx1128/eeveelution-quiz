import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  quiz: service(),

  at_last_question: computed('quiz', function(){
    const recent_question = this.get('quiz.current_question'),
          last_question = (this.get('quiz.length') - 1);

    return (recent_question >= last_question);
  }),

  answers: computed('model.answers', function(){
    return shuffle(this.get('model.answers'));
  }),

  all_questions: computed('model', 'quiz.length', function(){
    const limit = this.get('quiz.length');
    let questions_array = [];

    for (var i = 1; i < limit; i++) {
      const available = (i <= this.get('quiz.current_question'));

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
        this.transitionToRoute('results.pokemon', this.get('quiz.winner'));
      } else {
        this.transitionToRoute('quiz.question', (i + 1));
        this.notifyPropertyChange('all_questions');
      }

      this.notifyPropertyChange('at_last_question');
    }
  }
});

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}
