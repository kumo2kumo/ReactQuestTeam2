##react
コンテナ入って、docker-compose exec react sh
1, npx create-react-app client
2,cd client + package.jsonに
"proxy": "http://team2-api:3333"
追記
3,npm install
4,npm install axios 

##api
コンテナ入って、docker-compose exec api sh
1,express backend
2,npn install
3,npm install nodemon --save-dev
+     "dev": "nodemon ./bin/www"
2,.gitignoreコピペ
4,wwwのport書き換え3333