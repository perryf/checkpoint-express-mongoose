const mongoose = require('mongoose')

var AuthorSchema = new mongoose.Schema({
  name: String,
  publisher: String,
  age: Number,
  active: Boolean
})

var Author = mongoose.model('Author', AuthorSchema)

mongoose.connect('mongodb://localhost/authors_db', {useMongoClient: true})

Author.remove({}).then(() => {
  console.log('authors removed, loading seeds')
})

var patt = new Author({
  name: 'Patt',
  publisher: 'Penguin',
  age: 62,
  active: true
})

var gertrude = new Author({
  name: 'Gertrude',
  publisher: 'Independent',
  age: 11,
  active: true
})

var hogan = new Author({
  name: 'Hogan',
  publisher: 'Hogans Books',
  age: 11352,
  active: true
})

patt.save((err, author) => {
  if (err){
    console.log(err)
  } else {
    console.log(author)
  }
})
gertrude.save((err, author) => {
  if (err){
    console.log(err)
  } else {
    console.log(author)
  }
})
hogan.save((err, author) => {
  if (err){
    console.log(err)
  } else {
    console.log(author)
  }
})


module.exports = mongoose
