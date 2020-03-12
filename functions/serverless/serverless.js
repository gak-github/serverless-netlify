// details: https://markus.oberlehner.net/blog/implementing-an-authentication-flow-with-passport-and-netlify-functions/

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const serverless = require('serverless-http')

const { COOKIE_SECURE, ENDPOINT } = require('./utils/config')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.get(`${ENDPOINT}/serverless`, (req, res) => {
  res.json({name: "Ashok"})
});

module.exports.handler = serverless(app)
