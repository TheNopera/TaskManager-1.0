const express = require("express");
const boddyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname + "/css"))
app.use(boddyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var tasks = [];

app.get("/", (req, res) => {
    var today = new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var day = today.toLocaleDateString("pt-BR", options);


    res.render('list', { kindOfDay: day, Tasks: tasks});
})

app.post("/", (req,res)=>{
     var task = req.body.newItem;
    
     tasks.push(task);
    

    res.redirect("/");
})




app.listen(3000, () => {
    console.log("Hello World on PORT 3000");
})