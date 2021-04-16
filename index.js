const express = require("express");
const app = express();
require("./main/conn");
const port = process.env.PORT || 8000;
const path = require("path");
const cros = require("cors");
const public = path.join(__dirname, "./public");
const findmodel = require("./main/rest");

app.use(cros())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(public));
app.set("view engine", "hbs");


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/myproject", (req, res) => {
    res.render("myproject")
})

app.post("/register", async(req, res) => {
    try {
        const insert = new findmodel({
            name: req.body.name,
            email: req.body.email,
            textarea: req.body.textarea,
        })
        const result = await insert.save();
        res.status(201).render("index");
        console.log(result);
    } catch (error) {
        res.status(401).render("404");
    }
})


app.listen(port, () => {
    console.log(`listing port on ${port}`)
})