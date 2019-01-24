import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  stats: computed('rawStats', function() {
    return this.rawStats.reverse();
  })
});
