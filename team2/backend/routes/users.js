// var express = require('express');
// var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource aaa');
// });

// module.exports = router;

// const request = require('request-promise');
// const jwt = require('jsonwebtoken');

// const payload = {
//   iss: process.env.ZOOM_API_KEY,
//   exp: ((new Date()).getTime() + 5000)
// };
// const token = jwt.sign(payload, process.env.ZOOM_API_SECRET);
// const zoomMeetingID = '79564645901';


// // const url = 'https://google.com';
// const url = 'https://api.zoom.us/v2/meetings/79564645901';
// const options = {
//   url: url,
//   method: 'GET',
//   json: true,
//   headers: {
//     'User-Agent': 'Zoom-Jwt-Request',
//     Authorization: `Bearer ${token}`,
//     'content-type': 'application/json',
//   },
//   resolveWithFullResponse: true,
//   simple: true,
// };

// const get_api = (req, res, next) => {
//   request(options, function(error, response, body) {
//   console.log(body);
//   console.log(response);
//   console.log(error);
//   res.send(body);
//   // res.send(response);
// })};

// module.exports = get_api;


// 依存ライブラリ
var express = require('express');
const jwt = require('jsonwebtoken');
const request = require('request-promise');

// 定数
const userId = ''; // Zoomアカウント(メールアドレス)
const apiKey = ''; // api key
const apiSecret = ''; // api secret

// payload
const payload = {
   iss: apiKey,                            // API Keyを指定
   exp: ((new Date()).getTime() + 3600000) // トークン有効期限 1時間
};

// token生成
const token = jwt.sign(payload, apiSecret);

// APIリクエストの設定
let options = {
   method: 'POST',
   url: 'https://api.zoom.us/v2/users/' + userId + '/meetings',
   auth: { 'bearer': token },
   headers: {
       'User-Agent': 'Zoom-api-Jwt-Request',
       'content-type': 'application/json'
   },
   json: {
       'topic': 'test meeting',
       'type': '2',
       'timezone': 'Asia/Tokyo',
       'settings': { 'use_pmi': 'false' }
   }
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


