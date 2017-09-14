const user_key = require('./../.env').user_key;

$(function() {
  let query;
  $('#shaqSearch').submit(function(event) {
    event.preventDefault();
    query = $('#search').val();

    setInterval(function() {
      $.ajax({
         url:`https://api.giphy.com/v1/gifs/random?tag=${query}&api_key=${user_key}`,
         type: 'GET',
         data: {
           format: 'json'
         },
         success: function(response) {
          let newURL = "url(" + response.data.image_url + ")";
          $('html').css("background-image", newURL);
          console.log(response.data.image_url);

        },
         error: function() {
           $('#errors').text("There was an error processing your request. Please try again.");
         }
       });
    }, 2500);
  });



});
