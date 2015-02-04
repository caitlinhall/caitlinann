require('newrelic');
var express = require('express');
var app = express();
var path = require('path');
//var api = require('instagram-node').instagram();

app.use(express.logger());

app.use(express.static(path.join(__dirname, 'public')));

/*api.use({
  client_id: process.env.INSTAGRAM_CLIENT_ID,
  client_secret: process.env.INSTAGRAM_CLIENT_SECRET
});

var userId = process.env.INSTAGRAM_USER_ID;

// endpoint
app.get('/instagram', function (req, res, next) {
  var count = req.query.count || 1;

  // example: call user_media_recent to get lastest user posts
  api.user_media_recent(userId, { count: count }, function (err, medias, pagination, remaining, limit) {
    if (err) {
      next(err);
    } else {
    	//var getImages = medias.map(medias.data);

      res.send(medias);
    }
  });
});*/

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});