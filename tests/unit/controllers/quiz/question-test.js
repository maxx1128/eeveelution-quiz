import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | quiz/question', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:quiz/question');
    assert.ok(controller);
  });

  test('it gets all the questions', function(assert) {
    let controller = this.owner.lookup('controller:quiz/question'),
        questions_length = controller.get('all_questions').length,
        quiz_length = controller.get('quiz.length') - 1;

    assert.equal(questions_length, quiz_length, 'It returns the same amount of questions from the quiz service');
  });
});
