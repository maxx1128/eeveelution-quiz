import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  quiz: service(),

  model: function() {
    if (this.quiz.completed) { this.transitionTo('results.pokemon', this.quiz.winner); }
  }
});
