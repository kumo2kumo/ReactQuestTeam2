

// // 依存ライブラリ
// var express = require('express');
// const jwt = require('jsonwebtoken');
// const request = require('request-promise');

// // 定数
// const userId = 'masanori.takahashi.0117@gmail.com'; // Zoomアカウント(メールアドレス)
// const apiKey = 'nJTtqXAKTFWW5Ttx85_Lvw'; // api key
// const apiSecret = 'vtA5N3rtvbiQxQyTtMsMZapDkWLG1QVPvj67'; // api secret

// // payload
// const payload = {
//    iss: apiKey,                            // API Keyを指定
//    exp: ((new Date()).getTime() + 3600000) // トークン有効期限 1時間
// };

// // token生成
// const token = jwt.sign(payload, apiSecret);

// // APIリクエストの設定
// let options = {
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


