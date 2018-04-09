import Route from '@ember/routing/route';
import results_data from './../../data/results';

export default Route.extend({

  model: function(params) {
    const pokemon_in_url = params.pokemon,
          possible_pokemon = results_data;
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
