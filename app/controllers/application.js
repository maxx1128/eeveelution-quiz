import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { reads } from '@ember/object/computed';

export default Controller.extend({
  quiz: service(),
  completed: reads('quiz.completed'),
});
