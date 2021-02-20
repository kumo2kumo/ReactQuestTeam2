// 依存ライブラリ
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const request = require('request-promise');



router.get('/', function(req, res, next) {
  const meetingId = req.query.id

  // 定数
  const userId = ''; // Zoomアカウント(メールアドレス)
  // const meetingId = '74867845461';
  const apiKey = ''; // api key
  const apiSecret = ''; // api secret
  
  // payload
  const payload = {
     iss: apiKey,                            // API Keyを指定
     exp: ((new Date()).getTime() + 3600000) // トークン有効期限 1時間
  };
  
  // token生成
  const token = jwt.sign(payload, apiSecret);
  
  // Meeting情報のGETリクエスト
  let getOptions = {
    method: 'GET',
    url: 'https://api.zoom.us/v2/meetings/' + meetingId,
    auth: { 'bearer': token },
    headers: {
        'User-Agent': 'Zoom-api-Jwt-Request',
        'content-type': 'application/json'
    }
  };

    request(getOptions, function(error, response, body) {
    console.log(body);
    console.log(response);
    console.log(error);
    res.send(body);
    })
});   


module.exports = router;
// 74867845461
// 77847313094




// POSTによるMeeting情報の作成 (今回は未使用)
// let postOptions = {
//    method: 'POST',
//    url: 'https://api.zoom.us/v2/users/' + userId + '/meetings',
//    auth: { 'bearer': token },
//    headers: {
//        'User-Agent': 'Zoom-api-Jwt-Request',
//        'content-type': 'application/json'
//    },
//    json: {
//        'topic': 'test meeting',
//        'type': '2',
//        'timezone': 'Asia/Tokyo',
//        'settings': { 'use_pmi': 'false' }
//    }
// }:
