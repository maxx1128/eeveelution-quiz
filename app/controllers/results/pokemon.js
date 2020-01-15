import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { reads, filter } from '@ember/object/computed';

export default Controller.extend({
  custom: reads('model.custom'),
  speciesData: reads('model.data.species'),
  baseData: reads('model.data.base'),
  types: reads('baseData.types'),

  reversedFlavorTexts: filter('speciesData.flavor_text_entries', function(entry) {
    return entry.language.name == 'en';
  }),

  dexEntries: computed('reversedFlavorTexts', function() {
    return this.reversedFlavorTexts.reverse();
  })
});
