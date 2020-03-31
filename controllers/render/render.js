function renderHome(req, res) {
    const uuid = req.body.uuid
    const user = res.locals.user
    
    if (!uuid){
        return res.render('pages/home.ejs', {
            title: 'Home'
        })
        
    }
    
    if(user){
        return res.render(`pages/${user.state}.ejs`, {
            title: 'Home',
            user: user
        })

    }else {
        return res.render('pages/intro.ejs', {
            title: `Hallo gebruiker`,

        })
    }
    
}
function renderNext(req, res){
    let user = res.locals.user
    console.log('de state: '+ req.locals.user.state)
    console.log('hallo '+user);
    res.render('partials/q3.ejs', {
        user: user
    })
    
}
function renderFormOpen(req, res) {
    let user = res.locals.user
    console.log(user)
    res.render('pages/intro.ejs', {
        title: `Hallo gebruiker`,
        user: user
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
        user: user  ,

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
    renderEinde,
    renderNext
}