var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/count_health', function(req, res, next) {
  res.json({
    data: req.body
  })
});

router.get('/', function(req, res, next) {
  
    res.render('index', { title: 'Express' });
  
});


router.get('/start', function(req, res, next) {
  res.json({
    data: req.body
  })
  

});

module.exports = router;
