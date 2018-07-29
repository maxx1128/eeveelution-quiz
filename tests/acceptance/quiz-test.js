import { module, test } from 'qunit';
import { findAll, click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import clearAllCookies from 'ember-cookies/clear-all-cookies';

module('Acceptance | quiz', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting the initial quiz page', async function(assert) {
    clearAllCookies();
    await visit('/quiz');

    assert.equal(currentURL(), '/quiz', 'The URL loads');
    assert.dom('[data-test=GoToQuiz]').hasText('Start Quiz', 'The starting prompt asks you to start the quiz');
    assert.dom('[data-test=Nav-QuizLink]').hasText('Take the Quiz!', 'The nav asks you to take the quiz');
  });

  test('visiting the first quiz question', async function(assert) {
    await visit('/quiz/1');

    assert.equal(currentURL(), '/quiz/1', 'The URL loads');
    assert.dom('[data-test=QuestionItem-Active]').exists({ count: 1 }, 'Only one question is available');
    assert.dom('[data-test=AnswerItem]').exists('Answers are there to select');
  });

  test('answering a quiz question', async function(assert) {
    await visit('/quiz/1');

    await click('[data-test=AnswerItem]:first-of-type');
    assert.equal(currentURL(), '/quiz/2', 'You go to the next question');
    assert.dom('[data-test=QuestionItem-Active]').exists({ count: 2 }, 'Two questions are available');

    await click('[data-test=QuestionList] [data-test=QuestionItem-Active]:first-of-type a');

    assert.equal(currentURL(), '/quiz/1', 'You go back to the previous question');
    assert.dom('[data-test=QuestionItem-Active]').exists({ count: 2 }, 'The quiz remembers you answered two');

    await click('[data-test=QuestionList] [data-test=QuestionItem-Active]:nth-of-type(2) a');

    assert.equal(currentURL(), '/quiz/2', 'You go go back to your current question');
    assert.dom('[data-test=QuestionItem-Active]').exists({ count: 2 }, 'The quiz still remembers you answered two');

    await visit('/quiz');
    assert.dom('[data-test=GoToQuiz]').hasText('Resume Quiz', 'The starting prompt asks you to resume the quiz');
    clearAllCookies();
  });

  test('finishing the quiz', async function(assert) {
    await visit('/quiz/1');
    const allQuestions = findAll('[data-test=QuestionList] span');

    for (let i = 2; i < (allQuestions.length + 1); i++) {
      await click('[data-test=AnswerItem]:first-of-type');
      assert.equal(currentURL(), `/quiz/${i}`, `You go to Question #${i}`);
      assert.dom('[data-test=QuestionItem-Active]').exists({ count: i }, `The quiz counts ${i} active items`);
    }

    await click('[data-test=AnswerItem]:first-of-type');
    assert.equal(currentURL().startsWith('/results/'), true, 'You go to a results page');
  });

  test('the app remembers you finish the quiz', async function(assert) {
    await visit('/quiz');

    assert.dom('[data-test=Nav-QuizLink]').hasText('See Your Results', 'The nav changes and shows your results');
    await click('[data-test=Nav-QuizLink]');
    assert.equal(currentURL().startsWith('/results/'), true, 'The nav takes you to a results page');

    await visit('/quiz/1');
    assert.equal(currentURL().startsWith('/results/'), true, 'Trying to revisit the quiz redirects you to results');

    await visit('/results');
    assert.dom('[data-test=ResultsContainer]').includesText('That\'s you!', 'The results list marks your result');
    clearAllCookies();
  });
});
