let express = require("express")
let firstApp = express()

firstApp.use(express.urlencoded({extended: false}))

firstApp.get('/', function(req,res){
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a clear and sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
})
firstApp.post('/answer', function(req,res){
    if (req.body.skyColor.toUpperCase() == "BLUE"){
        res.send(`
            <p>Congrats , thta is the correct answer!</p>
            <a href="/">Back to homepage</a>
        `)
    }else{
        res.send(`
            <p>Sorry, that answer is not correct.</p>
            <a href="/">Back to homepage</a>
        `)
    }
})

firstApp.get('/answer', function(req,res){
    res.send("Are you lost, there is nothing to see here")
})

firstApp.listen(3000)