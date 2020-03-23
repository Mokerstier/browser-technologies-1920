const fs = require('fs-extra')
const jsonFile = 'controllers/data/data.json'

function checkUser(req, res, next) {

    if (req.body) {

        fs.readFile(jsonFile, (err, content) => {
            if (err) return console.error(err)
            const uuId = req.body.uuid
            const contentJSON = JSON.parse(content)
            if(!contentJSON.data.length){
                console.log('oops ik heb die user niet')
                res.locals.user = req.body
            }
            for (i = 0; i < contentJSON.data.length; i++) {

                if (contentJSON.data[i].uuid === uuId) {
                    console.log('found match ' + contentJSON.data[i])
                    const user = contentJSON.data[i]
                    // res.locals = user
                    console.log(`Checking state... ${user.state}`);
                    console.log(`Sending ${user.fname} to ${user.state}`);
                    
                    res.render(`pages/${user.state}.ejs`,{
                        title: `Welkom terug ${user.fname}`,
                        user: user
                    })
                    
                } else {
                    contentJSON.data.push(req.body)
                    fs.writeFile(jsonFile, JSON.stringify(contentJSON, null, 2), err => {
                        if (err) console.log(err)
                    })
                    res.locals.user = req.body
                }
            }
            
        })
    }
    if(req.params.id) {
        console.log(req.params.id)
        if(!req.params.id) return next()
        
        let userState
        fs.readFile(jsonFile, (err, content) => {
            if (err) return console.error(err)
            const uuId = req.params.id
            const contentJSON = JSON.parse(content)
            for (i = 0; i < contentJSON.data.length; i++) {
                if (contentJSON.data[i].uuid === uuId) {
                    console.log('found match ' + contentJSON.data[i])
                    userState = contentJSON.data[i].state
                    const user = contentJSON.data[i]
                    res.locals.user = user

                    // res.render(`pages/q${userState}.ejs`, {
                    //     title: `Welkom terug ${user.fname}`,
                    //     user: user
                    // })
                }
            }
        })
    }
    next()
}

function whoIsUser (req, res, next){
    const uuId = req.body.uuid
    let contentFromData = []
    fs.readFile(jsonFile, (err, content) => {
        if (err) return console.log(err)
        
        const contentJSON = JSON.parse(content)

        for( i = 0; i < contentJSON.data.length; i++){
            if(contentJSON.data[i].uuid == uuId){

                res.locals.user = contentJSON.data[i]
                
            }
        } 
    })
    next()
}

const getBody = (req, res, next) => {
    console.log(req.body.uuid)
    const { fname, lname, uuid, anon, state, feedback } = req.body
    
    const formData = { fname, lname, uuid,  anon, state,  feedback }
    const favdoc = []
    const favcourse = []
    
    let user = {}
    fs.readFile(jsonFile, (err, content) => {

        if (err) return console.log(err)

        const contentJSON = JSON.parse(content)
        
        if (contentJSON.data.length) {
            function updateUser(uuId) {
                
                for (i = 0; i < contentJSON.data.length; i++) {
                    console.log(contentJSON.data[i])
                    if (contentJSON.data[i].uuid === uuId) {
                        console.log(`found a match ${contentJSON.data[i]}`);
                        for(i = 0; i> req.body.favdoc; i++){
                            formdata.favdoc[i].push
                        }
                        contentJSON.data[i] = formData
                        contentJSON.data[i].push(favdoc, favcourse)
                        console.log(contentJSON.data[i])
                        
                        fs.writeFile(jsonFile, JSON.stringify(contentJSON, null, 2), err => {
                            if (err) console.log(err)
            
                        })
                       
                        res.locals.user = contentJSON.data[i]
                        console.log(user)
                            // res.render(`pages/${user.state}.ejs`,{
                            //     title: `Welkom terug ${user.fname}`,
                            //     user: user
                            // })
                        

                   
                    }
                }
            } 
            updateUser(uuid)
        } else {
            console.log('deze gebruiker ken ik niet')
            contentJSON.data.push(formData)
            console.log('Ik push de gebruiker in de data-set ')
            console.log(formData)
            res.locals.user = formData
            fs.writeFile(jsonFile, JSON.stringify(contentJSON, null, 2), err => {
                if (err) console.log(err)

            })
            user = contentJSON.data[-1]

        
           


           
        }
    })
    
    res.locals.user = user
    console.log(user)
    next()
}


module.exports = { getBody, whoIsUser, checkUser }