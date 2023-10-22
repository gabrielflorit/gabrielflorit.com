import EmberRouter from '@ember/routing/router';
import config from 'homepage/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() { });

Router.map(function() {
  this.route('the-tale-of-a-dot');
});
