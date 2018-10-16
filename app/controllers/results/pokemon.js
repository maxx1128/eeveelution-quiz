import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { reads, filter } from '@ember/object/computed';

export default Controller.extend({
  custom: reads('model.custom'),
  species: reads('model.species'),

  reversedFlavorTexts: filter('model.species.flavor_text_entries', function(entry) {
    return entry.language.name == 'en';
  }),

  dexEntries: computed('reversedFlavorTexts', function() {
    return this.get('reversedFlavorTexts').reverse();
  })
});
