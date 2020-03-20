function routes(){

    const render = require('../controllers/render/render')
    const setter = require('../controllers/setter/setbody')
    const getter = require('../controllers/getter/getbody')

    const express = require('express')
    const router = express.Router()

    const bodyParser = require("body-parser")
    const urlencodedParser = bodyParser.urlencoded({ extended: true })
    
    router
        .get('/', render.renderHome)
        .get('/enquete', render.renderFormOpen)
        .get('/q1', render.renderFormStart)
    
        .post('/q1', urlencodedParser, getter.getBody, render.renderFormStart)
        .post('/q2', urlencodedParser, getter.getBody, render.renderFormMid)
        .post('/q3', urlencodedParser, getter.getBody, render.renderFormEnd)
        .post('/outro', urlencodedParser, getter.getBody, render.renderFormCheck)
        return router
}

exports.routes = routes()