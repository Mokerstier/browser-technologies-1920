function routes(){

    const render = require('../controllers/render/render')
    const getter = require('../controllers/getter/getbody')

    const express = require('express')
    const router = express.Router()

    const bodyParser = require("body-parser")
    const urlencodedParser = bodyParser.urlencoded({ extended: true })
    
    router
        .get('/', render.renderHome)
        .get('/enquete', render.renderFormOpen)
        .get('/q1', getter.checkUser, render.renderHome)
        .get('/q1/:id', getter.checkUser, render.renderFormStart)
        .get('/q2/:id', getter.checkUser, render.renderFormMid)
        .get('/q3/:id', getter.checkUser, render.renderFormEnd)

        .post('/vraag', urlencodedParser, getter.whoIsUser, getter.getBody, render.renderHome)
        .post('/q1', urlencodedParser, getter.getBody, render.renderFormStart)
        .post('/q2', urlencodedParser, getter.getBody, render.renderFormMid)
        .post('/q3', urlencodedParser, getter.getBody, render.renderFormEnd)
        .post('/q4', urlencodedParser, getter.getBody, render.renderFormCheck)
        .post('/einde', urlencodedParser, getter.getBody, render.renderEinde)
        return router
}

exports.routes = routes()