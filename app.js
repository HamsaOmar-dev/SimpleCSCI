const express = require("express");
const https = require("http");

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/signup.html", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
})

app.post("/signup.html", (req, res) => {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    console.log(req.body);
    res.write("<h1>Thanks for signing up!!</h1>");
    res.send();
})


app.listen(4000, () => {
  console.log("Port is working");
});
