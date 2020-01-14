import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  quiz: service(),

  model: function(params) {
    this.set('i', parseInt(params.question));
    const i = this.i,
          current_question = this.quiz.current_question,
          quiz_completed = this.quiz.completed,
          nonexistent_question = (i > (this.quiz.questions_data.length - 1)),
          unanswered_question = (i > current_question );

    if (nonexistent_question) {
      this.transitionTo('quiz');
    } else if (unanswered_question) {
      this.transitionTo('quiz.question', current_question);
    } else if (quiz_completed) {
      this.transitionTo('results.pokemon', this.quiz.winner);
    } else {
      return this.quiz.questions_data[i];
    }
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('model.index', this.i);
  }
});
