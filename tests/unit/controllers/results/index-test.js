import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | results', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:results/index');
    assert.ok(controller);
  });

  test('it has the results', function(assert){
    let controller = this.owner.lookup('controller:results/index');
    let quiz_service = this.owner.lookup('service:quiz');

    assert.equal(quiz_service.get('answers_data'), controller.get('all_pokemon'), 'gets the right results data');
  })
});
