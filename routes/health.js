var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });

});

router.post('/timer_health', function(req, res, next) {
  const params_min = parseInt(req.body["action"]["parameters"]["min"].value)
  const params_sec = parseInt(req.body["action"]["parameters"]["time"].value)
  let time = sum_time(params_min,params_sec)
  result = timer(time)
  res.json({
      version: "2.0",
      resultCode: "OK",
      output: {
        timer_result: result
      }
  })
})

router.post('/count_health', function(req, res, next) {
  const params_count = parseInt(req.body["action"]["parameters"]["count"].value)

  result = count(params_count)
  res.json({
      version: "2.0",
      resultCode: "OK",
      output: {
        count_result: result
      }
  })
})

router.post('/count_health_fast', function(req, res, next) {
  const params_count = parseInt(req.body["action"]["parameters"]["fast_count"].value)
  console.log(params_count)
  result = count_fast(params_count)
  console.log(result)
  res.json({
      version: "2.0",
      resultCode: "OK",
      output: {
        count_fast_result: result
      }
  })
})

router.get('/health', function(req, res, next) {
  res.status(200).send('ok')

});

router.post('/start', function(req, res, next) {
  const params = req.body.version
  res.json({
    data: req.body
  })

});



const timer = (time) => {
  var result =""
  for(var i=1;i<=time;i++){
    result += i
    result += '<pause time="1000"/>'
  }
  return result
}

const count_fast = (count) => {
  var result =""
  for(var i=1;i<=count;i++){
    ck = i.toString()
    ck_digit = ck.length
    if(ck_digit==1){
      if(ck[0]==1){
        result +="하나"
      }else if(ck[0]==2){
        result +="둘"
      }else if(ck[0]==3){
        result +="셋"
      }else if(ck[0]==4){
        result +="넷"
      }else{
        result += i
      }
    }else if(ck_digit==2){
      if(ck[0]==2){
        if(ck[1]==1){
          result +="스물하나"
        }else if(ck[1]==2){
          result +="스물둘"
        }else if(ck[1]==3){
          result +="스물셋"
        }else if(ck[1]==4){
          result +="스물넷"
        }else if(ck[1]==0){
          result +="스물"
        } else{
          result += i
        }        
      }else{
        if(ck[1]==1){
          result += (ck[0] +0)    
          result +="하나"
        }else if(ck[1]==2){
          result += (ck[0] +0)                
          result +="둘"
        }else if(ck[1]==3){
          result += (ck[0] +0)                
          result +="셋"
        }else if(ck[1]==4){
          result += (ck[0] +0)                
          result +="넷"
        }else{
          result += i
        }
      }
    }else{
        result += "백"
    }
    result += '<pause time="900"/>'
  }
  return result
}

const count = (count) => {
  var result =""
  for(var i=1;i<=count;i++){
    ck = i.toString()
    ck_digit = ck.length
    if(ck_digit==1){
      if(ck[0]==1){
        result +="하나"
      }else if(ck[0]==2){
        result +="둘"
      }else if(ck[0]==3){
        result +="셋"
      }else if(ck[0]==4){
        result +="넷"
      }else{
        result += i
      }
    }else if(ck_digit==2){
      if(ck[0]==2){
        if(ck[1]==1){
          result +="스물하나"
        }else if(ck[1]==2){
          result +="스물둘"
        }else if(ck[1]==3){
          result +="스물셋"
        }else if(ck[1]==4){
          result +="스물넷"
        }else if(ck[1]==0){
          result +="스물"
        } else{
          result += i
        }        
      }else{
        if(ck[1]==1){
          result += (ck[0] +0)    
          result +="하나"
        }else if(ck[1]==2){
          result += (ck[0] +0)                
          result +="둘"
        }else if(ck[1]==3){
          result += (ck[0] +0)                
          result +="셋"
        }else if(ck[1]==4){
          result += (ck[0] +0)                
          result +="넷"
        }else{
          result += i
        }
      }
    }else{
        result += "백"
    }
    result += '<pause time="1500"/>'
  }
  return result
}

const sum_time =(min,sec) => {
  time = 0
  if(min !=0){
    time += 60*min
    if(sec !=0){
      time += sec
    }
  }else{
    time += sec
  }
  return time
}

module.exports = router;
