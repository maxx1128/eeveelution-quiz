import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click } from '@ember/test-helpers';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const questionData = {
  'text': 'What\'s your favorite type of weather?',
  'answer': null,
  'answers':[
    {
      'text': 'Sunny and breezy',
      'value': 'leafeon'
    },{
      'text': 'Cool and drizzly',
      'value': 'glaceon'
    },{
      'text': 'Anything not extreme',
      'value': 'eevee'
    }
  ]
};

module('Integration | Component | quiz-question', function(hooks) {
  setupRenderingTest(hooks);

  test('it render the proper data', async function(assert) {
    this.set('question', questionData);
    this.set('externalAction', () => {});

    await render(hbs`
      {{quiz-question
        question=question
        onSelect=(action externalAction)
      }}
    `);

    assert.dom('[data-test="QuestionItem"]').hasText(questionData.text, 'The question text is rendered right');
    assert.dom('li').exists({ count: questionData.answers.length }, 'The correct number of questions exists');
  });

  test('it calls the passed action when clicked', async function(assert) {
    this.set('question', questionData);
    this.set('externalAction', () => assert.ok(true, 'It calls in the passed action'));

    await render(hbs`
      {{quiz-question
        question=question
        onSelect=(action externalAction)
      }}
    `);

    await click('[data-test="AnswerItem"]:first-of-type');
  });
});
