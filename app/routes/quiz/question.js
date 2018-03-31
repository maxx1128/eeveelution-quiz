import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  quiz: service(),

  model: function(params) {
    this.set('i', parseInt(params.question));
    const i = this.get('i'),
          current_question = this.get('quiz.current_question'),
          quiz_completed = this.get('quiz.completed'),
          nonexistent_question = (i > (this.get('quiz.questions').length - 1)),
          unanswered_question = (i > current_question );

    if (nonexistent_question) {
      this.transitionTo('quiz');
    } else if (unanswered_question) {
      this.transitionTo('quiz.question', current_question);
    } else if (quiz_completed) {
      this.transitionTo('results');
    } else {
      return this.get('quiz.questions')[i];
    }
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('model.index', this.get('i'));
  }
});
