import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  quiz: service(),

  model: function(params) {
    const i = params.question;

    if (i > this.get('quiz.questions').length) {
      this.transitionTo('quiz');
    } else {
      return this.get('quiz.questions')[i];
    }
  }
});
