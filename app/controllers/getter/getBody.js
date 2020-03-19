const fs = require('fs-extra')

function getBody(req, res, next){
    fs.readFile('././data/data.json', (err, data) => {
        if (err)
            throw err;
        // parsedJSON = JSON.parse(data)
        getBodyData = JSON.parse(data)
        console.log(getBodyData.fname)
        res.locals.user = getBodyData
        next()
    })    
    
}

function userEnquete(req, res){
    console.log(getBody)
    res.render('pages/formintro.ejs', {
        user: getBody,
        title: `Hallo ${getBody.fname}`  
    })
}

module.exports = { getBody, userEnquete }