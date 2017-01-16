import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let url = "http://api.repo.nypl.org/api/v1/items/search";
    return $.ajax({
      url: url,
      type: "GET",
      dataType: "jsonp",
      data: {
        q: params.id,
        publicDomainOnly: true
      },
      // crossDomain: true,
      username: "spark",
      password: "password",
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(request) {
        // request.setRequestHeader("Access-Control-Request-Headers", "Origin, X-Requested-With, Content-Type, Accept Access-Control-Allow-Origin Authorization");
        // request.setRequestHeader("Access-Control-Request-Origin", "*");
        // request.setRequestHeader("Authorization", 'Token token="7xndqidc8meg745l"');
      },
      headers: {
        'Access-Control-Allow-Origin': "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Authorization": 'Token token="7xndqidc8meg745l"',
      },
      success: function(response){
        alert('succeeded!');
        console.log(response);
        alert(response);
      },
      failure: function(message){
        alert("failed");
        console.log(message);
        alert(message);
      }
    }).then(function(data) {
      console.log("Data is " + data);
    });
    // // res.setHeader('Access-Control-Allow-Origin', '*');
    // return $.get(`http://api.repo.nypl.org/api/v1/items/search?q=${params.id}&publicDomainOnly=true`)
    //   .then(rawBooks => {
    //     debugger;
    //   });
    // debugger;
  }
});
