const express = require("express");
var cors = require('cors')
const port = 8083;
const app = express();

app.get("/",  cors(), (req, resp) => {
    //resp.send("working");
    resp.json([{ "Name": "AtishubhV", "Age": "35", "Game": "Footballss" }, { "Name": "Mark", "Age": "32", "Game": "VolleyBall"}]);
  });

app.listen(port, console.log(`Server started at port ${port}`));
