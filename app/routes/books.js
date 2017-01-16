import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
     {id: "cat"},
     {id: "dog"},
     {id: "horse"},
     {id: "fish"},
     {id: "people"},
     {id: "bird"}
    ]
  }
});
