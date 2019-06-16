const express = require('express')
const app = express()
const path = require('path')

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("../Friend-Finder/app/routing/apiRoutes.js")(app)




app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
  });