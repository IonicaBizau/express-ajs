var express = require('express');
var router = express.Router();
var getPosts = require("../controllers/posts");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/posts', function(req, res, next) {
  res.render('posts', { title: 'Posts', getPosts: getPosts });
});

module.exports = router;
