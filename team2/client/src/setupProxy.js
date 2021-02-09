const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/users/**',
        createProxyMiddleware({
        // /users/と打つとhttp://team2-apitest:3333/users/になる
        target: 'http://team2-api:3333',
        changeOrigin: true,
        secure: false
        })
    );
    app.use(
        '/cards/**',
        createProxyMiddleware({
        // /users/と打つとhttp://http://json-server:3838/cards/になる
        target: 'http://json-server:3838',
        changeOrigin: true,
        secure: false
        })
    );
}