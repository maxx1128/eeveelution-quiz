import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  quiz: service(),
  completed: alias('quiz.completed'),
});
