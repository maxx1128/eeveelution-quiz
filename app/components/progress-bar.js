import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['eq-progress-bar'],
  attributeBindings: ['ariaLabel:aria-label'],

  ariaLabel: computed('progress', function() {
    return `You are ${this.get('progress')} percent through the quiz`;
  }),

  runningGIFPath: computed('progress', function() {
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    return `/assets/images/running-gifs/${randomNumber}.gif`;
  })
});
