var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/count_health', function(req, res, next) {
  const params = req.body["action"]

  res.json({
    version: "2.0",
    resultCode: "OK",
    output: {
      count_result: params
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
  const params = req.body.version
  res.json({
    data: req.body
  })

});

module.exports = router;
