var express = require('express')
var app = express()

app.get('/test',function(req,res){
  res.send('ok')

})

app.listen(8080)
console.log('Express started on port 8080');