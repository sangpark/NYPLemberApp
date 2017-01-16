import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:4200',
  ajax: function(url, method, hash) {
    hash = hash
    hash.crossDomain = true;
    hash.xhrFields = {withCredentials: true};
    return this._super(url, method, hash);
  },
  headers: {
    'API_KEY': 'rwyrwz7r3bvjlrdw',
    AccessControlAllowOrigin: 'Access-Control-Allow-Origin'
  }
});
