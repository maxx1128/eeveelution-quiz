import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['eq-stats'],
  stats: computed('rawStats', function() {
    let addedStats = this.rawStats.map(stat => {
      const width = stat.base_stat * 3;

      stat.bar_width = `${width}px`;
      return stat;
    });

    return addedStats.reverse();
  })
});
