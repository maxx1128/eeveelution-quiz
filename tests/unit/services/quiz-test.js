import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import clearAllCookies from 'ember-cookies/clear-all-cookies';

const answers = [
  'eevee',
  'vaporeon',
  'jolteon',
  'flareon',
  'espeon',
  'umbreon',
  'leafeon',
  'glaceon',
  'sylveon',
  'eevee',
  'flareon',
  'eevee',
  'glaceon'
];

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
    clearAllCookies();
  });

  test('it tracks your answers to each question', function(assert) {
    let quiz = this.owner.lookup('service:quiz');

    answers.forEach(function(pokemon, index){
      quiz.selectAnswer(index, pokemon);
      assert.equal(quiz.get('answers')[index], pokemon, `Answer ${index + 1} is recorded as ${pokemon}`);
    });

    clearAllCookies();
  });

  test('it makes current and past questions available to answer', function(assert) {
    const quiz = this.owner.lookup('service:quiz');

    answers.forEach(function(pokemon, index){
      const question_number = index + 1;

      quiz.selectAnswer(index, pokemon);
      const available_questions = quiz.get('all_questions').filter(question => (question.available)).length;

      assert.equal(question_number, available_questions, `Question ${question_number} has ${available_questions} question(s) available`);
    });


    clearAllCookies();

    // Take results, filter out the ones that have available set to true, and make sure it's the right length
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
    clearAllCookies();
  });
});
