var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/count_health', function(req, res, next) {
  const params = parseInt(req.body["action"]["parameters"]["count"].value)
  result = timer(params)
  res.json({
      version: "2.0",
      resultCode: "OK",
      output: {
        count_result: result
      }
  })
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

var result =""

timer = (time) => {
  for(var i=1;t<=time;i++){
    result.concat("요시요시")
  }
  return result
}

module.exports = router;
