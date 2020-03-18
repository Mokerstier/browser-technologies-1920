
function renderHome(req, res) {
    res.render('pages/home.ejs', {
        title: 'Home'
    })
}

function renderFormOpen(req, res) {
    let user = !req.query ? req.query.fname : null
    if (!user){
        res.render('pages/formintro.ejs', {
        title: 'Hallo gebruiker'        
        })
    } else res.render('pages/formintro.ejs', {
        title: `Hallo ${user}`      
    })
}

function renderFormStart(req, res) {
    res.render('pages/formstart.ejs', {
        title: 'Hallo gebruiker',
        user: req.query.fname        
        })
}

module.exports = { renderHome, renderFormOpen, renderFormStart }