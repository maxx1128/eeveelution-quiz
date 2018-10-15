import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { alias, filter } from '@ember/object/computed';

export default Controller.extend({
  custom: alias('model.custom'),
  species: alias('model.species'),

  reversedFlavorTexts: filter('model.species.flavor_text_entries', function(entry) {
    return entry.language.name == 'en';
  }),

  dexEntries: computed('reversedFlavorTexts', function() {
    return this.get('reversedFlavorTexts').reverse();
  })
});
