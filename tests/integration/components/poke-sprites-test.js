import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const SPRITES_STUB = {
  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/134.png",
  "back_female": null,
  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/134.png",
  "back_shiny_female": null,
  "front_female": null,
  "front_shiny_female": null
}

module('Integration | Component | poke-sprites', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('sprites', SPRITES_STUB);
    this.set('name', 'Vaporeon');

    await render(hbs`{{poke-sprites sprites=sprites name=name}}`);

    assert.dom().isVisible();
  });
});
