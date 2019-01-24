import Component from '@ember/component';
import { computed } from '@ember/object';
import { filter } from '@ember/object/computed';

export default Component.extend({
  englishEntries: filter('rawEntries', function(entry) {
    return entry.language.name == 'en';
  }),

  reversedEntries: computed('englishEntries', function() {
    return this.get('englishEntries').reverse();
  })
});
