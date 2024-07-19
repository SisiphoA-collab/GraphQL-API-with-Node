const express = require('express');
const expressGraphQl = require('express-graphql');
const port = 4800;
const app = express();
const schema = require('./schema/schema','utf-8');

 app.use('/graphql',expressGraphQl({
    schema,
    graphql:true
 }))

 app.listen(port, () => {
     console.log('listing to port s{port}')
 })





 /*{
  "dependencies": {
    "apollo-server": "^3.13.0",
    "express": "^4.19.2",
    "firebase": "^10.12.3",
    "firebase-admin": "^12.2.0",
    "graphql": "^16.9.0"
  },
  "name": "apiwithgraphql",
  "version": "1.0.0",
  "description": "this is api with graphql",
  "main": "index.js",
  "scripts": {
    "test": "test",
    "start": "node app.js"
  },
  "keywords": [
    "nodejs",
    "graphql"
  ],
  "author": "developersisiphoandries",
  "license": "ISC"
}*/