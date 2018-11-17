import Component from '@ember/component';
import { computed } from '@ember/object';
import shuffle from '../helpers/shuffle';

export default Component.extend({
  shuffledAnswers: computed('question.answers', function(){
    return shuffle(this.get('question.answers'));
  })
});
