# ReactQuestTeam2
2/20(土)までのもりもりReact開発
by T & M & C

## 最初にpullしたら
docker-compose.ymlがある場所で  
`docker-compose up -d`

### Reactコンテナ
1. `docker-compose exec react sh`  
でコンテナにイン
2. `cd client` & `npm install`

> サーバーの立ち上げは `npm run start`

### Expressコンテナ
1. `docker-compose exec api sh`  
でコンテナにイン
2. `cd backend` & `npm install`

> サーバーの立ち上げは `npm run dev`
