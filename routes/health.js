var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/count_health', function(req, res, next) {
  res.json({
    version: "2.0",
    resultCode: "OK",
    output: {
      count_result: "오늘"
    }
});
})

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
