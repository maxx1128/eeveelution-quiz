import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  quiz: service(),

  model: function(params) {
    const pokemon_in_url = params.pokemon,
          possible_pokemon = this.get('quiz.answers_data');
    let results = false;
    let speciesData;

    const getSpeciesData = async function(name) {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
      let data = await response.json();
      return data;
    }

    possible_pokemon.forEach(function(pokemon){
      if (pokemon.name === pokemon_in_url) {
        results = pokemon;
        speciesData = getSpeciesData(pokemon.name);
      }
    });

    return speciesData.then(data => {
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
