import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import shuffle from '../../helpers/shuffle';

export default Controller.extend({
  cookies: service(),
  quiz: service(),

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
        let cookies = this.get('cookies');
        cookies.write('winner', this.get('quiz.winner'));
        cookies.write('completed', this.get('quiz.completed'));

        this.transitionToRoute('results.pokemon', this.get('quiz.winner'));
      } else {
        this.transitionToRoute('quiz.question', (i + 1));
        this.notifyPropertyChange('all_questions');
      }
    }
  }
});
