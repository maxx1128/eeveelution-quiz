import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  quiz: service(),

  model: function(params) {
    this.set('i', params.question);
    const i = this.get('i');

    if (i > (this.get('quiz.questions').length - 1)) {
      this.transitionTo('quiz');
    } else {
      return this.get('quiz.questions')[i];
    }
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('model.index', this.get('i'));
  }
});
