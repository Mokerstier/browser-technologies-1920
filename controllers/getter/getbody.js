const fs = require('fs-extra')
const jsonFile = 'controllers/data/data.json'


function whoIsUser (req, res, next){
    let uuId
    
    req.params.id ?  uuId = req.params.id : uuId = req.body.uuid
    console.log(req.params.id);
    console.log(req.body.uuid);
    console.log(req.url)
    const url = req.url
    let basePath = url.substring(0,3);
    if(url === '/enquete'){
        basePath = 'q1'
    }
    
    let user
    console.log(uuId)
    fs.readFile(jsonFile, (err, content) => {
        if (err) return console.log(err)
        
        const contentJSON = JSON.parse(content)

        for( i = 0; i < contentJSON.data.length; i++){
            if(contentJSON.data[i].uuid == uuId){
                console.log(basePath)
                contentJSON.data[i].state = basePath
                user = contentJSON.data[i]
                if(basePath) user.state = basePath
                console.log("dit is de match uit WhoUser "+ user.fname)
                console.log('nu naar NEXT');

                res.locals.user = user
                console.log(user.joost)
                return next()
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
                    contentJSON.data[i] = newContentData
                    console.log(JSON.stringify(newContentData))
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