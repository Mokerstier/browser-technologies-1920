const getter = require('../getter/getbody')

function renderHome(req, res) {
    res.render('pages/home.ejs', {
        title: 'Home'
    })
}

function renderFormOpen(req, res) {
   
    res.render('pages/intro.ejs', {
        title: `Hallo gebruiker`
    })
    // console.log(res.locals.user)
    // const user = res.locals.user
    // if (!user){
    //     res.render('pages/formintro.ejs', {
    //     title: `Hallo gebruiker`        
    //     })
    // } else res.render('pages/formintro.ejs', {
    //     title: `Hallo ${user.fname}`      
    // })
}

function renderFormStart(req, res) {
    const user = res.locals.user
    console.log(`hello ${user.fname}`)
    res.render('pages/q1.ejs', {
        title: 'Hallo gebruiker',
        user: user
               
        })
}
function renderFormMid(req, res) {
    const user = res.locals.user
    

    res.render('pages/q2.ejs', {
        title: 'Hallo gebruiker',
        user: user   
        })
}
function renderFormEnd(req, res) {
    const user = res.locals.user
    console.log(res.locals)

    res.render('pages/q3.ejs', {
        title: 'Hallo gebruiker',
        user: user
        })
}
function renderFormCheck(req, res) {
    const user = res.locals.user
    console.log(res.locals)

    res.render('pages/outro.ejs', {
        title: 'Hallo gebruiker',
            user: user
        })
}

module.exports = { 
    renderHome, 
    renderFormOpen, 
    renderFormStart, 
    renderFormMid, 
    renderFormEnd, 
    renderFormCheck 
}