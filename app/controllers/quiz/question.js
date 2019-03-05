import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Controller.extend({
  cookies: service(),
  quiz: service(),

  all_questions: reads('quiz.all_questions'),

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
      }
    }
  }
});
