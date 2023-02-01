const express = require("express");
var cors = require('cors')
const port = 80;
const app = express();
app.get("/products",  cors(), (req, resp) => {
    //resp.send("working");
    resp.json([{ "Name": "Bats", "Age": "17", "Game": "Cricket" }, { "Name": "Sticks", "Age": "2", "Game": "Hockey"},  { "Name": "Bicycle", "Age": "12", "Game": "Racing"}]);
  });
app.get("/",  cors(), (req, resp) => {
    //resp.send("working");
    resp.json([{ "Name": "AtishubhV", "Age": "35", "Game": "Footballss" }, { "Name": "Mark", "Age": "32", "Game": "VolleyBall"}]);
  });

app.listen(port, console.log(`Server started at port ${port}`));
