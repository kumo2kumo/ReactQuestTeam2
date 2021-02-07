// var express = require('express');
// var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource aaa');
// });

// module.exports = router;

const request = require('request-promise');
const jwt = require('jsonwebtoken');

const payload = {
  iss: process.env.ZOOM_API_KEY,
  exp: ((new Date()).getTime() + 5000)
};
const token = jwt.sign(payload, process.env.ZOOM_API_SECRET);
const zoomMeetingID = '79564645901';


// const url = 'https://google.com';
const url = 'https://api.zoom.us/v2/meetings/79564645901';
const options = {
  url: url,
  method: 'GET',
  json: true,
  headers: {
    'User-Agent': 'Zoom-Jwt-Request',
    Authorization: `Bearer ${token}`,
    'content-type': 'application/json',
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

