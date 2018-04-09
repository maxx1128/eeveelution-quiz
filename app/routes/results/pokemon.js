import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  quiz: service(),

  model: function(params) {
    const pokemon_in_url = params.pokemon,
          possible_pokemon = this.get('quiz.answers_data');
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
