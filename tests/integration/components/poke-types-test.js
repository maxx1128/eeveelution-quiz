import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const TYPES_STUB = [
  {
    type: {
      name: 'water'
    }
  }
]

module('Integration | Component | poke-types', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('rawTypes', TYPES_STUB);
    await render(hbs`{{poke-types rawTypes=rawTypes}}`);

    assert.dom().isVisible();
  });
});
