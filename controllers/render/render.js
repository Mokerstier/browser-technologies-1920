function renderHome(req, res) {
    const user = req.body
    console.log('this is '+req.body.uuid)
    if (!user){
        res.render('pages/home.ejs', {
            title: 'Home'
        })
    }
    if(user.state){
        res.render(`pages/${user.state}.ejs`, {
            title: 'Home',
            user: user
        })
    }else {
        res.render('pages/intro.ejs', {
            title: `Hallo gebruiker`,
            user: user
        })
    }
    
}

function renderFormOpen(req, res) {
    const user = res.locals.user
    console.log(user)
    res.render('pages/intro.ejs', {
        title: `Hallo gebruiker`,
        user: user
    })
}

function renderFormStart(req, res) {
    const user = req.body
    console.log(`yoyoyo ${user.uuid}`)
    res.render('pages/q1.ejs', {
        title: 'Hallo gebruiker',
        user: user
               
        })
}
function renderFormMid(req, res) {
    const user = req.body
    
    console.log(user)
    res.render('pages/q2.ejs', {
        title: 'Hallo gebruiker',
        user: user  ,

        })
}
function renderFormEnd(req, res) {
    const user = req.body

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