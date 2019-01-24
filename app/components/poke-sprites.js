import Component from '@ember/component';
import { reads } from '@ember/object/computed';

export default Component.extend({
  normal: reads('sprites.front_default'),
  shiny: reads('sprites.front_shiny')
});
