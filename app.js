const express = require("express");
const boddyParser = require("body-parser");
const date = require(__dirname +"/date.js");




const app = express();
app.use(express.static(__dirname + "/css"))
app.use(boddyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var tasks = [];
var workTasks = [];

app.get("/", (req, res) => {

    var day = date();

    res.render('list', { listTitle: "Stuff To do", date: day, Tasks: tasks });
})


app.get("/work", (req, res) => {

    var day = date();

    res.render('list', { listTitle: "WORK", date: day, Tasks: workTasks });

})

app.post("/", (req, res) => {
    var task = req.body.newItem;

    if (req.body.list === "WORK") {
        workTasks.push(task);
        res.redirect("/work")
    } else {
        tasks.push(task);
        res.redirect("/");
    }


})




app.listen(3000, () => {
    console.log("Hello World on PORT 3000");
})