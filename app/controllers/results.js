import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  results: service(),

  test: "This is a string!",

  all_pokemon: alias('results.pokemon')
});
