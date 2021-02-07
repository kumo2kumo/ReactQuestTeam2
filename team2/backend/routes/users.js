// var express = require('express');
// var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource aaa');
// });

// module.exports = router;

const request = require('request-promise');
// const url = 'https://google.com';
const url = 'https://api.zoom.us/v2/meetings/{72923573760}'
const options = {
  url: url,
  method: 'GET',
  json: true,
  headers: {
    'User-Agent': 'Zoom-Jwt-Request',
    'content-type': 'application/json'
  },
  resolveWithFullResponse: true,
  simple: true,
};

const get_api = (req, res, next) => {
  request(options, function(error, response, body) {
  console.log(body);
  console.log(response);
  console.log(error);
  res.send(body);
  // res.send(response);
})};

module.exports = get_api;

