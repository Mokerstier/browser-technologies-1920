const getter = require('../getter/getbody')

function renderHome(req, res) {
    res.render('pages/home.ejs', {
        title: 'Home'
    })
}

function renderFormOpen(req, res) {
    console.log(res.locals.user)
    const user = res.locals.user
    if (!user){
        res.render('pages/formintro.ejs', {
        title: `Hallo gebruiker`        
        })
    } else res.render('pages/formintro.ejs', {
        title: `Hallo ${user.fname}`      
    })
}

function renderFormStart(req, res) {
    console.log('hallo')

    res.render('pages/formstart.ejs', {
        title: 'Hallo gebruiker',
               
        })
}

module.exports = { renderHome, renderFormOpen, renderFormStart }