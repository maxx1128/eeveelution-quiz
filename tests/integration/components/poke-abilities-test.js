import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const ABILITIES_STUB = [
  {
    "ability": {
      "name": "water-absorb",
      "url": "https://pokeapi.co/api/v2/ability/11/"
    },
    "is_hidden": false,
    "slot": 1
  },
  {
    "ability": {
      "name": "hydration",
      "url": "https://pokeapi.co/api/v2/ability/93/"
    },
    "is_hidden": true,
    "slot": 3
  }
]

module('Integration | Component | poke-abilities', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('rawAbilities', ABILITIES_STUB);
    await render(hbs`{{poke-abilities rawAbilities=rawAbilities}}`);

    assert.dom().isVisible();
  });
});
