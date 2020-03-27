const fs = require('fs-extra')
const jsonFile = 'controllers/data/data.json'


function whoIsUser (req, res, next){
    let uuId
    
    req.params.id ?  uuId = req.params.id : uuId = req.body.uuid
    console.log(req.params.id);
    console.log(req.body.uuid);
    
    console.log(uuId)
    fs.readFile(jsonFile, (err, content) => {
        if (err) return console.log(err)
        
        const contentJSON = JSON.parse(content)

        for( i = 0; i < contentJSON.data.length; i++){
            if(contentJSON.data[i].uuid == uuId){

                res.locals.user = contentJSON.data[i]
               
                console.log("dit is de match uit WhoUser "+ res.locals.user.lname)
                console.log('nu naar updateUser functie');
                
                return next()
            } else {
                user = null
                res.locals.user = null
            }
        } 
        next()
        
    })
    
}

function updateUser(req, res, next){

    const user = res.locals.user

    // new user logic
    if (!user){       
        const newUser = req.body

        fs.readFile(jsonFile, (err, content) => {
            if (err) return console.log(err)
            const contentJSON = JSON.parse(content)

            contentJSON.data.push(newUser)

            updateData(contentJSON)
            res.locals.user = newUser
            return next()
        })
    // existing user
    
    }else {
        
        // console.log(user.state !== 'intro')
        // if(user.state !== 'intro') return next()
        const uuId = req.body.uuid

        fs.readFile(jsonFile, (err, content) => {
            if (err) return console.log(err)
            const contentJSON = JSON.parse(content)

            for (i = 0; i < contentJSON.data.length; i++) {
                if (contentJSON.data[i].uuid === uuId) {
                    let newContentData = Object.assign(contentJSON.data[i], req.body) 
                    updateData(contentJSON)
                    res.locals.user = newContentData
                    return next()
                }
            }
            
        })
   
    }
}
function updateData(content) {

    fs.writeFile(jsonFile, JSON.stringify(content, null, 2), err => {
        if (err) console.log(err)
    })

}


module.exports = { updateUser, whoIsUser }