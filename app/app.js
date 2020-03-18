const express = require('express')
const bodyParser = require("body-parser");

const { routes } = require("./routes/routes");

const PORT = 8000
const app = express()

app
    .set('view engine', 'ejs')
    .set('views', 'views')

    .use(express.static(__dirname + '/static'))

    .use('/', routes)

app.listen(process.env.PORT || PORT, function() {
    console.log(`Application started on port: ${PORT}`);
    console.log(`open the page -> http://localhost:${PORT}`)
});