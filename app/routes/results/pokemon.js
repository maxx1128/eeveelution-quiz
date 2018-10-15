import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import PokeAPI from '../../services/pokeapi';

export default Route.extend({
  quiz: service(),

  model: function(params) {
    const pokemon_in_url = params.pokemon,
          possible_pokemon = this.get('quiz.answers_data');
    let results = false;
    let APIRequest;

    possible_pokemon.forEach(function(pokemon){
      if (pokemon.name === pokemon_in_url) {
        results = pokemon;
        APIRequest = new PokeAPI(pokemon.name);
      }
    });

    if (APIRequest === undefined) {
      this.transitionTo('results');
    }

    return APIRequest.getSpeciesData().then(data => {
      if (results) {
        return {
          custom: results,
          species: data
        };
      } else {
        this.transitionTo('results');
      }
    });
  }
});
