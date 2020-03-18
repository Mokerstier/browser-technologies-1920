const fs = require('fs')

function getBody(req, res , next){
    console.log(req.query)
    let user = req.query.fname
    next(user)
}

module.exports = { getBody }