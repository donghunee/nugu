var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/count_health', function(req, res, next) {
  res.json({
    data: req.body
  })
});

router.get('/', function(req, res, next) {
  
    res.render('index', { title: 'Express' });
  
});

router.get('/health', function(req, res, next) {
  res.status(200).send('ok')

});

router.post('/start', function(req, res, next) {
  res.json({
    data: req.body
  })
  

});

module.exports = router;
