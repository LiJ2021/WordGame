const express = require('express')
//instantiation of the express server 
const bodyParser = require ('body-parser')
const app = express()

//sets the path to the views folder
app.set('views', './views')
//view engine is pug
app.set('view engine', 'pug')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//directing to use static folders with these names
app.use(express.static('images'))
app.use(express.static('styles'))
app.use(express.static('scripts'))

app.use("/", (req, res, next) => {
    console.log("Accessing Server")
    //area for possible login to game for future use with a database if we want to keep score and player info
    next()
})
app.get("/", (req, res) => {
    //render displays the webpage/file associated with the name - index.pug
    res.render('index')
})

app.get("/play", (req,res)=> {
    res.render('play')
})

//I want the correct word that the user submitted to display on the play page
// app.post("/play", (req, res) =>{
//     // const form = req.body
//     // console.log(req.body) 
//     // res.render('play', {
//     //     computerWord: computerWord,
//     //     userword: form.userword })
//         res.render('play')
    
// })

app.get("/win/:points/:pointsPossible", (req, res) => {
    // let userPoints = {}
    // let pointsPossible = {}
    let userPoints = req.params.points
    let pointsPossible = req.params.pointsPossible
    console.log("testing")
    //render can display the information contained in the 'get' to the webpage/file associated with the name if programmed to do so-
    res.render('win', {userPoints : userPoints, pointsPossible : pointsPossible})
    //render displays the webpage/file associated with the name -
    // res.render('win', {points : points, pointsPossible : pointsPossible)
    })
app.get("/lose/:points/:pointsPossible", (req, res) => {
    let userPoints = req.params.points
    let pointsPossible = req.params.pointsPossible
    console.log("testing")
    //render can display the information contained in the 'get' to the webpage/file associated with the name if programmed to do so-
    res.render('lose', {userPoints : userPoints, pointsPossible : pointsPossible})
})

app.listen(3333)