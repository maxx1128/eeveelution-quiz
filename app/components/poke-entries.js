import Component from '@ember/component';
import { computed } from '@ember/object';
import { filter } from '@ember/object/computed';

function getUnique(arr, comp) {
  const unique = arr
       .map(e => e[comp])

     // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);

   return unique;
}

export default Component.extend({
  englishEntries: filter('rawEntries', function(entry) {
    return entry.language.name == 'en';
  }),

  filteredEntries: computed('englishEntries', function() {
    const reversedArray = this.get('englishEntries').reverse();

    return getUnique(reversedArray, 'flavor_text');
  })
});
