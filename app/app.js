const express = require('express')
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({ extended: true })

const { routes } = require("./routes/routes")

const app = express()

require('dotenv').config()

const PORT = process.env.PORT

app
    .set('view engine', 'ejs')
    .set('views', 'views')

    .use(urlencodedParser)
    .use(express.static(__dirname + '/static'))

    .use('/', routes)

    .use((req, res, next) => {
        res.status(404).render("pages/404.ejs", {
            title: "Pagina bestaat niet"
        })
    })

app.listen(PORT || 8000, function () {
    console.log(`Application started on port: ${PORT}`)
    console.log(`open the page -> http://localhost:${PORT}`)
});
