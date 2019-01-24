import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const STATS_STUB = [
  {
    base_stat: 100,
    stat: {
      name: 'hp'
    }
  }, {
    base_stat: 100,
    stat: {
      name: 'attack'
    }
  }, {
    base_stat: 100,
    stat: {
      name: 'defense'
    }
  }, {
    base_stat: 100,
    stat: {
      name: 'special-attack'
    }
  }, {
    base_stat: 100,
    stat: {
      name: 'special-defense'
    }
  }, {
    base_stat: 100,
    stat: {
      name: 'speed'
    }
  }
]

module('Integration | Component | poke-stats', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('rawStats', STATS_STUB);
    await render(hbs`{{poke-stats rawStats=rawStats}}`);

    assert.dom().isVisible();
  });
});
