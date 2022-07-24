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

let randomWordArray =['caph', 'chap', 'chat', 'hath', 'haut', 'pact', 'path', 'phat', 'phut', 'putz', 'tach', 'caput', 'chapt', 'hatch', 'hutch', 'patch', 'hutzpa', 'chutzpa', 'hutzpah']


app.use("/", (req, res, next) => {
    console.log("Accessing Server")
    next()
})
app.get("/", (req, res) => {
    //render displays the webpage/file associated with the name - index.pug
    res.render('index')
})

// app.use("/play/:userword", (req, res, next) =>{
//     let userword = req.params.userword
//     console.log(userword)
//     //loop trhough the array to see if the word matches
//     randomWordArray.forEach(word => {
//     if (word === userword){
//         console.log(userword + " is a word!! ")
//         next()
//     }
//   })
// })

// app.get("/play/:userword", (req, res) =>{
//     res.send("YOU found a match!!! YOU succesfully traversed the array and made it here!")
//    // res.send(`${userword}` + " is a word!! ")
// })

app.get("/play", (req,res)=> {
res.render('play')
})

app.post("/submitUsersWord", (req, res) =>{
    console.log(req.body)
})

app.get("/win", (req, res) => {
    // let userPoints = {}
    // let pointsPossible = {}
    //render displays the webpage/file associated with the name -
    res.render('win')
    })
app.get("/lose", (req, res) => {
    // let userPoints = {}
    // let pointsPossible = {}
    //render can display the information contained in the get to the webpage/file associated with the name if programmed to do so-
    res.render('lose')
})


app.listen(3333)