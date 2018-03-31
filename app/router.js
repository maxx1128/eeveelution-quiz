import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('quiz', function() {
    this.route('question', { path: ':question' });
  });
  this.route('results', function() {
    this.route('pokemon', { path: ':pokemon' });
  });
});

export default Router;
