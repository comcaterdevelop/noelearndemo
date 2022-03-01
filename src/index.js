const path = require("path");
const express = require("express");
const app = express();

const staticpath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");

console.log(staticpath);
app.set("view engine", "hbs");
app.set("views", templatePath);
// app.use(express.static(staticpath));
app.get("", (req, res) =>{
    res.render('index');
});
app.get('/', (req, res) => {
    res.send("Express Js Learning");
});

app.listen(8000, ()=>{
    console.log("listening port 8000");
}
);