const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

var db

MongoClient.connect('mongodb://<jwolfe890>:<Hytrax890>@ds125068.mlab.com:25068/1stdb', (err, client) => {
    console.log("hello")
    if (err) return console.log(err)
    db = client.db('1stdb') // whatever your database name is
    app.listen(3000, () => {
      console.log('listening on 3000')
    })
  })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)
    
        console.log('saved to database')
        res.redirect('/')
      })
  })

app.listen(3000, function() {
    console.log('listening on 3000')
  })


