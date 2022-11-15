const fs = require("fs")
const path = require("path")
const express = require("express")
const app = express()
app.use(express.urlencoded({extended: false}))
app.get("/currenttime", function(req, res) {
    res.send("<h1>" + new Date().toISOString() + " </h1>")
})
app.get("/", function(req, res) {
    res.send('<form action="/store-user" method="POST"><label>Name</label><input type="text" name="username"><button>submit</button></form>')
})
app.post("/store-user", function(req, res) {
    const uname = req.body.username
    const fpath = path.join(__dirname, "data", "user.json")
    var fdata = fs.readFileSync(fpath)
    const existingdata = JSON.parse(fdata)
    existingdata.push(uname)
    fdata = JSON.stringify(existingdata)
    fs.writeFileSync(fpath, fdata)

    res.send('<form action="/show-users" method="POST"><button>show all<button><form>')
})
app.post("/show-users", function(req, res) {
    const fpath = path.join(__dirname, "data", "user.json")
    var fdata = fs.readFileSync(fpath)
    const userlist = JSON.parse(fdata)
    let resstring = "<ul>"
    userlist.forEach(element => {
        resstring = resstring + "<li>" + element + "</li>"
    });
    resstring = resstring + "</ul>"
    res.send(resstring)
})
app.listen(3000)
