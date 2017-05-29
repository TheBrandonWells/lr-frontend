const fakeData = require('./fakeData.js');
const jsonServer = require('json-server');
const fs = require('fs');
const server = jsonServer.create();
const data = fakeData();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');

fs.writeFileSync('db.json', JSON.stringify(data));

server.use(middlewares);
server.use(router);
server.listen(3000);
