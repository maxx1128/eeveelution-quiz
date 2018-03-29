import Service from '@ember/service';

export default Service.extend({
  name: "This is the Eevee quiz!",

  questions: [
    {
      'text': 'What\'s your favorite type of weather?',
      'answers':[
        {
          'text': 'Sunny and breezy',
          'index': 6
        },{
          'text': 'Cool and drizzly',
          'index': 7
        },{
          'text': 'Anything not extreme',
          'index': 0
        }, {
          'text': 'Rainy',
          'index': 1
        }, {
          'text': 'Lots of sunshine!',
          'index': 3
        }, {
          'text': 'Sunrise',
          'index': 8
        }, {
          'text': 'Distant thunder',
          'index': 2
        }, {
          'text': 'Anytime with sun',
          'index': 4
        }, {
          'text': 'Anything at night',
          'index': 5
        }
      ]
    }, {
      'text': 'How would you describe yourself in one word?',
      'answers':[
        {
          'text': 'Cheerful',
          'index': 8
        },{
          'text': 'Secretive',
          'index': 5
        }, {
          'text': 'Flexible',
          'index': 1
        }, {
          'text': 'Intelligent',
          'index': 4
        }, {
          'text': 'Energetic',
          'index': 2
        }, {
          'text': 'Down to Earth',
          'index': 0
        }, {
          'text': 'Free Spirited',
          'index': 3
        }, {
          'text': 'Outdoorsy',
          'index': 6
        }, {
          'text': 'Independent',
          'index': 7
        }
      ]
    }, {
      'text': 'Of these choices, what\'s your favorite food or snack?',
      'answers':[
        {
          'text': 'Ice Cream',
          'index': 7
        },{
          'text': 'Watermelon',
          'index': 1
        }, {
          'text': 'Fruits and vegetables',
          'index': 6
        }, {
          'text': 'Candy',
          'index': 3
        }, {
          'text': 'Energy drinks',
          'index': 2
        }, {
          'text': 'Anything, really',
          'index': 0
        }, {
          'text': 'Something sour',
          'index': 5
        }, {
          'text': 'An apple',
          'index': 4
        }
      ]
    }, {
      'text': 'Which is your favorite way to exercise?',
      'answers':[
        {
          'text': 'Jogging outside',
          'index': 6
        },{
          'text': 'Short sprints',
          'index': 2
        }, {
          'text': 'Yoga and meditation',
          'index': 4
        }, {
          'text': 'Swimming',
          'index': 1
        }, {
          'text': 'Dancing',
          'index': 3
        }, {
          'text': 'Anything with friends',
          'index': 8
        }
      ]
    }, {
      'text': 'A stranger approaches you and stands by your side, looking at you. What\'s your reaction?',
      'answers':[
        {
          'text': 'Ask if they need anything',
          'index': 0
        }, {
          'text': 'Talk to them about whatever is on your mind',
          'index': 1
        }, {
          'text': 'Glare at them before slowly walking away',
          'index': 7
        }, {
          'text': 'Welcome them as a new friend and chat with them',
          'index': 8
        }, {
          'text': 'Make an observation about them to break the ice',
          'index': 6
        }, {
          'text': 'Completely ignore them and walk away',
          'index': 5
        }, {
          'text': 'Wonder why they\'re doing this in the first place',
          'index': 4
        }
      ]
    }, {
      'text': 'If you were fighting an enemy, what would your strategy be?',
      'answers':[
        {
          'text': 'Hit them before they hit you',
          'index': 2
        }, {
          'text': 'Overwhelm them with pure, focused force',
          'index': 6
        }, {
          'text': 'Wear them down until they\'re too tired to fight back',
          'index': 5
        }, {
          'text': 'Try to balance offense and defense',
          'index': 0
        }, {
          'text': 'Trick them into letting down their guard, then strike',
          'index': 8
        }, {
          'text': 'Lure them into an environment where you have an advantage',
          'index': 1
        }, {
          'text': 'Watch for their biggest weak point and find a way to exploit it',
          'index': 4
        }, {
          'text': 'Go all out and hope enough attacks land',
          'index': 3
        }
      ]
    }, {
      'text': 'Are you easily excitable?',
      'answers':[
        {
          'text': 'Not at all, I\'m very quiet and reserved',
          'index': 5
        }, {
          'text': 'No, I\'m usually pretty calm',
          'index': 7
        }, {
          'text': 'Maybe. I get as excited as the next person',
          'index': 0
        }, {
          'text': 'Yes, it isn\'t hard to get me jumping for something',
          'index': 8
        }, {
          'text': 'Very, I\'m already excited for most of the day!',
          'index': 2
        }
      ]
    }, {
      'text': 'What\s your favorite movie genre?',
      'answers':[
        {
          'text': 'Romantic Comedy',
          'index': 8
        }, {
          'text': 'Thriller',
          'index': 3
        }, {
          'text': 'Mystery/Suspense',
          'index': 7
        }, {
          'text': 'Family Friendly',
          'index': 0
        }, {
          'text': 'Documentary',
          'index': 4
        }, {
          'text': 'Anything fast-paced',
          'index': 2
        }, {
          'text': 'Horror',
          'index': 5
        }
      ]
    }, {
      'text': 'You\'re favorite accessory or piece of clothing on this list?',
      'answers':[
        {
          'text': 'Coat or jacket',
          'index': 7
        }, {
          'text': 'Scarf',
          'index': 3
        }, {
          'text': 'Swimsuit',
          'index': 1
        }, {
          'text': 'Necklace',
          'index': 4
        }, {
          'text': 'Bow or bowtie',
          'index': 8
        }, {
          'text': 'Sunglasses',
          'index': 5
        }, {
          'text': 'Boots or gloves',
          'index': 6
        }
      ]
    }, {
      'text': 'What would your ideal vacation be?',
      'answers':[
        {
          'text': 'Somewhere with lots of parties',
          'index': 2
        }, {
          'text': 'Going camping or hiking',
          'index': 6
        }, {
          'text': 'A winter wonderland or resort',
          'index': 7
        }, {
          'text': 'A house by a lake',
          'index': 1
        }, {
          'text': 'The beach or a resort',
          'index': 3
        }, {
          'text': 'Depends on the season',
          'index': 0
        }, {
          'text': 'An amusement park',
          'index': 8
        }, {
          'text': 'Somewhere I can read in peace',
          'index': 4
        }, {
          'text': 'An island without many people',
          'index': 5
        }
      ]
    }, {
      'text': 'What would your biggest dealbreaker be in a romantic partner?',
      'answers':[
        {
          'text': 'They\'re too much of a morning person',
          'index': 5
        }, {
          'text': 'They\'re not outgoing enough',
          'index': 2
        }, {
          'text': 'They\'re too "out there" for me',
          'index': 0
        }, {
          'text': 'They don\'t intellectually challenge me',
          'index': 4
        }, {
          'text': 'They\'re too pessimistic',
          'index': 8
        }, {
          'text': 'They\'re in their house too much',
          'index': 6
        }, {
          'text': 'They\'re not exciting',
          'index': 3
        }, {
          'text': 'They dwell too much on things',
          'index': 1
        }, {
          'text': 'They\'re too clingy',
          'index': 7
        }
      ]
    }, {
      'text': 'Which of these holidays is your favorite?',
      'answers':[
        {
          'text': 'Christmas',
          'index': 7
        }, {
          'text': 'July 4th',
          'index': 3
        }, {
          'text': 'New Year\'s Eve',
          'index': 2
        }, {
          'text': 'Earth Day',
          'index': 6
        }, {
          'text': 'Valentine\'s Day',
          'index': 8
        }, {
          'text': 'Thanksgiving',
          'index': 0
        }
      ]
    }, {
      'text': 'Which of these pets would you like the most?',
      'answers':[
        {
          'text': 'Hedgehog',
          'index': 2
        }, {
          'text': 'One or multiple fish',
          'index': 1
        }, {
          'text': 'Cat',
          'index': 7
        }, {
          'text': 'Dog',
          'index': 8
        }, {
          'text': 'Snake',
          'index': 5
        }, {
          'text': 'Hamster',
          'index': 3
        }, {
          'text': 'Any kind of insect(s)',
          'index': 6
        }
      ]
    }, {
      'text': 'Which of these do you fear the most?',
      'answers':[
        {
          'text': 'Getting lost in a park at night',
          'index': 4
        }, {
          'text': 'Being in a building on fire',
          'index': 7
        }, {
          'text': 'Getting lost at sea',
          'index': 3
        }, {
          'text': 'Being embarassed or humiliated in front of many people',
          'index': 5
        }, {
          'text': 'A swarm of locusts or vicious insects',
          'index': 6
        }, {
          'text': 'Locked in a small room',
          'index': 0
        }, {
          'text': 'Being paralyzed or immobile',
          'index': 2
        }, {
          'text': 'Getting trapped in the desert',
          'index': 1
        }, {
          'text': 'Having no friends',
          'index': 8
        }
      ]
    }, {
      'text': 'What virtue(s) do you appreciate the most in others?',
      'answers':[
        {
          'text': 'Genuineness and honesty',
          'index': 0
        }, {
          'text': 'Composure and a cool attitude',
          'index': 7
        }, {
          'text': 'An optimistic view of life',
          'index': 8
        }, {
          'text': 'Intelligence and wit',
          'index': 4
        }, {
          'text': 'Going with the flow',
          'index': 1
        }, {
          'text': 'Quick thinking',
          'index': 2
        }, {
          'text': 'Caring for nature',
          'index': 6
        }, {
          'text': 'Energy and passion',
          'index': 3
        }, {
          'text': 'Being happy with solitude',
          'index': 5
        }
      ]
    }, {
      'text': 'Which of the below jobs or hobbies is your favorite?',
      'answers':[
        {
          'text': 'Teaching',
          'index': 4
        }, {
          'text': 'Cooking',
          'index': 3
        }, {
          'text': 'Gardening and/or hiking',
          'index': 6
        }, {
          'text': 'Anything with lots of traveling',
          'index': 1
        }, {
          'text': 'Being an entertainer',
          'index': 8
        }, {
          'text': 'Exercising',
          'index': 2
        }, {
          'text': 'Not sure, I have a lot',
          'index': 0
        }
      ]
    }, {
      'text': 'How do you feel about following rules?',
      'answers':[
        {
          'text': 'They\'re there for a reason, so I follow them',
          'index': 0
        }, {
          'text': 'I often disobey them on purpose',
          'index': 5
        }, {
          'text': 'As long as they don\'t get in my way, I don\'t care',
          'index': 2
        }, {
          'text': 'They annoy me, but I grudgingly follow them',
          'index': 7
        }, {
          'text': 'There\'s always a way around them',
          'index': 1
        }, {
          'text': 'I always question why they need to be followed at all',
          'index': 4
        }, {
          'text': 'I don\'t think about them',
          'index': 3
        }
      ]
    }, {
      'text': 'Which of the following emotions or moods do you feel the most?',
      'answers':[
        {
          'text': 'Joy',
          'index': 8
        }, {
          'text': 'Excitement',
          'index': 3
        }, {
          'text': 'Carefree',
          'index': 1
        }, {
          'text': 'Disgust',
          'index': 7
        }, {
          'text': 'Mischievous',
          'index': 5
        }, {
          'text': 'Thoughtful',
          'index': 4
        }, {
          'text': 'Calm',
          'index': 0
        }, {
          'text': 'Impatient',
          'index': 2
        }, {
          'text': 'Attentive',
          'index': 6
        }
      ]
    }, {
      'text': 'What\'s your favorite color?',
      'answers':[
        {
          'text': 'Pink',
          'index': 8
        }, {
          'text': 'Red',
          'index': 3
        }, {
          'text': 'Green',
          'index': 6
        }, {
          'text': 'Blue',
          'index': 1
        }, {
          'text': 'White',
          'index': 7
        }, {
          'text': 'Yellow',
          'index': 2
        }, {
          'text': 'Black',
          'index': 5
        }, {
          'text': 'Brown',
          'index': 0
        }, {
          'text': 'Purple',
          'index': 4
        }
      ]
    }, {
      'text': 'If you could have one of the below superpowers, which would it be?',
      'answers':[
        {
          'text': 'Create and control fire',
          'index': 3
        }, {
          'text': 'Breathe underwater',
          'index': 1
        }, {
          'text': 'Learn and memorize anything',
          'index': 4
        }, {
          'text': 'Copy powers or strengths from others',
          'index': 0
        }, {
          'text': 'Turn invisible',
          'index': 5
        }, {
          'text': 'Super speed',
          'index': 2
        }, {
          'text': 'Control nature',
          'index': 6
        }, {
          'text': 'Create and control ice',
          'index': 7
        }
      ]
    }, {
      'text': 'Which of the following topics or issues do you care about the most?',
      'answers':[
        {
          'text': 'Environment',
          'index': 6
        }, {
          'text': 'Education',
          'index': 4
        }, {
          'text': 'Public Safety',
          'index': 8
        }, {
          'text': 'Laws we follow',
          'index': 3
        }, {
          'text': 'International Relations',
          'index': 1
        }, {
          'text': 'It really depends',
          'index': 0
        }, {
          'text': 'Nothing, I never follow this stuff',
          'index': 7
        }
      ]
    }, {
      'text': 'What topic do you enjoy talking about most on a date?',
      'answers':[
        {
          'text': 'Just talking about our days',
          'index': 0
        }, {
          'text': 'Pick one based on something around us',
          'index': 6
        }, {
          'text': 'Whatever is in the news',
          'index': 4
        }, {
          'text': 'Any random topics that pop into our heads',
          'index': 1
        }, {
          'text': 'I wouldn\'t do much talking',
          'index': 7
        }, {
          'text': 'Lots of different topics, one after the other',
          'index': 2
        }, {
          'text': 'Dating? I barely do any, if at all',
          'index': 5
        }
      ]
    }, {
      'text': 'If you had to guess what kind of crime you\'d commit, what would it be?',
      'answers':[
        {
          'text': 'Drug use',
          'index': 6
        }, {
          'text': 'Robbery',
          'index': 5
        }, {
          'text': 'Arson',
          'index': 3
        }, {
          'text': 'Hit and Run',
          'index': 1
        }, {
          'text': 'None, I\'m a model citizen',
          'index': 8
        }
      ]
    }, {
      'text': 'You see a wallet in the street. What do you do?',
      'answers':[
        {
          'text': 'Just walk past it, it\'s not my problem',
          'index': 7
        }, {
          'text': 'Look inside for any info on who lost it',
          'index': 4
        }, {
          'text': 'Pick it up and keep walking. Finders keepers!',
          'index': 5
        }, {
          'text': 'Ask around to try and find who lost it',
          'index': 8
        }, {
          'text': 'Running around rapidly and asking people',
          'index': 2
        }, {
          'text': 'I don\'t know, it\'s a tough situation',
          'index': 0
        }
      ]
    }
  ]
});
