var _ = require('lodash');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var posts = [
  {
    id: 1,
    title: 'Hello',
    body: 'Lorem ipsum dolor sit amet'
  },
  {
    id: 2,
    title: 'World',
    body: 'Lorem ipsum dolor sit amet'
  },
  {
    id: 3,
    title: 'Lorem',
    body: 'Lorem ipsum dolor sit amet'
  }
];

app.use(express.static(__dirname));

app.get('/api/posts', function (req, res) {
  res.json({ posts: posts });
});

app.get('/api/posts/:id', function (req, res) {
  var post = _(posts).findWhere({ id: +req.params.id });
  res.json({ post: post });
});

app.listen(port);

console.log('Listening on ' + port);
