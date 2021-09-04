const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const sqlite3 = require("sqlite3").verbose()
const Sequelize = require("sequelize")
const app = express()
const path = require("path")


app.use(express.static(path.join(__dirname,"public")))
app.engine("handlebars",handlebars({defaultLayout: 'main'}))
app.set("view engine",handlebars)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/",(req,res) => {
  res.render("home.handlebars")
})

const PORT = process.env.PORT
app.listen(PORT)