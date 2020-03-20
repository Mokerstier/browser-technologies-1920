const fs = require('fs-extra')
const path = require('path')
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

function setBody(req, res,){
    console.log(req.body)
    let user = req.body
    
    let jsonContent = `${JSON.stringify(user, null, 2)}`
    fs.mkdirp(path.join(__dirname, '..', 'data'))
    fs.writeFile(path.join(__dirname, '..', 'data/data.json'), jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
        res('/q1')
    })
    
    
}

module.exports = { setBody }