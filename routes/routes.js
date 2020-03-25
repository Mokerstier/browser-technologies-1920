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
        .get('/q1/:id', getter.whoIsUser, render.renderFormStart)
        .get('/q2/:id', getter.whoIsUser, render.renderFormMid)
        .get('/q3/:id', getter.whoIsUser, render.renderFormEnd)

        .post('/vraag', urlencodedParser, getter.whoIsUser, getter.updateUser, render.renderHome)
        .post('/q1', urlencodedParser, getter.whoIsUser, getter.updateUser, render.renderFormStart)
        .post('/q2', urlencodedParser, getter.whoIsUser, getter.updateUser, render.renderFormMid)
        .post('/q3', urlencodedParser, getter.whoIsUser, getter.updateUser, render.renderFormEnd)
        .post('/q4', urlencodedParser, getter.whoIsUser, getter.updateUser, render.renderFormCheck)
        .post('/einde', urlencodedParser, getter.whoIsUser, getter.updateUser, render.renderEinde)
        return router
}

exports.routes = routes()