import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  quiz: service(),

  all_pokemon: alias('quiz.answers_data'),
  winner: alias('quiz.winner')
});
