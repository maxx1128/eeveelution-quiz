import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  results: service(),
  quiz: service(),

  all_pokemon: alias('results.pokemon'),
  winner: alias('quiz.winner')
});
