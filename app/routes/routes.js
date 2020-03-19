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
        .get('/enquete', getter.getBody, render.renderFormOpen)
        .get('/formstart', render.renderFormStart)
    
        .post('/enquete', urlencodedParser, setter.setBody, render.renderFormStart)
        
        
        return router
}

exports.routes = routes()