require('newrelic');
var express = require('express');
var app = express();
var path = require('path');
var api = require('instagram-node').instagram();

app.use(express.logger());

app.use(express.static(path.join(__dirname, 'public')));

api.use({
  client_id: process.env.INSTAGRAM_CLIENT_ID,
  client_secret: process.env.INSTAGRAM_CLIENT_SECRET
});

var userId = "1626659574";

// endpoint
app.get('/instagram', function (req, res, next) {
  var count = req.query.count || 8;
  // example: call user_media_recent to get lastest user posts
  api.user_media_recent(userId, { count: count }, function (err, medias, pagination, remaining, limit) {
    if (err) {
      next(err);
    } else {
      var i;
      var arrayLength = medias.length;
      var instagramImagesArray = [];
      for(i = 0; i < arrayLength; i++){
        //.push adds a new string url to the array. it allows the ability to individually add data.
        instagramImagesArray.push(medias[i].images.standard_resolution.url);
      }
      //transforms the data to being in json! with the help of JSON.stringify
      res.send(JSON.stringify(instagramImagesArray));
    }
  });
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});