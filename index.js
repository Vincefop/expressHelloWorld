var express = require('express')
var app = express()
const port =  process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Hello World! Deploiement réussi')
})


app.listen(port, function () {
  console.log('Listening on port 3000...')
})
