import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | results', function(hooks) {
  setupApplicationTest(hooks);

  test('can visit the eeveelution results pages', async function(assert) {
    const eeveelutions = [
      'eevee',
      'vaporeon',
      'jolteon',
      'flareon',
      'espeon',
      'umbreon',
      'leafeon',
      'glaceon',
      'sylveon'
    ];

    // Would love to use forEach() here, but can't since
    // you can't use await in a non-async function
    for (let i = 0; i < eeveelutions.length; i++) {
      const pokemon = eeveelutions[i];

      await visit(`/results/${pokemon}`);

      assert.equal(currentURL(), `/results/${pokemon}`, `You can visit the ${pokemon} results page`);
    }
  });

  test('cannot visit a nonexistant pokemon page', async function(assert) {
    await visit('/results/fakePokemon');

    assert.equal(currentURL(), '/results', 'The app redirects you to all the results');
  });
});
