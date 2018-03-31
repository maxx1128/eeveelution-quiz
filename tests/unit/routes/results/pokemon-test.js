import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | results/pokemon', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:results/pokemon');
    assert.ok(route);
  });
});
