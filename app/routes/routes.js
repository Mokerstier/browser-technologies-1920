function routes(){

    const render = require('../controllers/render/render')
    const getter = require('../controllers/getter/getBody.js')
    const express = require('express')
    const router = express.Router()

    const bodyParser = require("body-parser")
    const urlencodedParser = bodyParser.urlencoded({ extended: true })
    
    router
        .get('/', render.renderHome)
        .get('/enquete', getter.getBody, render.renderFormOpen)
        .get('/formstart', getter.getBody, render.renderFormStart)
    
        return router
}

exports.routes = routes()