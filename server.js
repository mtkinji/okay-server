const mongoose = require('mongoose');
const express = require('express')

const app = express()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

mongoose.connect('mongodb+srv://user123:user123@camp-four-ikqzz.mongodb.net/okay?retryWrites=true', { useNewUrlParser: true } );
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB Atlas')
});