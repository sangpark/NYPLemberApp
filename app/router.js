import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', {}); //list of books
  this.route('book', {path: 'book/:id'}, function() { //book index
    this.route('author', {}, function() {}); //author index
  });
  this.route('notfound', {path: '*path'});
});

export default Router;
