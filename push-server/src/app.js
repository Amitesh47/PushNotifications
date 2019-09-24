const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const subscriptionHandler = require('./subscriptionHandler')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');

const app = express();

// var corsOptions = {
//   origin: 'http://localhost:8080',
// }

// // cors.origin = true;
// app.options('*', cors()) 


app.use(
  cors({
    // origin(origin, cb) {
    //   const whitelist = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : [];
    //   cb(null, whitelist.includes(origin));
    // },
    credentials: true, 
    origin: "https://localhost:3000",
    methods: ['GET','POST'],
    allowedHeaders: ['content-type','sec-fetch-mode','origin']
  })
);

// app.use(cors({origin: 'https://localhost:3000'}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/subscription", subscriptionHandler.handlePushNotificationSubscription);
app.get("/subscription/:id", subscriptionHandler.sendPushNotification);

module.exports = app;
