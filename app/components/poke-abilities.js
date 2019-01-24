import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  abilities: computed('rawAbilities', function() {
    return this.rawAbilities.sort(ability => ability.is_hidden === true).map(function(ability) {
      const name = ability.ability.name.replace(/-/g, ' ');

      return {
        name: name,
        hidden: ability.is_hidden
      }
    });
  })
});
