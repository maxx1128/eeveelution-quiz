import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | progress-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it has aria text for updating progress', async function(assert) {
    const progress = 20;
    this.set('progress', progress);
    await render(hbs`{{progress-bar progress=progress}}`);

    assert.dom('.eq-progress-bar').hasAttribute('aria-label', `You are ${progress} percent through the quiz`);
  });

  test('the progress bar is the same width based on the progress', async function(assert) {
    const progress = 37;
    this.set('progress', progress);
    await render(hbs`{{progress-bar progress=progress}}`);

    assert.dom('.eq-progress-bar__fill').hasAttribute('style', `width: ${progress}%`);
  });
});
