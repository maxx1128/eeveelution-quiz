import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | quiz', function(hooks) {
  setupTest(hooks);

  test('it tracks your progress', function(assert) {
    let quiz = this.owner.lookup('service:quiz');

    assert.equal(quiz.get('current_question'), 1, 'starts on the first question');

    quiz.selectAnswer(1, 'espeon');
    quiz.selectAnswer(2, 'espeon');
    quiz.selectAnswer(3, 'espeon');

    assert.equal(quiz.get('current_question'), 4, 'tracks your questions if you answer in the right order');

    quiz.selectAnswer(1, 'espeon');
    quiz.selectAnswer(5, 'espeon');

    assert.equal(quiz.get('current_question'), 4, 'doesn\'t change your progress if you answer in the wrong order');
  });

  test('it tracks your answers to each question', function(assert) {
    let quiz = this.owner.lookup('service:quiz');

    const answers = {
      1: 'eevee',
      2: 'vaporeon',
      3: 'jolteon',
      4: 'flareon',
      5: 'espeon',
      6: 'umbreon',
      7: 'leafeon',
      8: 'glaceon',
      9: 'sylveon',
      10: 'eevee',
      11: 'flareon',
      12: 'eevee',
      13: 'glaceon'
    };

    for (var key in answers) {
      let pokemon = answers[key];

      quiz.selectAnswer(key, pokemon);
      assert.equal(quiz.get('answers')[key], pokemon, `Answer ${key} is recorded as ${pokemon}`);
    }
  });

  test('it knows when you\'re finished', function(assert) {
    let quiz = this.owner.lookup('service:quiz'),
        quiz_length = quiz.get('length');

    assert.equal(quiz.get('completed'), false, 'the completed property starts as false');
    assert.equal(quiz.get('winner'), '', 'it starts with no winning result');

    for (let i = 1; i < quiz_length; i++) {
      quiz.selectAnswer(i, 'espeon');
    }

    assert.equal(quiz.get('completed'), true, 'the completed property becomes true');
    assert.equal(quiz.get('winner'), 'espeon', 'it learns the winning result');
  });
});

