var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("root area")
  // res.render('index', { title: 'Express' });
  let x = process.env.DATABASE_URL || " none "
  console.log(x)
});
router.post('/', function(req, res, next) {
  res.send("root area post request")
});
router.get('/free', function(req, res, next) {
  res.send("free area")
});
router.get('/restricted', function(req, res, next) {
  res.send("restricted area")
});
router.post('/free', function(req, res, next) {
  res.send("free area post request")
});
router.post('/restricted', function(req, res, next) {
  res.send("restricted area post request")
});

router.post('/weather/temperature/op/query',(req, res, next) => {
        res.send("1/weather/temperature/op/query")
    });

router.post('/weather/relativeHumidity/op/query',(req, res, next) => {
        res.send("2/weather/relativeHumidity/op/query")
    });

router.post('/weather/weatherConditions/op/query',(req, res, next) => {
        res.send("3/weather/weatherConditions/op/query")
    });
module.exports = router;
