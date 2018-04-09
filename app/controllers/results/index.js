import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import results_data from './../../data/results';

export default Controller.extend({
  quiz: service(),

  all_pokemon: results_data,
  winner: alias('quiz.winner')
});
