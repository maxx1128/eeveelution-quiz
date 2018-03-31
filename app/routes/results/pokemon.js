import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  results: service(),

  model: function(params) {
    const pokemon_in_url = params.pokemon,
          possible_pokemon = this.get('results.pokemon');
    let results = false;

    possible_pokemon.forEach(function(pokemon){
      if (pokemon.name === pokemon_in_url) { results = pokemon; }
    });

    if (results) {
      return results;
    } else {
      this.transitionTo('results');
    }
  }
});
