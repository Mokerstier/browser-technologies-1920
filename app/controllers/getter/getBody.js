const fs = require('fs-extra')
const jsonFile = './app/controllers/data/data.json'

function checkUser(req, res, next){
    console.log(req.body.uuid)
    res.locals = req.body
    let userState
    fs.readFile(jsonFile, (err, content) => {
        if (err) return console.error(err)
        const uuId = req.body.uuid
        const contentJSON = JSON.parse(content)
        for (i = 0; i < contentJSON.data.length; i++) {
            if (contentJSON.data[i].uuid === uuId) {
                console.log('found match '+contentJSON.data[i])
                userState = contentJSON.data[i].state
                const user = contentJSON.data[i]
                res.render(`pages/q${userState}`, {
                    title: `Welkom terug${userState}`,
                    user: user
                })
            }
        }
    })

}

const getBody = (req, res, next) => {
    const { fname, lname, uuid, favdoc, anon, state, favcourse, feedback} = req.body
    const formData = { fname, lname, uuid, favdoc, anon, state, favcourse, feedback }
    let user = {}
    fs.readFile(jsonFile, (err, content) => {

        if (err) return console.log(err)

        const contentJSON = JSON.parse(content)
        

        if (contentJSON.data[0]) {
            function updateUser(uuId, key1, key2, key3, key4, key5) {
                for (i = 0; i < contentJSON.data.length; i++) {
                    if (contentJSON.data[i].uuid === uuId) {
                        contentJSON.data[i].anon = key1
                        contentJSON.data[i].state = key2
                        contentJSON.data[i].favdoc = key3
                        contentJSON.data[i].favcourse = key4
                        contentJSON.data[i].feedback = key5
                        // console.log(contentJSON.data[i]);
                        
                        res.locals.user = req.body
                        
                
                        
                    } else {
                        contentJSON.data.push(formData)
                        fs.writeFile(jsonFile, JSON.stringify(contentJSON, null, 2), err => {
                            if (err) console.log(err)
            
                        })
                        user = contentJSON.data[-1]
                        
                    }
                }
            }
            updateUser(uuid, anon, state, favdoc, favcourse, feedback)
         
            
            fs.writeFile(jsonFile, JSON.stringify(contentJSON, null, 2), err => {
                if (err) console.log(err)

            })
            

        } else {  
            user = contentJSON.data[-1]      
            contentJSON.data.push(formData)

            fs.writeFile(jsonFile, JSON.stringify(contentJSON, null, 2), err => {
                if (err) console.log(err)

            })
            
        }
    })
    res.locals.user = req.body
    console.log(req.body)
    next()
}


module.exports = { getBody, checkUser }