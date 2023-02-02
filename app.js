const express = require("express");
var cors = require('cors')
const port = 8083;
const app = express();

app.get("/",  cors(), (req, resp) => {
    //resp.send("working");
    resp.json([{ "STATUS": "ACTIVE" }]);
  });

app.listen(port, console.log(`Server started at port ${port}`));
