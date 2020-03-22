function renderHome(req, res) {
    res.render('pages/home.ejs', {
        title: 'Home'
    })
}

function renderFormOpen(req, res) {
   
    res.render('pages/intro.ejs', {
        title: `Hallo gebruiker`
    })
}

function renderFormStart(req, res) {
    const user = res.locals.user

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

    res.render('pages/q3.ejs', {
        title: 'Hallo gebruiker',
        user: user
        })
}
function renderFormCheck(req, res) {
    const user = res.locals.user

    res.render('pages/q4.ejs', {
        title: 'Hallo gebruiker',
            user: user
        })
}

function renderEinde(req, res) {
    const user = res.locals.user
    
    res.render('pages/einde.ejs', {
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
    renderFormCheck,
    renderEinde
}