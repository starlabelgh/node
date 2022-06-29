let http = require("http")

let firstApp = http.createServer(function(req,res){
    if (req.url == "/"){
        res.end("Hello, welcome to our website.")
    }

    if (req.url == "/about"){
        res.end("Your are on our website about page")
    }

    res.end("page csnnot be found.")
})
firstApp.listen(3000)