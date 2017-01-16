import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return $.get(`http://api.repo.nypl.org/api/v1/items/search?q=${params.id}&publicDomainOnly=true`);
debugger;
  }
});
