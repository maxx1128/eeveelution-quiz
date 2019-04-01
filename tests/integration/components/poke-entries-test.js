import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const ENTRIES_STUB = [
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  },
  {
    "language": {
      "name": "en",
      "url": "https://pokeapi.co/api/v2/language/9/"
    },
    "version": {
      "name": "name here"
    }
  }
]

module('Integration | Component | poke-entries', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('rawEntries', ENTRIES_STUB);

    await render(hbs`{{poke-entries rawEntries=rawEntries}}`);

    assert.dom().isVisible();
  });
});
