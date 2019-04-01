import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { reads, and } from '@ember/object/computed';

export default Controller.extend({
  quiz: service(),

  all_pokemon: reads('quiz.answers_data'),
  winner: reads('quiz.winner'),
  completed: reads('quiz.completed'),
  showWinner: and('winner', 'completed')
});
