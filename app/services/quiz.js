import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { computed, set } from '@ember/object';

export default Service.extend({
  cookies: service(),

  init(){
    this._super(...arguments);

    let cookies = this.get('cookies');

    if (cookies.exists('winner')) { this.set('winner', cookies.read('winner')); }
    if (cookies.exists('completed')) { this.set('completed', cookies.read('completed')); }
  },

  current_question: 1,

  length: computed('questions', function(){
    return parseInt(this.get('questions').length);
  }),

  completed: computed('current_question', 'questions', function(){
    return (this.get('current_question') === this.get('questions').length);
  }),

  results: computed('answers', function(){
    const answers = this.get('answers');
    let results = {};

    for (var key in answers) {
      const answer = answers[key];

      results[answer] ? results[answer]++ : results[answer] = 1;
    }

    return results;
  }),

  winner: computed('results', function(){
    const results = this.get('results');
    let winner = {
      'name': '',
      'count': 0
    };

    for (var key in results) {
      if (results[key] > winner['count']) {
        winner['name'] = key;
        winner['count'] = results[key];
      }
    }

    return winner['name'];
  }),

  selectAnswer: function(index, answer) {
    const i = parseInt(index),
          question = this.get('questions').objectAt(i),
          answers = this.get('answers');
    let current_question = parseInt(this.get('current_question'));

    set(question, 'answer', answer);
    set(answers, i, answer);

    if (i === current_question) { this.incrementProperty('current_question'); }

    this.notifyPropertyChange('results');
  },

  answers: {},

  questions: [
    {
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
        }, {
          'text': 'Rainy',
          'value': 'vaporeon'
        }, {
          'text': 'Lots of sunshine!',
          'value': 'flareon'
        }, {
          'text': 'Sunrise',
          'value': 'sylveon'
        }, {
          'text': 'Distant thunder',
          'value': 'jolteon'
        }, {
          'text': 'Anytime with sun',
          'value': 'espeon'
        }, {
          'text': 'Anything at night',
          'value': 'umbreon'
        }
      ]
    }, {
      'text': 'How would you describe yourself in one word?',
      'answer': null,
      'answers':[
        {
          'text': 'Cheerful',
          'value': 'sylveon'
        },{
          'text': 'Secretive',
          'value': 'umbreon'
        }, {
          'text': 'Flexible',
          'value': 'vaporeon'
        }, {
          'text': 'Intelligent',
          'value': 'espeon'
        }, {
          'text': 'Energetic',
          'value': 'jolteon'
        }, {
          'text': 'Down to Earth',
          'value': 'eevee'
        }, {
          'text': 'Free Spirited',
          'value': 'flareon'
        }, {
          'text': 'Outdoorsy',
          'value': 'leafeon'
        }, {
          'text': 'Independent',
          'value': 'glaceon'
        }
      ]
    }, {
      'text': 'Of these choices, what\'s your favorite food or snack?',
      'answer': null,
      'answers':[
        {
          'text': 'Ice Cream',
          'value': 'glaceon'
        },{
          'text': 'Watermelon',
          'value': 'vaporeon'
        }, {
          'text': 'Fruits and vegetables',
          'value': 'leafeon'
        }, {
          'text': 'Candy',
          'value': 'flareon'
        }, {
          'text': 'Energy drinks',
          'value': 'jolteon'
        }, {
          'text': 'Anything, really',
          'value': 'eevee'
        }, {
          'text': 'Something sour',
          'value': 'umbreon'
        }, {
          'text': 'An apple',
          'value': 'espeon'
        }
      ]
    }, {
      'text': 'Which is your favorite way to exercise?',
      'answer': null,
      'answers':[
        {
          'text': 'Jogging outside',
          'value': 'leafeon'
        },{
          'text': 'Short sprints',
          'value': 'jolteon'
        }, {
          'text': 'Yoga and meditation',
          'value': 'espeon'
        }, {
          'text': 'Swimming',
          'value': 'vaporeon'
        }, {
          'text': 'Dancing',
          'value': 'flareon'
        }, {
          'text': 'Anything with friends',
          'value': 'sylveon'
        }
      ]
    }, {
      'text': 'A stranger approaches you and stands by your side, looking at you. What\'s your reaction?',
      'answer': null,
      'answers':[
        {
          'text': 'Ask if they need anything',
          'value': 'eevee'
        }, {
          'text': 'Talk to them about whatever is on your mind',
          'value': 'vaporeon'
        }, {
          'text': 'Glare at them before slowly walking away',
          'value': 'glaceon'
        }, {
          'text': 'Welcome them as a new friend and chat with them',
          'value': 'sylveon'
        }, {
          'text': 'Make an observation about them to break the ice',
          'value': 'leafeon'
        }, {
          'text': 'Completely ignore them and walk away',
          'value': 'umbreon'
        }, {
          'text': 'Wonder why they\'re doing this in the first place',
          'value': 'espeon'
        }
      ]
    }, {
      'text': 'If you were fighting an enemy, what would your strategy be?',
      'answer': null,
      'answers':[
        {
          'text': 'Hit them before they hit you',
          'value': 'jolteon'
        }, {
          'text': 'Overwhelm them with pure, focused force',
          'value': 'leafeon'
        }, {
          'text': 'Wear them down until they\'re too tired to fight back',
          'value': 'umbreon'
        }, {
          'text': 'Try to balance offense and defense',
          'value': 'eevee'
        }, {
          'text': 'Trick them into letting down their guard, then strike',
          'value': 'sylveon'
        }, {
          'text': 'Lure them into an environment where you have an advantage',
          'value': 'vaporeon'
        }, {
          'text': 'Watch for their biggest weak point and find a way to exploit it',
          'value': 'espeon'
        }, {
          'text': 'Go all out and hope enough attacks land',
          'value': 'flareon'
        }
      ]
    }, {
      'text': 'Are you easily excitable?',
      'answer': null,
      'answers':[
        {
          'text': 'Not at all, I\'m very quiet and reserved',
          'value': 'umbreon'
        }, {
          'text': 'No, I\'m usually pretty calm',
          'value': 'glaceon'
        }, {
          'text': 'Maybe. I get as excited as the next person',
          'value': 'eevee'
        }, {
          'text': 'Yes, it isn\'t hard to get me jumping for something',
          'value': 'sylveon'
        }, {
          'text': 'Very, I\'m already excited for most of the day!',
          'value': 'jolteon'
        }
      ]
    }, {
      'text': 'What\'s your favorite movie genre?',
      'answer': null,
      'answers':[
        {
          'text': 'Romantic Comedy',
          'value': 'sylveon'
        }, {
          'text': 'Thriller',
          'value': 'flareon'
        }, {
          'text': 'Mystery/Suspense',
          'value': 'glaceon'
        }, {
          'text': 'Family Friendly',
          'value': 'eevee'
        }, {
          'text': 'Documentary',
          'value': 'espeon'
        }, {
          'text': 'Anything fast-paced',
          'value': 'jolteon'
        }, {
          'text': 'Horror',
          'value': 'umbreon'
        }
      ]
    }, {
      'text': 'You\'re favorite accessory or piece of clothing on this list?',
      'answer': null,
      'answers':[
        {
          'text': 'Coat or jacket',
          'value': 'glaceon'
        }, {
          'text': 'Scarf',
          'value': 'flareon'
        }, {
          'text': 'Swimsuit',
          'value': 'vaporeon'
        }, {
          'text': 'Necklace',
          'value': 'espeon'
        }, {
          'text': 'Bow or bowtie',
          'value': 'sylveon'
        }, {
          'text': 'Sunglasses',
          'value': 'umbreon'
        }, {
          'text': 'Boots or gloves',
          'value': 'leafeon'
        }
      ]
    }, {
      'text': 'What would your ideal vacation be?',
      'answer': null,
      'answers':[
        {
          'text': 'Somewhere with lots of parties',
          'value': 'jolteon'
        }, {
          'text': 'Going camping or hiking',
          'value': 'leafeon'
        }, {
          'text': 'A winter wonderland or resort',
          'value': 'glaceon'
        }, {
          'text': 'A house by a lake',
          'value': 'vaporeon'
        }, {
          'text': 'The beach or a resort',
          'value': 'flareon'
        }, {
          'text': 'Depends on the season',
          'value': 'eevee'
        }, {
          'text': 'An amusement park',
          'value': 'sylveon'
        }, {
          'text': 'Somewhere I can read in peace',
          'value': 'espeon'
        }, {
          'text': 'An island without many people',
          'value': 'umbreon'
        }
      ]
    }, {
      'text': 'What would your biggest dealbreaker be in a romantic partner?',
      'answer': null,
      'answers':[
        {
          'text': 'They\'re too much of a morning person',
          'value': 'umbreon'
        }, {
          'text': 'They\'re not outgoing enough',
          'value': 'jolteon'
        }, {
          'text': 'They\'re too "out there" for me',
          'value': 'eevee'
        }, {
          'text': 'They don\'t intellectually challenge me',
          'value': 'espeon'
        }, {
          'text': 'They\'re too pessimistic',
          'value': 'sylveon'
        }, {
          'text': 'They\'re in their house too much',
          'value': 'leafeon'
        }, {
          'text': 'They\'re not exciting',
          'value': 'flareon'
        }, {
          'text': 'They dwell too much on things',
          'value': 'vaporeon'
        }, {
          'text': 'They\'re too clingy',
          'value': 'glaceon'
        }
      ]
    }, {
      'text': 'Which of these holidays is your favorite?',
      'answer': null,
      'answers':[
        {
          'text': 'Christmas',
          'value': 'glaceon'
        }, {
          'text': 'July 4th',
          'value': 'flareon'
        }, {
          'text': 'New Year\'s Eve',
          'value': 'jolteon'
        }, {
          'text': 'Earth Day',
          'value': 'leafeon'
        }, {
          'text': 'Valentine\'s Day',
          'value': 'sylveon'
        }, {
          'text': 'Thanksgiving',
          'value': 'eevee'
        }
      ]
    }, {
      'text': 'Which of these pets would you like the most?',
      'answer': null,
      'answers':[
        {
          'text': 'Hedgehog',
          'value': 'jolteon'
        }, {
          'text': 'One or multiple fish',
          'value': 'vaporeon'
        }, {
          'text': 'Cat',
          'value': 'glaceon'
        }, {
          'text': 'Dog',
          'value': 'sylveon'
        }, {
          'text': 'Snake',
          'value': 'umbreon'
        }, {
          'text': 'Hamster',
          'value': 'flareon'
        }, {
          'text': 'Any kind of insect(s)',
          'value': 'leafeon'
        }
      ]
    }, {
      'text': 'Which of these do you fear the most?',
      'answer': null,
      'answers':[
        {
          'text': 'Getting lost in a park at night',
          'value': 'espeon'
        }, {
          'text': 'Being in a building on fire',
          'value': 'glaceon'
        }, {
          'text': 'Getting lost at sea',
          'value': 'flareon'
        }, {
          'text': 'Being embarassed or humiliated in front of many people',
          'value': 'umbreon'
        }, {
          'text': 'A swarm of locusts or vicious insects',
          'value': 'leafeon'
        }, {
          'text': 'Locked in a small room',
          'value': 'eevee'
        }, {
          'text': 'Being paralyzed or immobile',
          'value': 'jolteon'
        }, {
          'text': 'Getting trapped in the desert',
          'value': 'vaporeon'
        }, {
          'text': 'Having no friends',
          'value': 'sylveon'
        }
      ]
    }, {
      'text': 'What virtue(s) do you appreciate the most in others?',
      'answer': null,
      'answers':[
        {
          'text': 'Genuineness and honesty',
          'value': 'eevee'
        }, {
          'text': 'Composure and a cool attitude',
          'value': 'glaceon'
        }, {
          'text': 'An optimistic view of life',
          'value': 'sylveon'
        }, {
          'text': 'Intelligence and wit',
          'value': 'espeon'
        }, {
          'text': 'Going with the flow',
          'value': 'vaporeon'
        }, {
          'text': 'Quick thinking',
          'value': 'jolteon'
        }, {
          'text': 'Caring for nature',
          'value': 'leafeon'
        }, {
          'text': 'Energy and passion',
          'value': 'flareon'
        }, {
          'text': 'Being happy with solitude',
          'value': 'umbreon'
        }
      ]
    }, {
      'text': 'Which of the below jobs or hobbies is your favorite?',
      'answer': null,
      'answers':[
        {
          'text': 'Teaching',
          'value': 'espeon'
        }, {
          'text': 'Cooking',
          'value': 'flareon'
        }, {
          'text': 'Gardening and/or hiking',
          'value': 'leafeon'
        }, {
          'text': 'Anything with lots of traveling',
          'value': 'vaporeon'
        }, {
          'text': 'Being an entertainer',
          'value': 'sylveon'
        }, {
          'text': 'Exercising',
          'value': 'jolteon'
        }, {
          'text': 'Not sure, I have a lot',
          'value': 'eevee'
        }
      ]
    }, {
      'text': 'How do you feel about following rules?',
      'answer': null,
      'answers':[
        {
          'text': 'They\'re there for a reason, so I follow them',
          'value': 'eevee'
        }, {
          'text': 'I often disobey them on purpose',
          'value': 'umbreon'
        }, {
          'text': 'As long as they don\'t get in my way, I don\'t care',
          'value': 'jolteon'
        }, {
          'text': 'They annoy me, but I grudgingly follow them',
          'value': 'glaceon'
        }, {
          'text': 'There\'s always a way around them',
          'value': 'vaporeon'
        }, {
          'text': 'I always question why they need to be followed at all',
          'value': 'espeon'
        }, {
          'text': 'I don\'t think about them',
          'value': 'flareon'
        }
      ]
    }, {
      'text': 'Which of the following emotions or moods do you feel the most?',
      'answer': null,
      'answers':[
        {
          'text': 'Joy',
          'value': 'sylveon'
        }, {
          'text': 'Excitement',
          'value': 'flareon'
        }, {
          'text': 'Carefree',
          'value': 'vaporeon'
        }, {
          'text': 'Disgust',
          'value': 'glaceon'
        }, {
          'text': 'Mischievous',
          'value': 'umbreon'
        }, {
          'text': 'Thoughtful',
          'value': 'espeon'
        }, {
          'text': 'Calm',
          'value': 'eevee'
        }, {
          'text': 'Impatient',
          'value': 'jolteon'
        }, {
          'text': 'Attentive',
          'value': 'leafeon'
        }
      ]
    }, {
      'text': 'What\'s your favorite color?',
      'answer': null,
      'answers':[
        {
          'text': 'Pink',
          'value': 'sylveon'
        }, {
          'text': 'Red',
          'value': 'flareon'
        }, {
          'text': 'Green',
          'value': 'leafeon'
        }, {
          'text': 'Blue',
          'value': 'vaporeon'
        }, {
          'text': 'White',
          'value': 'glaceon'
        }, {
          'text': 'Yellow',
          'value': 'jolteon'
        }, {
          'text': 'Black',
          'value': 'umbreon'
        }, {
          'text': 'Brown',
          'value': 'eevee'
        }, {
          'text': 'Purple',
          'value': 'espeon'
        }
      ]
    }, {
      'text': 'If you could have one of the below superpowers, which would it be?',
      'answer': null,
      'answers':[
        {
          'text': 'Create and control fire',
          'value': 'flareon'
        }, {
          'text': 'Breathe underwater',
          'value': 'vaporeon'
        }, {
          'text': 'Learn and memorize anything',
          'value': 'espeon'
        }, {
          'text': 'Copy powers or strengths from others',
          'value': 'eevee'
        }, {
          'text': 'Turn invisible',
          'value': 'umbreon'
        }, {
          'text': 'Super speed',
          'value': 'jolteon'
        }, {
          'text': 'Control nature',
          'value': 'leafeon'
        }, {
          'text': 'Create and control ice',
          'value': 'glaceon'
        }
      ]
    }, {
      'text': 'Which of the following topics or issues do you care about the most?',
      'answer': null,
      'answers':[
        {
          'text': 'Environment',
          'value': 'leafeon'
        }, {
          'text': 'Education',
          'value': 'espeon'
        }, {
          'text': 'Public Safety',
          'value': 'sylveon'
        }, {
          'text': 'Laws we follow',
          'value': 'flareon'
        }, {
          'text': 'International Relations',
          'value': 'vaporeon'
        }, {
          'text': 'It really depends',
          'value': 'eevee'
        }, {
          'text': 'Nothing, I never follow this stuff',
          'value': 'glaceon'
        }
      ]
    }, {
      'text': 'What topic do you enjoy talking about most on a date?',
      'answer': null,
      'answers':[
        {
          'text': 'Just talking about our days',
          'value': 'eevee'
        }, {
          'text': 'Pick one based on something around us',
          'value': 'leafeon'
        }, {
          'text': 'Whatever is in the news',
          'value': 'espeon'
        }, {
          'text': 'Any random topics that pop into our heads',
          'value': 'vaporeon'
        }, {
          'text': 'I wouldn\'t do much talking',
          'value': 'glaceon'
        }, {
          'text': 'Lots of different topics, one after the other',
          'value': 'jolteon'
        }, {
          'text': 'Dating? I barely do any, if at all',
          'value': 'umbreon'
        }
      ]
    }, {
      'text': 'If you had to guess what kind of crime you\'d commit, what would it be?',
      'answer': null,
      'answers':[
        {
          'text': 'Drug use',
          'value': 'leafeon'
        }, {
          'text': 'Robbery',
          'value': 'umbreon'
        }, {
          'text': 'Arson',
          'value': 'flareon'
        }, {
          'text': 'Hit and Run',
          'value': 'vaporeon'
        }, {
          'text': 'None, I\'m a model citizen',
          'value': 'sylveon'
        }
      ]
    }, {
      'text': 'You see a wallet in the street. What do you do?',
      'answer': null,
      'answers':[
        {
          'text': 'Just walk past it, it\'s not my problem',
          'value': 'glaceon'
        }, {
          'text': 'Look inside for any info on who lost it',
          'value': 'espeon'
        }, {
          'text': 'Pick it up and keep walking. Finders keepers!',
          'value': 'umbreon'
        }, {
          'text': 'Ask around to try and find who lost it',
          'value': 'sylveon'
        }, {
          'text': 'Running around rapidly and asking people',
          'value': 'jolteon'
        }, {
          'text': 'I don\'t know, it\'s a tough situation',
          'value': 'eevee'
        }
      ]
    }
  ]
});
